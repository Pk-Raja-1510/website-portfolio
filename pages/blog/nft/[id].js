import React from "react";
import Gaming from "src/pageComponents/Gaming";
import MusicNft from "src/pageComponents/MusicNft";

const Blog = (props) => {
  const { id } = props;
  if (id === "play-to-earn-nft-gaming-development-services") return <Gaming />;
  if (id === "music-nft-marketplace-development-with-unique-features") return <MusicNft />;
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
