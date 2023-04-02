import { useState } from "react";
import { data } from "./Data";
import Display from "./Display";
import Hero from "./Hero";
function App() {
  const [showscore, setscore] = useState(false);
  const [currentQuession, setCurrentQuestion] = useState(0);
  const [mark, setMark] = useState(0);
  const next = () => {
    setCurrentQuestion(currentQuession + 1);
  };
  const scoretest = () => {
    setscore(true);
  };
  const marked = () => {
    setMark(mark + 1);
  };
  const tryagain = () => {
    setscore(false);
    setMark(0);
    setCurrentQuestion(0);
  };
  return (
    <div className="mt-5">
      {showscore ? (
        <Hero mark={mark} length={data.length} tryagain={tryagain} />
      ) : (
        <Display
          title={data[currentQuession].Q}
          option={data[currentQuession].option}
          currentQuession={currentQuession}
          length={data.length}
          next={next}
          scoretest={scoretest}
          marked={marked}
        />
      )}
    </div>
  );
}
export default App;
