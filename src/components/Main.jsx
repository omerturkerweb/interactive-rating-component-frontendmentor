import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Main() {
  const { submitted, setSubmitted, rate, setRate } = useContext(GlobalContext);
  const rateHandler = (rateNumber) => {
    const buttons = document.querySelectorAll(".rate-button");
    [...buttons].forEach((button) => {
      button.classList.remove("!bg-[var(--orange)]");
    });
    for (let i = 1; i <= rateNumber; i++) {
      const btn = document.querySelector(`.btn-${i}`);
      console.log(btn);
      btn.classList.add("!bg-[var(--orange)]");
      btn.classList.add("text-[var(--white)]");
    }
  };
  return (
    <>
      <div className="card-head">
        <span className="fav-icon w-[40px] h-[40px] flex flex-row items-center justify-center rounded-full bg-[var(--light-blue-bg)]">
          <img src={require("../images/icon-star.svg").default}></img>
        </span>
      </div>
      <div className="card-body flex flex-col gap-y-5">
        <h3 className="text-2xl font-semibold">How did we do?</h3>
        <p className="text-[var(--light-grey)] pr-3">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="rate-buttons flex flex-row items-center justify-between gap-x-5">
          {[1, 2, 3, 4, 5].map((btn) => (
            <button
              className={`rate-button btn-${btn} transition-all duration-300 hover:text-[var(--white)] active:bg-[var(--orange)] hover:bg-[var(--medium-grey)] text-[var(--medium-grey)] w-[50px] h-[50px] flex flex-row items-center justify-center rounded-full bg-[var(--light-blue-bg)]`}
              key={btn}
              onClick={() => {
                rateHandler(btn);
                setRate(btn);
              }}
            >
              {btn}
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            setSubmitted(true);
          }}
          className="transition-all duration-300 hover:bg-[var(--white)] hover:text-[var(--orange)] submit-button bg-[var(--orange)] p-3 rounded-2xl w-[100%]"
        >
          SUBMIT
        </button>
      </div>
    </>
  );
}
