import React from "react";
import s from "./authPages.module.scss";
import Image from "next/image";
import NextImageShimmer from "../NextImageShimmer";
interface PropTypes {
  children: React.ReactNode;
  backgroundImg: string;
}

export default function AuthPagesTemplate({
  children,
  backgroundImg,
}: PropTypes) {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <section
          className={s.authBg}
        >
          <NextImageShimmer
            src={"/imgs/signInLogo.webp"}
            alt="School Logo"
            className={s.companyLogo}
            width={200}
            height={524}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            style={{ objectFit: "contain" }}
          />
        </section>
        <section className={s.pageContent}>{children}</section>
      </div>
    </div>
  );
}
