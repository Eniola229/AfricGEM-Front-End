import Section from "../../ui/Section";
import HighlightList from "./HighlightList";

function Highlight() {
  return (
    <Section className="bg-green-50  pt-4 pb-14">
      <div className="space-y-8">
        <h2 className="head">highlights</h2>
        <div className=" mt-6 w-screen">
          <div className="highlight-container flex overflow-auto w-full justify-center">
            {/* <!-- Javscript insert array of highlight --> */}
            {Array.from({ length: 6 }).map((_, i) => (
              <HighlightList key={i} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Highlight;
