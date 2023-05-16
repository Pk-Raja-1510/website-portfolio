import React from "react";
import BenefitsOfMetaverse from "src/pageComponents/BenefitsOfMetaverse";
import FashionIndustryMetaverse from "src/pageComponents/FashionIndustryMetaverse";
import Metaverses from "src/pageComponents/Metaverses";
import MetaverseTrend from "src/pageComponents/MetaverseTrend";
const Blog = (props) => {
  const { id } = props;
  if (id === "top-metaverse-trends-that-will-reshape-the-future") return <MetaverseTrend />;
  if (id === "how-metaverse-is-empowering-people-with-disabilities") return <BenefitsOfMetaverse />;
  if (id === "metaverse-effectively-reshaping-the-fashion-industry") return <FashionIndustryMetaverse />;
  if (id === "how-metaverse-will-transform-the-real-estate-industry") return <Metaverses />;
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
