'use client';
import React from 'react';
import { Popover } from 'antd';
import type { ComponentPropsWithoutRef } from "react";

type PropsTypes = ComponentPropsWithoutRef<typeof Popover> & {
    triggerWith?: "Hover" | "Click" | "Hover&Click" | "Focus",

}


function PopoverClientSide({
    content,
    children,
    triggerWith = "Hover",
    ...rest
}: PropsTypes) {

    switch (triggerWith) {
        case "Hover":
            return (
                <Popover content={content} {...rest}>
                    {children}
                </Popover>
            )

        case "Click":
            return (
                <Popover trigger={'click'} content={content} {...rest}>
                    {children}
                </Popover>
            )
        case "Focus":
            return (
                <Popover trigger={'focus'} content={content} {...rest}>
                    {children}
                </Popover>
            )


        case "Hover&Click":
            return (
                <Popover content={content} {...rest}>
                    <Popover trigger={'click'} content={content} {...rest}>
                        {children}
                    </Popover>
                </Popover>
            )

        default:
            return null;

    }

}

export default PopoverClientSide