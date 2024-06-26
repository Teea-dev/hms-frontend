import * as React from "react";
import DefaultLayoutNavbar from "@components/app/_global-components/DefaultLayoutNavBar";
import s from "./page.module.scss";
import RoomsTableContent from "./_local-components/roomsTable/TableContent";
import RoomsDetails from "./roomsDetails";

function Home() {
  return (
    <div className={s.wrapper}>
      <DefaultLayoutNavbar />
      <div className={s.main}>
        {/* <RoomsDetails/> */}
       <RoomsTableContent/>
      </div>
    </div>
  );
}

export default Home;
