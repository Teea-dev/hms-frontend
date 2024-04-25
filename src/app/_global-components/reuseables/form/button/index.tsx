import React, { ComponentPropsWithRef } from "react";
import s from "./button.module.scss";
import { Button as AntdButton, ConfigProvider } from "antd";
import cn from 'clsx'
import themeColors from '../../../../../base-styles/_exportValues.module.scss'

interface PropsTypes extends ComponentPropsWithRef<typeof AntdButton> {
  themeType?: "primary" | "dynamic";
  themeColor?: string;
}

function Button({
  children,
  themeType = "primary",
  themeColor = themeColors.primary,
  className,
  ...rest
}: PropsTypes) {
  switch (themeType) {
    case "primary":
      return (
        <AntdButton
          className={cn(s.wrapper, s[themeType], className)}
          {...rest}
        >
          {children}
        </AntdButton>
      );

    case "dynamic":
      return (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: themeColor,
              colorPrimaryHover: themeColor,
              colorPrimaryActive: themeColor,
              controlOutline: themeColor,
            },
          }}
        >
          <AntdButton
            className={cn(s.wrapper, s[themeType], className)}
            {...rest}
          >
            {children}
          </AntdButton>
        </ConfigProvider>
      );

    default:
      return null;
  }
}

export default Button;
