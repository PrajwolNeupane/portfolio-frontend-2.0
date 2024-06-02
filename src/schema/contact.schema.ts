import * as y from "yup";

export const contactSchema = y.object({
  name: y.string().required("Please provide your name"),
  email: y
    .string()
    .required("Please provide email")
    .email("Please provide valid email"),
  message: y.string().required("Please provide message"),
});

export type ContactSchema = y.InferType<typeof contactSchema>;
