import * as React from "react";
import DefaultLayoutNavbar from "@components/app/_global-components/DefaultLayoutNavBar";
import s from "./page.module.scss";
import WardenStatSection from "./_local-component/StatSection";
import WardenTable from "./_local-component/wardenTable";

function Home() {
  return (
    <div className={s.wrapper}>
      <DefaultLayoutNavbar />
      <div className={s.main}>
        <WardenStatSection />
        <WardenTable />
      </div>
    </div>
  );
}

export default Home;
