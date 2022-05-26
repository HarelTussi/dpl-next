import InfoBox from "@components/InfoBox";
import Section from "@ui/Section";
type Props = {
  benefits: {
    icon: string;
    title: string;
    subtitle: string;
  }[];
  className?: string;
};

const Benefits = ({ benefits, className = "" }: Props) => {
  return (
    <Section className={className}>
      {benefits.map((benefit, index) => {
        return (
          <InfoBox
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            text={benefit.subtitle}
          />
        );
      })}
    </Section>
  );
};

export default Benefits;
