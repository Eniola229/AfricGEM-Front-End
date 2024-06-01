function Section({ className = "bg-slate-50", children }) {
  return <section className={`${className}`}>{children}</section>;
}

export default Section;
