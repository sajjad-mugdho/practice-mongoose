import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  console.log(user);
  return user;
};

export const getUserDB = async () => {
  const users = await User.find();
  console.log("users:", users);
  return users;
};

export const getUserByIdDb = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    {
      name: 1,
      contractNo: 1,
    }
  );
  return user;
};
