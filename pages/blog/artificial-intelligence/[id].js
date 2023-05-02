import React from "react";
import CrmAi from "src/pageComponents/Crm&Ai";

const Blog = (props) => {
  const { id } = props;
  if (id === "artificial-intelligence-in-customer-relationship-management") return <CrmAi />;
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
