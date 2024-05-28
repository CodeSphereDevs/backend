import Joi from "joi";

const signupSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,30}$"))
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,30}$"))
    .required(),
});

const schemas = { login: loginSchema, signup: signupSchema };

type Schemas = "login" | "signup";

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
    console.log(error);
    return { error: error.name, message: error.message };
  }
};
