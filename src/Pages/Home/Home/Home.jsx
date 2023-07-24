import CollegeCard from "../CollegeCard/CollegeCard";
import Gallery from "../Gallery/Gallery";
import ResearchLinks from "../ResearchLinks/ResearchLinks";
import ReviewAndFeedback from "../ReviewAndFeedback/ReviewAndFeedback";
import Search from "../Search/Search";

const Home = () => {
  return (
    <>
      <Search></Search>
      <CollegeCard></CollegeCard>
      <Gallery></Gallery>
      <ResearchLinks></ResearchLinks>
      <ReviewAndFeedback></ReviewAndFeedback>
    </>
  );
};

export default Home;
