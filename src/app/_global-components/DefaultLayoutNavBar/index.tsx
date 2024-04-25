"use client";
import React, { useCallback, useMemo } from "react";
import s from "./defaultLayoutNavbar.module.scss";
import cn from "clsx";

import NextImageShimmer from "../NextImageShimmer";

// import themeColor from "@/base-styles/_exportValues.module.scss";

function DefaultLayoutNavbar() {
  return (
    <header className={s.wrapper}>
        <div className={s.session}>
        <h3>2023/2024</h3>
        </div>
      <div className={s.userDetails}>
        <div className={s.userInfo}>
          
          <div className={s.userName}>
            <p>Adamson Bryan</p>
            <p>Hall Warden</p>
          </div>
          <div className={s.image}>
            <NextImageShimmer
              src={"/imgs/dashboardImg.webp"}
              alt="Avatar"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default DefaultLayoutNavbar;
