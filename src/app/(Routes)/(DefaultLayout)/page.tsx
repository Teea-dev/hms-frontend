import DefaultLayoutNavbar from "@components/app/_global-components/DefaultLayoutNavBar";
import * as React from "react";
import s from "./page.module.scss";
import StatSection from "./_local-components/StatSection";
import PotterTable from "./_local-components/StatSection/potterTable";
function Home() {
  return (
    <div className={s.wrapper}>
      <DefaultLayoutNavbar />
      <div className={s.main}>
        <StatSection />
        <PotterTable />
      </div>
    </div>
  );
}

export default Home;
