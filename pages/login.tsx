import Button from "@ui/Button";
import Container from "@ui/Container";
import FieldLabel from "@ui/FieldLabel";
import Heading from "@ui/Heading";
import Page from "@ui/Page";
import TextField from "@ui/TextField";
import { useFormik } from "formik";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <Page>
      <Container className="min-h-screen">
        <div className="w-full border border-primary-30 p-5">
          <EmailLogin />
        </div>
      </Container>
    </Page>
  );
};

const EmailLogin = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {},
  });

  return (
    <div>
      <Heading type="Heading 02" className="mb-10">
        Login to DPL™
      </Heading>
      <form onSubmit={formik.handleSubmit} className="grid gap-4">
        <FieldLabel>EMAIL ADDRESS</FieldLabel>
        <TextField
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          type="email"
          inputClassName="w-full"
          placeholder="email@email.com"
        />
        <FieldLabel>PASSWORD</FieldLabel>
        <TextField
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          type="password"
          inputClassName="w-full"
          placeholder="******"
        />
        <Button className="h-[52px] w-full">Send</Button>
      </form>
    </div>
  );
};

export default Login;
