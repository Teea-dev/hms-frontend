import * as React from "react";
import DefaultLayoutNavbar from "@components/app/_global-components/DefaultLayoutNavBar";
import s from "./page.module.scss";
import RoomsTableContent from "./_local-components/roomsTable/TableContent";

function Home() {
  return (
    <div className={s.wrapper}>
      <DefaultLayoutNavbar />
      <div className={s.main}>
       <RoomsTableContent/>
      </div>
    </div>
  );
}

export default Home;
