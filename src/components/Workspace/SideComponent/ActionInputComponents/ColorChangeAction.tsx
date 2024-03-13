import { ColorPicker } from 'antd';
import styles from '../style.module.scss'
import { Color } from 'antd/es/color-picker';

type actionsInputType = {
    title:string,
}

const ColorChange = ({title} : actionsInputType) => {
    const onChangeActionColor = (color: Color) => {
        console.log('changed', color);
    };

    return (
        <div className={styles.input__container}>
            <span>{title}</span>
            <ColorPicker defaultValue="#1677ff" onChange={onChangeActionColor}/>
        </div>
    );
}

export default ColorChange;