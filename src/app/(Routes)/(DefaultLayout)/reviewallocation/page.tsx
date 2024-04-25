import * as React from "react";
import DefaultLayoutNavbar from "@components/app/_global-components/DefaultLayoutNavBar";
import s from "./page.module.scss";
import ReviewAllocation from "./_local-component";

function Home() {
  return (
    <div className={s.wrapper}>
      <DefaultLayoutNavbar />
      <div className={s.main}>
      <ReviewAllocation/>
      </div>
    </div>
  );
}

export default Home;
