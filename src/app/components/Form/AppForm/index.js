import { Form, Formik } from "formik";

export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {<Form>{children}</Form>}
    </Formik>
  );
}
