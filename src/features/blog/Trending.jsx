import Section from "../../ui/Section";
import TrendingList from "./TrendingList";

function Trending() {
  return (
    <Section>
      <h3 className="head">Trending....</h3>
      <div className=" flex flex-col  gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <TrendingList key={i} />
        ))}
      </div>
    </Section>
  );
}

export default Trending;
