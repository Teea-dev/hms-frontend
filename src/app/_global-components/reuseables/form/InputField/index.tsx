import React, { forwardRef } from 'react';
import s from './inputField.module.scss';
import cn from 'clsx';

interface PropsType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    wrapperClassName?: string,
    error?: string | null,
    prefixIcon?: React.ReactNode | null
}

const InputField = forwardRef(function InputField({
    value,
    prefixIcon,
    wrapperClassName,
    error = null,
    className,
    ...rest
}: PropsType,
    ref: React.ForwardedRef<HTMLInputElement>
) {
    return (
        <div className={cn(s.wrapper, wrapperClassName)}>
            <div className={s.container}>
                <span className={s.prefixIcon}>
                    {prefixIcon}
                </span>
                <input
                    value={value}
                    ref={ref}
                    className={cn(
                        className,
                        prefixIcon && s.withPrefixIcon,
                        error && s.withError
                    )}
                    {...rest}
                />
            </div>

            {error && <p className={s.errorText}>{error}</p>}

        </div>

    )
})


export default InputField