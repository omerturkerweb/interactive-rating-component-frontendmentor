import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Main from "./Main";
import Submitted from "./Submitted";

export default function Layout() {
  const { submitted } = useContext(GlobalContext);
  return (
    <div className="card-main w-[430px] h-[380px] bg-[var(--dark-blue)] rounded-2xl flex flex-col gap-y-5 p-6">
      {submitted ? <Submitted /> : <Main />}
    </div>
  );
}
