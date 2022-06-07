import GuestPage from "@components/Page/GuestPage";
import Container from "@ui/Container";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import Head from "next/head";
import Image from "next/image";

type Props = {};

const methodlogy = ({}: Props) => {
  return (
    <GuestPage>
      <Container withLines={false}>
        <Head>
          <title>Methodology</title>
        </Head>
        <Section className="methodology">
          <Heading type="Subhead 04">Methodology</Heading>
          <Heading type="Heading 02">Introduction</Heading>
          <Paragraph className="mb-5">
            The Diamond Price List - DPL™, created for the diamond industry, is
            the result of extensive research, involving a unique and vast set of
            data available only to the DPL. The methodology is based on advanced
            Machine Learning, Artificial Intelligence (AI) and data science
            algorithms, creating an optimized price list to reflect the market
            in the most accurate and objective manner.
          </Paragraph>
          <Paragraph>
            Artificial Intelligence algorithms rely on the availability of large
            amounts of quality data to run models that can learn complex and
            sophisticated functions. The DPL uses sophisticated algorithms and
            has access to an extensive set of rich data, affording it a
            competitive advantage when creating accurate and reliable artificial
            intelligence models.
          </Paragraph>
        </Section>
        <Section className="scheme-overview">
          <Heading type="Heading 02">Scheme Overview</Heading>
          <div className="overflow-x-auto lg:hidden">
            <Image
              alt="methodlogy"
              src="/assets/images/methodology.png"
              width={1534}
              height={397}
              layout="fixed"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              alt="methodlogy"
              src="/assets/images/methodology.png"
              width={1534}
              height={397}
              layout="responsive"
            />
          </div>
        </Section>
        <Section className="data-exploration lg:flex">
          <div>
            <Heading type="Heading 02">Data Exploration</Heading>
            <Paragraph className="mb-6">
              Firstly, we explored extensively the rich data we have on diamond
              asking prices and detected behavioral trends between prices in
              different cells in the same table or at similar locations across
              tables. Our next step is to calculate a final market price
              representation using supply and demand data and market analysis
              insights. We investigated the relationship between asking prices
              to the aforementioned market price representation. In particular,
              we analyzed the discount percentage of a certain stone from it’s
              final market price representation - distribution, consistency, and
              different factors affecting it.
            </Paragraph>
            <Paragraph className="mb-6">
              <b>Figure 1</b>
              <br />
              <br />
              Example of a heat map table with the discount percentage between
              our platform average asking price to our market price
              representation. The darker the color, the lower the average asking
              price compared with the market price. This kind of analysis
              enables us to detect some in-table and cross tables pricing trends
              between different cells.
            </Paragraph>
          </div>
          <div className="relative overflow-x-auto  lg:ml-8 lg:h-[308px] lg:min-h-[308px] lg:w-[566px] lg:min-w-[566px] lg:overflow-hidden lg:pt-10">
            <Image
              alt="data exploration"
              src="/assets/images/data-exploration.png"
              width={566}
              height={308}
              layout="fixed"
            />
          </div>
        </Section>
        <Section className="preprocessing">
          <Heading type="Heading 02">Preprocessing</Heading>
          <Paragraph className="mb-5">
            Anomaly detection is a step in data preprocessing that identifies
            data points, events, and/or observations that deviate from a
            dataset’s normal behavior. Anomalous data can indicate critical
            incidents, such as a technical glitch, or potential opportunities,
            for instance a change in consumer behavior. Machine learning is
            progressively being used to automate anomaly detection.
          </Paragraph>
          <Paragraph className="mb-5">
            Performing an extensive data exploration and using advanced anomaly
            detection methods, we were able to identify the data sources with
            the highest correlation to the final price list price and under what
            conditions. Conversely, using these methods led to an understanding
            of what noisy data should be filtered out. Those insights led us to
            implement data preprocess pipelines ensuring only relevant and
            reliable data is used as an input to our models.
          </Paragraph>
        </Section>
        <Section className="model-training lg:flex">
          <div>
            <Heading type="Heading 02">Model - Training</Heading>
            <Paragraph className="mb-6">
              Our model uses state of the art machine learning methods adapted
              specifically to our application. We have modeled the task here as
              a regression problem: For each table cell we take as input many
              variables, such as the average asking price, market analysis,
              supply and demand, its neighbors cells values, etc. As an output
              we expect to get the price list price value for the cell. During
              training, we use as a ground truth the market price representation
              we created earlier on. In addition, there are some restrictions
              and rules that apply to the model output whose purpose is to
              ensure consistency in the table and adherence to other domain
              conventions.
            </Paragraph>
            <Paragraph className="mb-6">
              <b>Figure 2</b>
              <br />
              Sample Reference Prices Vs DPL Average Asking Price. The linear
              line (White) represents a multiplication of the asking price by a
              uniform factor. The Green dots are DPL price list prices and the
              red dots are the reference prices. It can be seen that DPL’s
              prices behave more linearly relative to the asking price and are
              therefore more consistent with market asking prices.
            </Paragraph>
          </div>
          <div className="relative overflow-x-auto lg:ml-8 lg:min-h-[349px] lg:min-w-[553px] lg:overflow-hidden lg:pt-10">
            <Image
              alt="data exploration"
              src="/assets/images/model-training.png"
              width={553}
              height={349}
              layout="fixed"
            />
          </div>
        </Section>
        <Section className="post-processing">
          <Heading type="Heading 02">Post Processing</Heading>
          <Paragraph className="mb-6">
            Anomaly detection is a step in data preprocessing that identifies
            data points, events, and/or observations that deviate from a
            dataset’s normal behavior. Anomalous data can indicate critical
            incidents, such as a technical glitch, or potential opportunities,
            for instance a change in consumer behavior. Machine learning is
            progressively being used to automate anomaly detection.
            <br />
            Performing an extensive data exploration and using advanced anomaly
            detection methods, we were able to identify the data sources with
            the highest correlation to the final price list price and under what
            conditions. Conversely, using these methods led to an understanding
            of what noisy data should be filtered out. Those insights led us to
            implement data preprocess pipelines ensuring only relevant and
            reliable data is used as an input to our models.
          </Paragraph>
        </Section>
        <Section className="result">
          <Heading type="Heading 02">Result</Heading>
          <Paragraph className="mb-6">
            The result of the process described above, is an up-to-date price
            list, based on machine learning algorithms and the use of extensive
            and unique data, and at the same time undergoing the necessary
            regulation so that it meets market conventions. We truly believe
            that such work will serve the entire diamond market and create an
            objective standardisation for diamond prices from now on.
          </Paragraph>
        </Section>
        <Section className="update-process">
          <Heading type="Heading 02">Update Process</Heading>
          <div className="relative overflow-x-auto lg:hidden">
            <Image
              alt="update process"
              src="/assets/images/update-process.png"
              width={1389}
              height={375}
              layout="fixed"
            />
          </div>
          <div className="relative hidden lg:block">
            <Image
              alt="update process"
              src="/assets/images/update-process.png"
              width={1389}
              height={375}
              layout="responsive"
            />
          </div>
          <br />
          <Paragraph>
            We see the update process of DPL as a significant advantage we have
            over other methods. Here, pricelist updates rely only on real world
            data, and therefore reflect market trends in the most objective and
            accurate way. The data participating in the update process is
            diverse and includes, among other things, asking price changes,
            supply and demand, and market analysis.
            <br />
            Similar to the process described above for pricelist creation, all
            relevant data is being preprocessed and fed into a machine learning
            model in order to determine the change percentage for each cell in
            the pricelist. Postprocess steps are taken here as well in order to
            make sure prices values are valid and consistent.
            <br />
            In the last year we have been constantly monitoring various data on
            our platform and conducting studies to further improve our models.
            We consistently see empirically that our pricelist responds
            correctly to different market trends compared to competing methods.
          </Paragraph>
        </Section>
      </Container>
    </GuestPage>
  );
};

export default methodlogy;
