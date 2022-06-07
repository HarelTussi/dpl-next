import AuthPage from "@components/Page/AuthPage";
import Container from "@ui/Container";
import Head from "next/head";
import React from "react";

const ResetPassword = () => {
  return (
    <AuthPage>
      <Head>
        <title>Forgot password?</title>
      </Head>
      <Container></Container>
    </AuthPage>
  );
};

export default ResetPassword;
