import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Naman",
      email: "naman@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Sam",
      email: "sam@gm.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
};

export default data;
