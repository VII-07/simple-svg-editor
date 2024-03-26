import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SVGProperties, setHeight, setRadius, setRotate, setWidth, setX, setY } from '../../../Redux/inputReducer';
import styles from '../style.module.scss'
import { InputNumber } from 'antd';

type RootState = {
  inputReducer: SVGProperties;
};

const ActionInput = ({title} : {title: string}) => {
    const reduxValue = useSelector((state: RootState) => state.inputReducer[title.toLowerCase()]);
    const [value, setValue] = useState(reduxValue);
    const dispatch = useDispatch();

    useEffect(() => {
        setValue(reduxValue);
    }, [reduxValue]);

    const onChangeActionInput = (value: number | null) => {
        const newValue = value !== null ? value : 0;
        switch(title) {
            case 'X':
                dispatch(setX(newValue));
                break;
            case 'Y':
                dispatch(setY(newValue));
                break;
            case 'Width':
                dispatch(setWidth(newValue));
                break;
            case 'Height':
                dispatch(setHeight(newValue));
                break;
            case 'Radius':
                dispatch(setRadius(newValue));
                break;
            case 'Rotate':
                dispatch(setRotate(newValue));
                break;
            default:
                break;
        }
    };
    

    return (
        <div className={styles.input__container}>
            <span>{title}</span>
            <InputNumber controls={false} value={value} onChange={onChangeActionInput} />
        </div>
    );
}

export default ActionInput;
