import PortfolioItem from "../components/PortfolioItem";
import portItems from "../data/PortfolioItems.json";

export default function Portfolio() {
  const portfolioItems = portItems.portfolioItems;

  console.log(portfolioItems);

  return (
    <>
      {portfolioItems.map((item, index) => {
        return <PortfolioItem key={index} portItem={item} />;
      })}
    </>
  );
}
