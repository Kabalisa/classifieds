import * as yup from "yup";

export const productValidationSchema = yup.object().shape({
  name: yup.string().required("name is Required"),
  price: yup.number().required("price is Required"),
  description: yup.string().required("description is required"),
});
