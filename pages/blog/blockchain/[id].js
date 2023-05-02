import React from "react";
import BlockchainCenVsDecen from "src/pageComponents/BlockchainCenVsDecen";
import BlockchainExpert from "src/pageComponents/BlockchainExpert";
import BlockchainProceedToPay from "src/pageComponents/BlockchainProceedToPay";
const Blog = (props) => {
  const { id } = props;
  if (id === "blockchain-expert") return <BlockchainExpert />;
  if (id === "blockchain-cenVsDecen") return <BlockchainCenVsDecen />;
  if (id === "how-blockchain-can-transform-the-procure-to-pay-process") return <BlockchainProceedToPay />;
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
