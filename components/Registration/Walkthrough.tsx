import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Link from "next/link";

const Walkthrough = () => {
  return (
    <div className="xl:flex xl:h-full xl:flex-col xl:justify-between">
      <div>
        <Heading type="Subhead 01">The Diamond Price List - DPL™</Heading>
        <Paragraph className="mt-4">
          The DPL is accessible only to the diamond trade members, and is in
          full compliance using multiple security levels and close monitoring in
          order to make sure your details are secured and confidential. This Is
          ensured using multiple advanced security protocols, including AML/KYC
          verification process.
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
      </div>
      <Paragraph className="mt-6">
        I have an account,{" "}
        <Link href="/login">
          <a className="inline-block font-bold underline">Sign in</a>
        </Link>
      </Paragraph>
    </div>
  );
};

export default Walkthrough;
