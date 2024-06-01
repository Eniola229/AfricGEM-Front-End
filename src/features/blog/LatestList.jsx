import { Link } from "react-router-dom";

function LatestList() {
  return (
    <div className="h-96  w-96 relative bg-slate-300">
      <Link to="/latest?id='1'">
        <img
          src="https://media.istockphoto.com/id/1156837650/photo/javascript-code-computer-language-programming-internet-text-editor-components-display-screen.webp?b=1&s=170667a&w=0&k=20&c=HhWJOCqt5j-xP_uNvbKP6tPRd9tj0hZw5N1-XMuDMfU="
          alt="fox"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute py-2.5 px-2 bg-neutral-950/60 text-slate-50 font-medium bottom-1">
          <h3 className="text-lg">
            lost fox returned to the zoo after a badass moment escaping the zoo
          </h3>
        </div>
      </Link>
      <div className="bg-slate-200 py-2 px-4  font-medium absolute top-0">
        15 min ago
      </div>
    </div>
  );
}

export default LatestList;
