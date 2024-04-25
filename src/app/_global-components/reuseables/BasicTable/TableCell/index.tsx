"use client";
import React, { ComponentPropsWithoutRef } from "react";
import cn from "clsx";
import s from "./tableCell.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

type PropsTypes = {
  isLink?: boolean;
  sticky?: boolean;
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
  callBeforeRouting?: () => void;
} & ComponentPropsWithoutRef<typeof Link>;

function TableCell({
  className,
  isLink = false,
  sticky = false,
  isLoading = false,
  children = "",
  onClick,
  callBeforeRouting,
  href,
  ...rest
}: PropsTypes) {
  const router = useRouter();

  const handleBtnClick = (e: any) => {
    if (onClick) {
      onClick(e);
    }
    if (isLink && href && callBeforeRouting) {
      callBeforeRouting();
      router.push(href as string);
    }
  };

  if (isLink && href && !callBeforeRouting) {
    return (
      <td className={cn(className, s.wrapper, sticky && s.sticky)}>
        <Link
          href={href}
          onClick={onClick}
          aria-disabled={isLoading}
          className={cn(s.container, isLoading && s.disabled)}
          {...rest}
        >
          {children}
        </Link>
      </td>
    );
  }

  return (
    <td className={cn(className, s.wrapper, sticky && s.sticky)}>
      <button
        disabled={isLoading}
        aria-disabled={isLoading}
        onClick={handleBtnClick}
        className={cn(s.container, isLoading && s.disabled)}
        {...(rest as any)}
      >
        {children}
      </button>
    </td>
  );
}

export default TableCell;
