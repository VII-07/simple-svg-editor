import { InputNumber } from 'antd';
import styles from '../style.module.scss'

type actionsInputType = {
    title:string,
}

const ActionInput = ({title} : actionsInputType) => {
    const onChangeActionInput = (value: number) => {
        console.log('changed', value);
    };

    return (
        <div className={styles.input__container}>
            <span>{title}</span>
            <InputNumber controls={false} min={0} defaultValue={0} onChange={() => onChangeActionInput} />
        </div>
    );
}

export default ActionInput;