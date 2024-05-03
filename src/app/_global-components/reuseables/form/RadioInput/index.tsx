'use client';
import React, { useEffect, useState } from 'react';
import s from './radioInput.module.scss';
import cn from 'clsx';
import { nanoid } from 'nanoid';

interface propTypes extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    wrapperClassName?: string,
    groupName: string,
    radioValue: string,
    selectedOption: string,
}

function RadioInput({
    wrapperClassName = "",
    children,
    groupName,
    selectedOption,
    radioValue,
    onChange,
    ...rest
}: propTypes) {
    const [inputId, setInputId] = useState("");



    useEffect(() => {
        setInputId(nanoid())
    }, [])
    return (
        <div className={cn(wrapperClassName, s.wrapper)}>
            <input
                type="radio"
                checked={selectedOption === radioValue}
                name={groupName}
                value={radioValue}
                onChange={onChange}
                id={inputId}
                {...rest}
            />
            {children && <label className={s.label} htmlFor={inputId}>{children}</label>}
        </div>
    )
}

export default RadioInput