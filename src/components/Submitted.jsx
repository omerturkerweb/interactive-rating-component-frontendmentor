import { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";

export default function Submitted() {
  const { rate } = useContext(GlobalContext);
  console.log(rate);
  return (
    <div className="submitted-main flex flex-col gap-y-4 items-center justify-center">
      <img src={require("../images/illustration-thank-you.svg").default}></img>
      <span className="text-[var(--orange)] bg-[var(--light-blue-bg)] p-1 px-6 rounded-2xl">
        You selected {rate} out of 5
      </span>
      <h3 className="text-[35px]">Thank You!</h3>
      <p className="submitted-text text-sm text-[var(--medium-grey)] px-4 tracking-wider text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
