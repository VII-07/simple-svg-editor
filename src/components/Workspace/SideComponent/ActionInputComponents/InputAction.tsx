import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../style.module.scss'
import { InputNumber } from 'antd';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type ActionInputType = {
    title: string,
    reduxValue: number,
    setInState: ActionCreatorWithPayload<number>,
}

const ActionInput = ({ title, setInState, reduxValue }: ActionInputType) => {
    const [value, setValue] = useState(reduxValue);
    const dispatch = useDispatch();

    useEffect(() => {
        setValue(reduxValue);
    }, [reduxValue]);

    const onChangeActionInput = (value: number | null) => {
        const newValue = value !== null ? value : 0;
        dispatch(setInState(newValue));
    }

    return (
        <div className={styles.input__container}>
            <span>{title}</span>
            <InputNumber controls={false} value={value} onChange={onChangeActionInput} />
        </div>
    );
}

export default ActionInput;