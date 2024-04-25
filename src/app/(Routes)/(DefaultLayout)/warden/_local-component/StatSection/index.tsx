import React from "react";
import s from "./wardenStatSection.module.scss";

function WardenStatSection() {
  return (

    <>
   
    <section className={s.wrapper}>
    <div className={s.hallName}>
    <h2>
        Obafemi Awolowo Hall
    </h2>
    </div>
      <div className={s.container}>
        <div className={s.stat}>
          <p className={s.statTitle}>Total Rooms</p>
          <h2 className={s.statNum}>500</h2>
        </div>
        <div className={s.stat}>
          <p className={s.statTitle}>Fully Allocated rooms</p>
          <h3 className={s.statNum}>342</h3>
        </div>
        <div className={s.stat}>
          <p className={s.statTitle}>Partly allocated rooms</p>
          <h3 className={s.statNum}>158</h3>
        </div>
        <div className={s.stat}>
          <p className={s.statTitle}>Empty rooms</p>
          <h3 className={s.statNum}>0</h3>
        </div>
      </div>
    </section>
    </>
  );
}

export default WardenStatSection;
