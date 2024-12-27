import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    content: z.string(),
  }),
});
const UpdateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
  }),
});

export const blogsvalidationSchema = {
  createBlogValidationSchema,
  UpdateBlogValidationSchema,
};
