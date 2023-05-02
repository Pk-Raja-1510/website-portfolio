import React from "react";
import Django from "src/pageComponents/Django";
import Fullstack from "src/pageComponents/Fullstack";
import Javascript from "src/pageComponents/Javascript";
import ResonsForPHP from "src/pageComponents/ResonsPHP";
import Swift from "src/pageComponents/Swift";
import TechTalent from "src/pageComponents/TechTalent";
const Blog = (props) => {
  const { id } = props;
  if (id === "swift") return <Swift />;
  if (id === "TechTalent") return <TechTalent />;
  if (id === "how-can-a-full-stack-development-team-benefit-your-business") return <Fullstack />;
  if (id === "javascript-tricks-to-accomplish-your-business-goals") return <Javascript />;
  if (id === "what-is-django-how-can-it-benefit-your-business") return <Django />;
  if (id === "10-reasons-why-php-is-the-best-choice-for-startups") return <ResonsForPHP />;
  return <div>Not found</div>;
};

export default Blog;
export const getServerSideProps = async (context) => {
  const { params } = context;

  return {
    props: {
      ...params,
    },
  };
};
