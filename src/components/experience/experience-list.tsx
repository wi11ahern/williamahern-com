import ExperienceItem, { Experience } from "./experience-item";

interface Props {
  experiences: Experience[];
}

const ExperienceList = (props: Props) => {
  const experienceItems = props.experiences.map((experience, index) => {
    return <ExperienceItem key={index} id={index} experience={experience} />;
  });

  return <>{experienceItems}</>;
};

export default ExperienceList;
