import { hash, compare} from "bcrypt";

const hashPassword = async (password : string) => {
    return await hash(password, 10);
  };
  
  const comparePasswords = async (receivedPassword : string, hashedPassword : string) => {
    return await compare(receivedPassword, hashedPassword);
  };
  
  export { hashPassword, comparePasswords };