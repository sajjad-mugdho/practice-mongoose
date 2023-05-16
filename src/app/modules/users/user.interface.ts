export interface IUser {
  id: string;
  role: "student";
  name: {
    firstname: string;
    middlename?: string;
    lastname: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email: string;
  contractNo: number;
}
