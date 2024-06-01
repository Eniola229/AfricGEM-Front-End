import NewsLetterForm from "./NewsLetterForm";

function Footer() {
  return (
    <footer className=" bg-green-800 py-8  text-slate-50 text-center static">
      <div className=" space-y-6">
        <p className="text-xl font-medium capitalize">
          subscribe to our newsletter and Discover the Power of Africtv's Blog{" "}
        </p>
        <NewsLetterForm />
      </div>
    </footer>
  );
}

export default Footer;
