const Hero = (props) => {
  const tryagain = () => {
    props.tryagain();
  };
  return (
    <div>
      <h1 className="text-center">
        Your Score {props.mark} out of {props.length}
      </h1>
      <div className="text-center mt-5">
        <button className="btn btn-primary" onClick={tryagain}>
          Try Again
        </button>
      </div>
    </div>
  );
};
export default Hero;
