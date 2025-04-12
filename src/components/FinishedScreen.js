export default function FinishedScreen({
  score,
  maxScore,
  highscore,
  dispatch,
}) {
  return (
    <>
      <p className="result">
        You scored <strong>{score}</strong> out of {maxScore} (
        {Math.ceil((score / maxScore) * 100)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz!
      </button>
    </>
  );
}
