'use client';
import React, { useMemo } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import cn from "clsx";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from 'react';

/* 
  Desc: THIS COMPONENTS TRYS TO RECREATE THE NAVLINK FEATURES IN REACT-ROUTER-DOM v6.
  ADDING AN "ISACTIVE" CLASS TO THE LINK ELEMNT WHEN THE LINK IS ACTIVE;
  
  @prop children: The Content of the Link;
  @prop className: Classname passed to link component;
  @prop activeClassNames: active classnames that will be attached to the link component when it is active;
  @prop baseUrl: if passed it will be used to compare with current page pathname instead of href;
  @prop isLink: will return a link if true and returns a span if false. In more details this works in hand with "childLinks" prop, when isLink is false then it probably means Navlink is a dropdown menu with Links as its child;
  @prop exact: Make sure to current page pathname matches (href || baseUrl) exactly ;
  @prop childLinks: if passed the NavLink is a dropdown menu with links as it childs so also compare it child links href when checking if its active;
  */

interface propsType extends ComponentPropsWithRef<typeof Link> {
  children?: React.ReactNode, //
  className?: string,
  activeClassNames?: string,
  baseUrl?: string | null,
  isLink?: boolean,
  exact?: boolean,
  childLinks?: LinkProps['href'][]
}

const NavLink = forwardRef(function NavLink(
  {
    children,
    className = '',
    isLink = true,
    baseUrl = null,
    childLinks = [],
    href,
    exact = false,
    activeClassNames = '',
    ...rest
  }: propsType,
  ref: React.ForwardedRef<any>
) {
  const pathname = usePathname()

  const isActive = useMemo(() => {
    let isActive = false;

    let linkWithoutHash = ''

    if (href) {
      const linkHref = href.toString()
      linkWithoutHash = linkHref.replace(/(#[^\/]+)/, '')
    }

    // Check if link should be active and returns a boolean
    const checkIsActive = (pathname: string, url: URL | string) => {
      const locationUrl = baseUrl || url;
      if (exact) {
        return pathname === locationUrl;
      }

      return pathname === locationUrl || pathname.startsWith(locationUrl as string)
    }


    if (isLink) { //children element is a Link component
      if (checkIsActive(pathname, linkWithoutHash)) {
        isActive = true;
      }
    } else { // children element is a DropDown of Link components
      isActive = childLinks.some((url) => checkIsActive(pathname, url as string))
    }


    return isActive
  }, [href, isLink, baseUrl, exact, pathname, childLinks])



  // return a span element when the children element is not a link
  if (!isLink) {
    return (
      <span {...rest} className={cn(className, isActive && activeClassNames)} ref={ref} >{children}</span>
    )
  }

  return (
    <Link {...rest} ref={ref} href={href} className={cn(className, isActive && activeClassNames)} >
      {children}
    </Link>
  )
})
export default NavLink