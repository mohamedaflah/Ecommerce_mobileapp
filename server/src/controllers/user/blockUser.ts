import { NextFunction, Request, Response } from "express";
import { getPayloadFromJWT } from "../../_lib/util/getPayloadFromJwt";
import UserModel from "../../models/user/UserModel";

export const updateUserStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { status, userId } = req.query;

    await UserModel.updateOne(
      { _id: userId },
      {
        $set: { status: status },
      }
    );
    const updatedUser=await UserModel.findById(userId)

    res
      .status(200)
      .json({ status: true, message: "Succesfull", user: updatedUser });
  } catch (error) {
    next(error);
  }
};
