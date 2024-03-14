import { ColorPicker, Input } from 'antd';
import { useState } from 'react';
import styles from '../style.module.scss'
import { Color } from 'antd/es/color-picker';

type colorChangeType = {
    title: string,
}

const ColorChange = ({ title }: colorChangeType) => {
    const [color, setColor] = useState('#624590');

    const onChangeActionColor = (value: Color,) => {
        setColor(value.toHexString());
        console.log('changed', color);
    };

    const onChangeInputColor = (value: React.ChangeEvent<HTMLInputElement>) => {
        setColor(value.target.value);
        console.log('changed', color);
    };
    return (
        <div className={styles.input__container}>
            <span>{title}</span>
            <div className={styles.input__container__color}>
                <ColorPicker defaultValue={'#d231k'} value={color} onChange={onChangeActionColor} />
                <Input value={color} onChange={onChangeInputColor} />
            </div>
        </div>
    );
}

export default ColorChange;
