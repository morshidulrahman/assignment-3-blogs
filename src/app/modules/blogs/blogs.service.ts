import QueryBuilder from '../../builder/queryBuilder';
import AppError from '../../errors/AppError';

import { User } from '../users/user.model';
import { Tblog } from './blogs.interface';
import { BlogModel } from './blogs.model';

const BlogSerachable = ['content', 'title'];

const createBlogintoDb = async (payload: Tblog, email: string) => {
  const userinfo = await User.findOne({ email });

  if (!userinfo) {
    throw new AppError(400, 'you are not authenticated');
  }
  const newdata = { ...payload, author: userinfo._id };
  const result = await BlogModel.create(newdata);
  return result;
};

const updateBlogintoDb = async (
  payload: Partial<Tblog>,
  email: string,
  id: string,
) => {
  const userinfo = await User.findOne({ email });

  if (!userinfo) {
    throw new AppError(400, 'you are not authenticated');
  }

  const isExistedauthor = await BlogModel.findOne({ author: userinfo._id });

  const isExistedBloginDb = await BlogModel.findById(id);

  if (!isExistedBloginDb) {
    throw new AppError(404, 'Blog not found');
  }

  if (!isExistedauthor) {
    throw new AppError(400, 'You are unAuthorized to update the Blog');
  }
  const result = await BlogModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const DeleteBlogintoDb = async (email: string, id: string) => {
  const userinfo = await User.findOne({ email });

  if (!userinfo) {
    throw new AppError(400, 'you are not authenticated');
  }

  const isExistedauthor = await BlogModel.findOne({ author: userinfo._id });

  const isExistedBloginDb = await BlogModel.findById(id);

  if (!isExistedBloginDb) {
    throw new AppError(404, 'Blog not found');
  }

  if (!isExistedauthor) {
    throw new AppError(400, 'You are unAuthorized to Delete the Blog');
  }
  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};

const allBlogintoDb = async (query: Record<string, unknown>) => {
  const BlogQuery = new QueryBuilder(BlogModel.find().populate('author'), query)
    .search(BlogSerachable)
    .filter()
    .sort();

  const result = await BlogQuery.modelQuery;
  return result;
};

export const blogServices = {
  createBlogintoDb,
  updateBlogintoDb,
  allBlogintoDb,
  DeleteBlogintoDb,
};
