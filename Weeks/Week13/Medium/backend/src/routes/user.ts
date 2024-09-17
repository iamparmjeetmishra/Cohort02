import { Hono } from "hono";
import { sign } from "hono/jwt";
import { getPrisma } from "../middleware/dbMiddleware";
import { SigninInputProps, SignupInputProps } from "@iamparmjeet/medium-common";


export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
}>();


userRouter.post("/signup", async (c) => {
	const body = await c.req.json();
	const { success, error } = SignupInputProps.safeParse(body)
	console.log(`err creating user: ${error}`)
	if (!success) {
		c.status(411)
		return c.json({
			message: 'Signup Inputs are incorrect'
		})
	}
	console.log("from signup");

	try {
		const prisma = await getPrisma(c.env.DATABASE_URL);
		const user = await prisma.user.create({
			data: {
				email: body.email,
				name: body.name,
				password: body.password,
			},
		});
		const token = await sign({ id: user.id }, c.env.JWT_SECRET);
		console.log(token);

		return c.json({
			jwt: token,
			msg: "User Created successfully",
		});
	} catch (error) {
		console.error("Error creating user:", error);
		return c.json({ error: "Failed to create user" }, 500);
	}
});

userRouter.post("/signin", async (c) => {
	const body = await c.req.json();
	const { success } = SigninInputProps.safeParse(body)
	if (!success) {
		c.status(411)
		return c.json({
			message: 'Signin inputs are incorrect'
		})
	}
	try {
		const prisma = await getPrisma(c.env.DATABASE_URL);
		const user = await prisma.user.findUnique({
			where: {
				email: body.email,
				password: body.password
			},
		});

		if (!user) {
			c.status(403);
			return c.json({ error: "User not found" });
		}

		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({
			message: "User Signin",
			jwt: jwt,
		});
	} catch (error) {
		console.log("Error signin:", error);
		return c.json({ error: "Failed to sigin user" }, 500);
	}
});