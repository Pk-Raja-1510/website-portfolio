import Metaverse from "pages/metaverse";
import React from "react";
import BenefitsOfMetaverse from "src/pageComponents/BenefitsOfMetaverse";
import BlockchainCenVsDecen from "src/pageComponents/BlockchainCenVsDecen";
import BlockchainExpert from "src/pageComponents/BlockchainExpert";
import BlockchainProceedToPay from "src/pageComponents/BlockchainProceedToPay";
import CrmAi from "src/pageComponents/Crm&Ai";
import Django from "src/pageComponents/Django";
import FashionIndustryMetaverse from "src/pageComponents/FashionIndustryMetaverse";
import Fullstack from "src/pageComponents/Fullstack";
import Gaming from "src/pageComponents/Gaming";
import Javascript from "src/pageComponents/Javascript";
import KamranQamar from "src/pageComponents/KamranQamar";
import Metaverses from "src/pageComponents/Metaverses";
import MetaverseTrend from "src/pageComponents/MetaverseTrend";
import MusicNft from "src/pageComponents/MusicNft";
import ResonsForPHP from "src/pageComponents/ResonsPHP";
import Swift from "src/pageComponents/Swift";
import TechTalent from "src/pageComponents/TechTalent";
const Blog = (props) => {
  const { id } = props;
  if (id === "kamranqamar-advisor") return <KamranQamar />;
  if (id === "nft-gaming") return <Gaming />;
  if (id === "music-nft") return <MusicNft />;
  if (id === "blockchain-expert") return <BlockchainExpert />;
  if (id === "blockchain-cenVsDecen") return <BlockchainCenVsDecen />;
  if (id === "blockchain-proceedToPay") return <BlockchainProceedToPay />;
  if (id === "benefits-metaverse") return <BenefitsOfMetaverse />;
  if (id === "Fashion-metaverse") return <FashionIndustryMetaverse />;
  if (id === "CRM-AI") return <CrmAi />;
  if (id === "Fullstack") return <Fullstack />;
  if (id === "Metaverses") return <Metaverses />;
  if (id === "Javascript") return <Javascript />;
  if (id === "what-is-django-how-can-it-benefit-your-business") return <Django />;
  if (id === "10-reasons-why-php-is-the-best-choice-for-startups") return <ResonsForPHP />;
  if (id === "swift") return <Swift />;
  if (id === "MetaverseTrend") return <MetaverseTrend />;
  if (id === "TechTalent") return <TechTalent />;



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
