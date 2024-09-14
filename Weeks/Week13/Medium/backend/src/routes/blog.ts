import { Hono } from "hono";
import { verify } from "hono/jwt";
import { CreateBlogInput, UpdateBlogInput } from "@iamparmjeet/medium-common";
import { getPrisma } from "../middleware/dbMiddleware";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();

blogRouter.use("/*", async (c, next) => {
	const authHeader = (await c.req.header("authorization")) || "";
	const user = await verify(authHeader, c.env.JWT_SECRET);
	try {
		if (user) {
			c.set('userId', String(user.id))
			await next();
		} else {
			c.status(403);
			return c.json({
				message: "You are not logged in ",
			});
		}
	} catch (error) {
		c.status(403);
			return c.json({
				message: "Catch:You are not logged in ",
			});
	}
});

//Creating blog post
blogRouter.post("/", async (c) => {
	const body = await c.req.json();
	const { success } = CreateBlogInput.safeParse(body)
	if (!success) {
		c.status(411)
		return c.json({
			message: 'Inputs are incorrect'
		})
	}
	const authorId = c.get("userId");
	const prisma = await getPrisma(c.env.DATABASE_URL);

	// Create blog
	const blog = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId,
		},
	});
	return c.json({
		id: blog.id,
	});
});

// update single post
blogRouter.put("/", async (c) => {
	const body = await c.req.json();
	const { success } = UpdateBlogInput.safeParse(body)
	if (!success) {
		c.status(411)
		return c.json({
			message: 'Update Inputs are incorrect'
		})
	}
	const prisma = await getPrisma(c.env.DATABASE_URL);

	const blog = await prisma.post.update({
		where: {
			id: body.id,
		},
		data: {
			title: body.title,
			content: body.content,
		},
	});
	return c.json(blog);
});

// All blog (pagination later)
blogRouter.get("/bulk", async (c) => {
	const prisma = await getPrisma(c.env.DATABASE_URL);

	const blogs = await prisma.post.findMany();

	return c.json(blogs);
});

// Single Blog
blogRouter.get("/:id", async (c) => {
	const id = await c.req.param("id");
	const prisma = await getPrisma(c.env.DATABASE_URL);

	try {
		const blog = await prisma.post.findFirst({
			where: {
				id: id,
			},
		});
		return c.json(blog);
	} catch (error) {
		c.status(411);
		return c.json({
			message: `Error while fetching blog post ${error}`,
		});
	}
});
