import PortfolioItem from "../components/PortfolioItem";
import portItems from "../data/PortfolioItems.json";

export default function Portfolio() {
  const portfolioItems = portItems.portfolioItems;

  return (
    <div className="flex flex-col gap-4">
      {portfolioItems.map((item, index) => {
        return <PortfolioItem key={index} portItem={item} />;
      })}
    </div>
  );
}
