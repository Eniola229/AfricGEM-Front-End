import Section from "../../ui/Section";
import LatestList from "./LatestList";

function Latest() {
  return (
    <Section className="py-4 px-4">
      <h3 className="head">Latest</h3>
      <div className="highlight-container py-4 flex overflow-auto gap-4 w-full justify-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <LatestList key={i} />
        ))}
      </div>
    </Section>
  );
}

export default Latest;
