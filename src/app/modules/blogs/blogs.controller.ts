import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import httpStatus from 'http-status';
import { blogServices } from './blogs.service';

const createBlog = catchAsync(async (req, res) => {
  const blogData = req.body;

  const { email } = req.user;

  const result = await blogServices.createBlogintoDb(blogData, email);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is created succesfully',
    data: result,
  });
});

const getallBlog = catchAsync(async (req, res) => {
  const result = await blogServices.allBlogintoDb(req.query);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs fetched successfully',
    data: result,
  });
});

const UpdataeBlog = catchAsync(async (req, res) => {
  const blogData = req.body;
  const { email } = req.user;
  const { id } = req.params;
  const result = await blogServices.updateBlogintoDb(blogData, email, id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

const DeleteBlog = catchAsync(async (req, res) => {
  const { email } = req.user;
  const { id } = req.params;
  await blogServices.DeleteBlogintoDb(email, id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Deleted successfully',
  });
});

export const BlogController = {
  createBlog,
  UpdataeBlog,
  getallBlog,
  DeleteBlog,
};
