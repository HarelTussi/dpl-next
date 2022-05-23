import CreateAccount from "@components/Registration/CreatAccount";
import Container from "@ui/Container";
import Divider from "@ui/Divider";
import Heading from "@ui/Heading";
import Page from "@ui/Page";
import Paragraph from "@ui/Paragraph";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useRegistrationStore } from "stores/registration";

type Props = {};

const steps = [CreateAccount];

const Register = (props: Props) => {
  const step = useRegistrationStore((state) => state.step);
  return (
    <Page>
      <Head>
        <title>Register to DPL</title>
      </Head>
      <Container>
        <div className="border border-primary-40 p-6">
          <div>
            <Paragraph className="mb-2">
              {step}/{steps.length}
            </Paragraph>
            {steps.map((Comp, index) =>
              step === index + 1 ? <Comp key={index} /> : null
            )}
          </div>
          <Divider />
          <div>
            <Heading type="Subhead 01">The Diamond Price List - DPL™</Heading>
            <Paragraph className="mt-4">
              The DPL is accessible only to the diamond trade members, and is in
              full compliance using multiple security levels and close
              monitoring in order to make sure your details are secured and
              confidential. This Is ensured using multiple advanced security
              protocols, including AML/KYC verification process.
            </Paragraph>
            <Paragraph className="mt-4 text-primary-70">
              By clicking Next step, you agree to our
              <Link href="/terms">
                <a className="inline-block underline"> Terms and Conditions</a>
              </Link>{" "}
              and{" "}
              <Link href="/privacy">
                <a className="inline-block underline">Privacy Policy</a>
              </Link>
            </Paragraph>
            <Paragraph className="mt-6">
              I have an account,{" "}
              <Link href="/login">
                <a className="inline-block font-bold underline">Sign in</a>
              </Link>
            </Paragraph>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default Register;
