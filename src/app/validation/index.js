import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export const DepartmentSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, ({ min }) => `Name must be at least ${min} characters`)
    .max(40, ({ max }) => `Name must be at most ${max} characters`)
    .required("Name is Required"),
    role: Yup.string()
    .required("Role is Required"),
});

export const EmployeeSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, ({ min }) => `First Name must be at least ${min} characters`)
    .max(40, ({ max }) => `First Name must be at most ${max} characters`)
    .required("FirstName is Required"),
    surname: Yup.string()
    .min(4, ({ min }) => `Last Name must be at least ${min} characters`)
    .max(40, ({ max }) => `Last Name must be at most ${max} characters`)
    .required("FirstName is Required"),
   email: Yup.string()
    .email("Please enter valid email")
    .required("Email is Required"),
    telephone: Yup.number()
    .required("Telephone  is Required"),
    role: Yup.string()
    .required("Role is Required"),
    telephone: Yup.number()
    .required("Telephone is Required"),
});
