import { contentSecurityPolicy } from "helmet";
import Joi from "joi";
import { title } from "process";

const signupSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,30}$"))
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,30}$"))
    .required(),
});

const createProjectSchema = Joi.object({
  projectName: Joi.string().min(5).max(60).required(),
  details: Joi.string().required(),
  technologies: Joi.array().items(Joi.string()).min(1).max(5).required(),
  numMembers: Joi.number().min(2).max(6).required(),
});

const createPostSchema = Joi.object({
  title: Joi.string().min(3).max(40).required(),
  content: Joi.string().required(),
});

const updateUserSchema = Joi.object({
  urlAvatar: Joi.string(),
  title: Joi.string().min(3).max(40),
  details: Joi.string().max(250),
  technologies: Joi.array().items(Joi.string()).min(1).max(5),
  links: Joi.array().items(Joi.string()).max(8),
});

const schemas = {
  login: loginSchema,
  signup: signupSchema,
  createProject: createProjectSchema,
  createPost: createPostSchema,
  updateUser: updateUserSchema
};

type Schemas = "login" | "signup" | "createProject" | "createPost" | "updateUser";

export const validateData = async ({
  schema,
  data,
}: {
  schema: Schemas;
  data: object;
}) => {
  try {
    const value = await schemas[schema].validateAsync(data);
    return value;
  } catch (error: any) {
    // console.log(error);
    return { error: error.name, message: error.message };
  }
};
