import React from "react";
import KamranQamar from "src/pageComponents/KamranQamar";

const Blog = (props) => {
  const { id } = props;
  if (id === "kamranqamar-advisor") return <KamranQamar />;
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
