import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import httpStatus from 'http-status';
import { adminServices } from './admin.service';

const BlockUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  await adminServices.BlockinusersintoDb(userId);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Blocked successfully',
  });
});

const DeletedBlogs = catchAsync(async (req, res) => {
  const { id } = req.params;
  await adminServices.BlockDeletedIntoDb(id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
  });
});

export const BlockController = {
  BlockUser,
  DeletedBlogs,
};
