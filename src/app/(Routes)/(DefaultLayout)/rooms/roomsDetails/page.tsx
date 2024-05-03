import * as React from "react";
import DefaultLayoutNavbar from "@components/app/_global-components/DefaultLayoutNavBar";
import s from "./page.module.scss";
import RoomsDetails from ".";

function Home() {
  return (
    <div className={s.wrapper}>
      <DefaultLayoutNavbar />
      <div className={s.main}>
        <RoomsDetails />
      </div>
    </div>
  );
}

export default Home;
