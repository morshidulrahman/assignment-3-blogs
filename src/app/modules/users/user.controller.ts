import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import httpStatus from 'http-status';
import { userServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;

  const result = await userServices.createUserIntoDB(userData);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const userController = {
  createUser,
};
