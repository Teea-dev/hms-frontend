'use client'
import React, { ComponentPropsWithRef } from 'react';
import s from './selectField.module.scss';
import { Select as AntdSelect } from 'antd';
import { ArrowDownIcon } from '@components/app/_global-components/icons';
import cn from 'clsx';

/* 
This Components extends Antd Default SelectBox for proper Design Customization
*/


interface PropsTypes extends ComponentPropsWithRef<typeof AntdSelect> {
    wrapperClassname?: string,
    label?: React.ReactNode
}


function SelectField({
    className,
    wrapperClassname = '',
    label = null,
    ...rest
}: PropsTypes) {

    return (
        <div className={cn(s.wrapper, wrapperClassname)}>
            {label && <p className={s.label}>{label}:</p>}
            <AntdSelect
                bordered={false}
                className={cn(s.selectContainer, className)}
                suffixIcon={<ArrowDownIcon  />}
                {...rest}
            />
        </div>

    )
}

export default SelectField