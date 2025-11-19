import React from "react";
import HomeSlider from "./HomeSlider";
import LatestCropPosts from "./LatestCropPosts";
import HowItWorks from "./HowItWorks";
import AgroBlog from "./AgroBlog";
import FarmersTestimonials from "./FarmersTestimonials";
import FeaturedCrop from "./FeaturedCrop";

const Home = () => {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <LatestCropPosts></LatestCropPosts>
      <HowItWorks></HowItWorks>
      <AgroBlog></AgroBlog>
      <FarmersTestimonials></FarmersTestimonials>
      <FeaturedCrop></FeaturedCrop>
    </div>
  );
};

export default Home;
