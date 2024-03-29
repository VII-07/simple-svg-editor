import { ColorPicker, Input } from 'antd';
import { useEffect, useState } from 'react';
import styles from '../style.module.scss'
import { Color } from 'antd/es/color-picker';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type colorChangeType = {
    title: string,
    colorRedux: string,
    setColorState: ActionCreatorWithPayload<string>,
}

const ColorChange = ({ title, colorRedux, setColorState}: colorChangeType) => {
    const [colorValue, setColorValue] = useState(colorRedux);
    const dispatch = useDispatch()

    useEffect(() => {
        setColorValue(colorRedux);
    },[colorRedux])

    const onChangeActionColor = (value: Color,) => {
        dispatch(setColorState(value.toHexString()));
    };

    const onChangeInputColor = (value: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setColorState(value.target.value));
    };
    return (
        <div className={styles.input__container}>
            <span>{title}</span>
            <div className={styles.input__container__color}>
                <ColorPicker defaultValue={'#9f1212'} value={colorValue} onChange={onChangeActionColor} />
                <Input value={colorValue} onChange={onChangeInputColor} />
            </div>
        </div>
    );
}

export default ColorChange;
