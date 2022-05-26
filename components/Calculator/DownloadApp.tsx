import AppStoreLink from "@components/AppStoreLink";
import Heading from "@ui/Heading";
import Section from "@ui/Section";

const DownloadApp = () => {
  return (
    <Section>
      <div className="w-full bg-primary-20 px-4 py-16">
        <Heading type="Heading 01" className="text-center">
          Download The Application
        </Heading>
        <div className="mt-4 grid gap-y-4 md:mx-auto md:w-fit md:grid-cols-[repeat(2,160px)] md:gap-x-4">
          <AppStoreLink type="apple" className="h-[56px]" />
          <AppStoreLink type="google" className="h-[56px] " />
        </div>
      </div>
    </Section>
  );
};

export default DownloadApp;
