import * as yup from "yup";

export const signupValidationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(10, ({ min }) => `phoneNumber must be at least ${min} numbers`)
    .max(10, ({ max }) => `phoneNumber can't exceed ${max} numbers`)
    .required("phoneNumber is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords don't match!")
    .required("confirmPassword is required"),
});
