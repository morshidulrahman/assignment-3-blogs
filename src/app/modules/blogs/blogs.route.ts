import express from 'express';
import { BlogController } from './blogs.controller';
import auth from '../../middlewares/auth';
import validationRequest from '../../middlewares/validateRequest';
import { blogsvalidationSchema } from './blogs.validation';

const router = express.Router();

router.post(
  '/blogs',
  auth('user'),
  validationRequest(blogsvalidationSchema.createBlogValidationSchema),
  BlogController.createBlog,
);

router.get('/blogs', BlogController.getallBlog);

router.patch(
  '/blogs/:id',
  auth('user'),
  validationRequest(blogsvalidationSchema.UpdateBlogValidationSchema),
  BlogController.UpdataeBlog,
);

router.delete('/blogs/:id', auth('user'), BlogController.DeleteBlog);

export const BlogsRouters = router;
