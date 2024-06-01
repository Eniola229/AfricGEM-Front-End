import MiniHeader from "./MiniHeader";
import Section from "./Section";

function BlogPostLayout({ children, title, column = "toLeft", className }) {
  // const gridCol =
  //   column === "toLeft" && column
  //     ? "grid-cols-[1fr_30rem]"
  //     : "grid-cols-[30rem_1fr]";
  return (
    <Section className="py-12 px-4">
      {/* <h3 className="head text-center">{title} </h3> */}
      <MiniHeader />
      <div className={`grid  grid-rows-[auto] ${"gridCol"} h-full my-4 gap-2 `}>
        {children}
      </div>
    </Section>
  );
}

export default BlogPostLayout;
