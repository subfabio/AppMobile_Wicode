import React from "react";
import { View, Text } from "react-native";

import useNews from "../../hooks/useNews";
import BreakingNews from "../BreakingNews";
import Screen from "../common/Screen";
import EntertainmentNews from "../EntertainmentNews";
import FeaturedNews from "../FeaturedNews";
import PoliticalNews from "../PoliticalNews";
import SearchBar from "../cards/SearchBar";
import TechNews from "../TechNews";

const Home = () => {
  const [
    featuredNews,
    politicalNews,
    techNews,
    entertainmentNews,
    breakingNews,
  ] = useNews();

  return (
    <Screen>
      <SearchBar />
      <FeaturedNews item={featuredNews} />
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      <EntertainmentNews data={entertainmentNews} />
    </Screen>
  );
};

export default Home;
