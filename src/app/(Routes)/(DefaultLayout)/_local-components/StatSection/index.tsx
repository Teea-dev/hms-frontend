import React from "react";
import s from "./statSection.module.scss";

function StatSection() {
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
          <p className={s.statTitle}>Total Application</p>
          <h2 className={s.statNum}>500</h2>
        </div>
        <div className={s.stat}>
          <p className={s.statTitle}>Approved</p>
          <h3 className={s.statNum}>342</h3>
        </div>
        <div className={s.stat}>
          <p className={s.statTitle}>Pending</p>
          <h3 className={s.statNum}>158</h3>
        </div>
        <div className={s.stat}>
          <p className={s.statTitle}>Disapproved</p>
          <h3 className={s.statNum}>0</h3>
        </div>
      </div>
    </section>
    </>
  );
}

export default StatSection;
