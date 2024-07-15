import credentials from "next-auth/providers/credentials";
import dbConnect from "./dbConnect";
import UserModel from "./models/UserModel";
import bcrypt from "bcryptjs";

export const config = {
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        if (credentials == null) return null;
        const user = await UserModel.findOne({
          email: credentials.email,
        });
        if (user) {
          const isValid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
          if (isValid) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
};
