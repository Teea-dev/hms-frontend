"use client";
import React, { useEffect, useRef } from "react";
import s from "./defaultLayoutSidebar.module.scss";
import cn from "clsx";
import NextImageShimmer from "../NextImageShimmer";
import Link from "next/link";
import { ApartmentIcon, AllocationIcon, RoomIcon } from "../icons";
import NavLink from "../NavLink";
import gsap from "gsap";

function DefaultLayoutAsideNavbar() {
  const linkHighlightRef = useRef<HTMLDivElement | null>(null);
  const toggleHighlightLinkOnHover = (el: HTMLElement, hovering: boolean) => {
    const navLinkArr = gsap.utils.toArray<HTMLElement>(
      document.querySelectorAll(`.${s.navLink}`)
    );
    if (el) {
      const slideBy = el.getBoundingClientRect().height;
      const pos = navLinkArr.findIndex((item) => item === el);
  
      gsap.to(linkHighlightRef.current, {
        translateY: slideBy * pos,
        duration: 0.25,
      });
    }
  };
  
  // const toggleHighlightLinkOnHover = (el: HTMLElement, hovering: boolean) => {
  //   const navLinkArr = gsap.utils.toArray<HTMLElement>(
  //     document.querySelectorAll(`.${s.navLink}`)
  //   );
  //   if (hovering) {
  //     // const slideBy = el.getBoundingClientRect().height;
  //     const slideBy = el.getBoundingClientRect().height;
  //     const pos = navLinkArr.findIndex((item) => item === el);

  //     gsap.to(linkHighlightRef.current, {
  //       translateY: slideBy * pos,
  //       duration: 0.25,
  //     });
  //   } else {
  //     const currActiveLink = document.querySelector(
  //       `.${s.navLink__active}`
  //     ) as HTMLElement;
  //     const slideBy = currActiveLink.getBoundingClientRect().height;
  //     const pos = navLinkArr.findIndex((item) => item === currActiveLink);

  //     gsap.to(linkHighlightRef.current, {
  //       translateY: slideBy * pos,
  //       duration: 0.25,
  //     });
  //   }
  // };
  useEffect(() => {
    const currActiveLink = document.querySelector(`.${s.navLink__active}`) as HTMLElement;
    if (currActiveLink) {
      toggleHighlightLinkOnHover(currActiveLink, true);
    }
  }, []);
  
  // useEffect(() => {
  //   const currActiveLink = document.querySelector(
  //     `.${s.navLink__active}`
  //   ) as HTMLElement;
  //   toggleHighlightLinkOnHover(currActiveLink, true);
  // }, []);
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Link href={"/"} className={s.logoWrapper}>
          <NextImageShimmer
            src={"/imgs/uiLogo.webp"}
            alt="Starzfi Logo Company"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </Link>

        <nav className={s.navLinks}>
          <div ref={linkHighlightRef} className={s.navLinksHighlight} />
          <NavLink
            className={s.navLink}
            activeClassNames={s.navLink__active}
            href={"/"}
            exact
            onMouseEnter={(e) =>
              toggleHighlightLinkOnHover(e.currentTarget, true)
            }
            onMouseLeave={(e) =>
              toggleHighlightLinkOnHover(e.currentTarget, false)
            }
          >
            <ApartmentIcon inheritColor />
            <p>Overview</p>
          </NavLink>
          <NavLink
            className={s.navLink}
            activeClassNames={s.navLink__active}
            href={"/warden"}
            onMouseEnter={(e) =>
              toggleHighlightLinkOnHover(e.currentTarget, true)
            }
            onMouseLeave={(e) =>
              toggleHighlightLinkOnHover(e.currentTarget, false)
            }
          >
            <AllocationIcon inheritColor />
            <p>Allocation</p>
          </NavLink>
          <NavLink
            className={s.navLink}
            activeClassNames={s.navLink__active}
            href={"/rooms"}
            onMouseEnter={(e) =>
              toggleHighlightLinkOnHover(e.currentTarget, true)
            }
            onMouseLeave={(e) =>
              toggleHighlightLinkOnHover(e.currentTarget, false)
            }
          >
            <RoomIcon inheritColor />
            <p>Rooms</p>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default DefaultLayoutAsideNavbar;
