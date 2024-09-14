import {z} from 'zod'

export const SignupInputProps = z.object({
	name: z.string().optional(),
	password: z.string().min(6, { message: 'Password must be 6 charactes or more' }),
	username: z.string().email()
})

export const SigninInputProps = z.object({
   username: z.string().email(),
   password: z.string().min(6, {message: 'Password must be atleast 6 characters or more'})
})

export const CreateBlogInput = z.object({
   title: z.string(),
   content: z.string(),
   id: z.string()
})

export const UpdateBlogInput = z.object({
   id: z.string(),
   title: z.string().optional(),
   content: z.string().optional(),
})

export type SignupInputs = z.infer<typeof SignupInputProps>
export type SigninInputs = z.infer<typeof SigninInputProps>
export type CreateBlog = z.infer<typeof CreateBlogInput>
export type UpdateBlog = z.infer<typeof UpdateBlogInput>