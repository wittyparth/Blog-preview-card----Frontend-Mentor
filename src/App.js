import "./App.css";
import ig from "./assets/assets/images/illustration-article.svg";
import pp from "./assets/assets/images/image-avatar.webp";
function App() {
  return (
    <div className="font-figtree w-[100vw] h-[100vh] bg-yellow flex items-center justify-center text-[16px]">
      <div className="w-[75vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] bg-white p-6 flex flex-col gap-4 rounded-lg border-black border-2 outline-offset-2 items-start shadow-[10px_10px_rgb(0,0,0)]">
        <img
          src={ig}
          alt="Illustration of svg"
          className="rounded-lg w-[100%]"
        />
        <p className="p-2 text-md font-bold text-black bg-yellow rounded-lg">
          Learning
        </p>
        <p>Published 3rd July 2024</p>
        <h1 className="text-2xl font-bold">HTML and CSS foundations</h1>
        <p className="tracking-wide text-Grey">
          These languages are the very backbone of every website defining the
          structure, content and presentation.
        </p>
        <div className="flex items-center gap-3">
          <img src={pp} alt="Greg hopper" className="w-[30px]" />
          <p className="text-md font-bold">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default App;
