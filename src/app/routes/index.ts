import { Router } from 'express';
import { userRouter } from '../modules/users/user.route';
import { authRouter } from '../modules/auth/auth.router';
import { BlogsRouters } from '../modules/blogs/blogs.route';
import { AdminRouter } from '../modules/admin/admin.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    route: userRouter,
  },
  {
    path: '/',
    route: authRouter,
  },
  {
    path: '/',
    route: BlogsRouters,
  },
  {
    path: '/',
    route: AdminRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
