'use client';
import React, { forwardRef, useRef, useState } from 'react';
import s from './passwordInputField.module.scss';
import cn from 'clsx';
// import { EyeHiddenIcon, EyeVisibleIcon } from '@/app/_global-components/icons';
import themeColors from '@/base-styles/_exportValues.module.scss';

interface PropsType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    wrapperClassName?: string,
    error?: string | null,
}


const PasswordInputField = forwardRef(function PasswordInputField({
    value,
    wrapperClassName,
    className,
    onChange,
    error = null,
    ...rest
}: PropsType,
    ref: any
) {
    const showIconRef = useRef<HTMLElement | null>(null);
    const hideIconRef = useRef<HTMLElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(ref);
    const [inputType, setInputType] = useState<'password' | 'text'>('password');



    const togglePasswordVisiblity = (state: 'show' | 'hide') => {
        if (!showIconRef.current || !hideIconRef.current || !inputRef.current) return;

        switch (state) {
            case 'hide':
                setInputType('password');
                showIconRef.current.classList.add(s.active);
                hideIconRef.current.classList.remove(s.active);
                break;
            case 'show':
                setInputType('text');
                showIconRef.current.classList.remove(s.active);
                hideIconRef.current.classList.add(s.active);
                break;

            default:
                break;
        }

    }



    return (
        <div className={cn(s.wrapper, wrapperClassName)}>
            <div className={s.container}>
                <input
                    ref={(e) => {
                        if (ref) {
                            ref(e);
                        }
                        inputRef.current = e;
                    }}
                    value={value}
                    className={cn(
                        className,
                        error && s.withError
                    )}
                    type={inputType}
                    onChange={onChange}
                    {...rest}
                />
                {/* <div className={s.visibilityContainer}>
                    <span ref={showIconRef} onClick={() => togglePasswordVisiblity('show')} className={cn(s.show, s.active)}>
                        <EyeVisibleIcon color={themeColors.neutralGrey400} />
                    </span>
                    <span ref={hideIconRef} onClick={() => togglePasswordVisiblity('hide')} className={s.hide}>
                        <EyeHiddenIcon color={themeColors.neutralGrey400} />
                    </span>

                </div> */}
            </div>

            {error && <p className={s.errorText}>{error}</p>}

        </div>

    )
})


export default PasswordInputField