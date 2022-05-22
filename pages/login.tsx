import Button from "@ui/Button";
import Container from "@ui/Container";
import FieldLabel from "@ui/FieldLabel";
import Heading from "@ui/Heading";
import Page from "@ui/Page";
import Paragraph from "@ui/Paragraph";
import TextField from "@ui/TextField";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Check from "../assets/check.svg";

type Props = {};

const Login = (props: Props) => {
  return (
    <Page>
      <Head>
        <title>Login to DPL</title>
      </Head>
      <Container
        className="min-h-screen pb-[80px]  
        lg:relative lg:flex lg:min-h-0 lg:items-center lg:justify-center
        xl:min-h-screen
        "
      >
        <div
          className="w-full border border-primary-30 bg-white  p-5
          lg:flex lg:p-10 xl:-mt-[60px]"
        >
          <GetLogin />
          <div className="flex items-center">
            <div
              className="lg:ml-22 mt-10 mb-[30px] h-[0.5px] w-full
            bg-primary-40 lg:my-0 lg:ml-[88px] lg:mr-20 lg:h-[390px] lg:w-[0.5px]"
            ></div>
          </div>
          <EmailLogin />
        </div>
      </Container>
    </Page>
  );
};

const GetLogin = () => {
  return (
    <div className="lg:flex lg:h-full lg:flex-1 lg:flex-col lg:items-center">
      <Heading type="Heading 02">
        Access DPL™ with <span className="text-GET">Get-Diamonds</span>
      </Heading>
      <Paragraph className="mt-2">
        Sign in with your Get-Diamonds account and get fast access to DPL™, DPL™
        Calculator.
      </Paragraph>
      <div className="mt-8">
        {[
          "The world’s largest database of polished diamonds.",
          "Anything else you would like to think of.",
          "Available in the app stores for all Apple and Android devices.",
        ].map((step, index) => {
          return (
            <div key={index} className="mb-6 flex">
              <Check
                className="relative top-[1px] mr-2 min-w-[24px]"
                stroke="#FA922A"
              />
              <Paragraph>{step}</Paragraph>
            </div>
          );
        })}
      </div>
      <button className="mt-10 flex h-[52px] w-full overflow-auto rounded-md bg-white shadow-md lg:mb-0">
        <span className="mx-3 flex h-full items-center text-[18px] font-bold text-GET">
          GET
        </span>
        <span className="flex h-full flex-1 items-center justify-center bg-GET font-bold text-white">
          Sign In With Get-Diamonds
        </span>
      </button>
    </div>
  );
};

const EmailLogin = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {},
  });

  return (
    <div className="lg:flex-1">
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
        <Button className="h-[52px] w-full lg:max-w-[200px]">Send</Button>
      </form>
      <Link href="/forgot">
        <a className="mt-4 block text-sm font-bold underline">
          Forgot Password?
        </a>
      </Link>
      <Paragraph className="mt-4 block text-sm">
        Don’t have an account yet?
        <Link href="/forgot">
          <a className="ml-2 inline-block text-sm font-bold underline">
            Sign up
          </a>
        </Link>
      </Paragraph>
    </div>
  );
};

export default Login;
