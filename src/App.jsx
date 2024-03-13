import { useState } from "react";
import "./App.css";
import Description from "./components/Description";
import Signform from "./components/Signform";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-[64px] bg-[url('./images/bg-intro-mobile.png')] bg-red-400">
      <Description />
      <main className=" flex flex-col gap-[24px]">
        <Signform />
      </main>
    </div>
  );
}

export default App;
