import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    contact: "0123456789",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    contact: "0123456789",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
