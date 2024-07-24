"use client"
import React from 'react';
import { InputNumber } from 'antd';

function NumberInput({ defaultValue , width}: { defaultValue: number | string; width: number }) {
    return <InputNumber className={`w-[${width}px]`} min={1} max={100} defaultValue={defaultValue} />;
}

export default NumberInput;