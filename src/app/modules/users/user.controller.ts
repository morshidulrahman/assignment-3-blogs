import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import { userServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;

  const result = await userServices.createUserIntoDB(userData);

  SendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

export const userController = {
  createUser,
};
