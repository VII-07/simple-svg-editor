import Sider from "antd/es/layout/Sider";
import styles from './style.module.scss';
import { Col, ColorPicker, InputNumber, Row } from "antd";


const SideComponent = () => {

    const onChangeWeight = (value: number) => {
        console.log('changed', value);
    };
    const onChangeHeight = (value: number) => {
        console.log('changed', value);
    };

    return (
        <Sider width="17%" className={styles.aside}>
            <Row>
                <Col xs={12}>
                    <div className={styles.input__container}>
                        <span>Wight</span>
                        <InputNumber min={1} defaultValue={1} onChange={() => onChangeWeight} />
                    </div>
                </Col>
                <Col xs={12}>
                    <div className={styles.input__container}>
                        <span>Height</span>
                        <InputNumber min={1} defaultValue={1} onChange={() => onChangeHeight} />
                    </div>
                </Col>
                <Col xs={12}>
                    <div className={styles.input__container}>
                        <span>Radius</span>
                        <InputNumber min={0} defaultValue={0} onChange={() => onChangeHeight} />
                    </div>
                </Col>
                <Col xs={12}>
                    <div className={styles.input__container}>
                        <span>Rotade</span>
                        <InputNumber min={-360} defaultValue={0} max={360} onChange={() => onChangeHeight} />
                    </div>
                </Col>
                <Col xs={12}>
                    <div className={styles.input__container}>
                        <span>Color</span>
                        <ColorPicker defaultValue="#1677ff" />
                    </div>
                </Col>
                <Col xs={12}>
                    <div className={styles.input__container}>
                        <span>Border</span>
                        <InputNumber min={0} defaultValue={0} onChange={() => onChangeHeight} />
                    </div>
                </Col>
            </Row>
        </Sider>
    );
}

export default SideComponent;