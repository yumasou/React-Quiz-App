const Display = (props) => {
  const clickHandle = (value) => {
    value ? props.marked() : console.log("I woung");
    props.currentQuession === props.length - 1
      ? props.scoretest()
      : props.next();
  };
  return (
    <div className="card col-5 m-auto bg-secondary">
      <div className="card-body">
        <h1>
          Question {props.currentQuession + 1}/{props.length}
        </h1>
        <div className="d-flex">
          <p className="h5 mt-3"> Question: {props.title}</p>
          <div className="d-grid gap-3 col-5 mx-auto">
            {props.option.map((n) => (
              <button
                key={n.id}
                className="btn btn-info"
                onClick={() => clickHandle(n.value)}
              >
                {n.ans}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Display;
