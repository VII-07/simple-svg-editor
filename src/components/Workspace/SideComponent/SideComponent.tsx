import Sider from "antd/es/layout/Sider";
import styles from './style.module.scss';
import { Col, ColorPicker, Divider, InputNumber, Row, Typography } from "antd";


const SideComponent = () => {

    const onChangeWeight = (value: number) => {
        console.log('changed', value);
    };
    const onChangeHeight = (value: number) => {
        console.log('changed', value);
    };

    return (
        <Sider width="20%" className={styles.aside}>
            <div className={styles.action__container}>
                <Row>
                    <Col xs={12}>
                        <div className={styles.input__container}>
                            <span>X</span>
                            <InputNumber controls={false} min={0} defaultValue={0} onChange={() => onChangeHeight} />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className={styles.input__container}>
                            <span>Y</span>
                            <InputNumber controls={false} min={0} defaultValue={0} onChange={() => onChangeHeight} />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className={styles.input__container}>
                            <span>Wight</span>
                            <InputNumber controls={false} min={1} defaultValue={1} onChange={() => onChangeWeight} />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className={styles.input__container}>
                            <span>Height</span>
                            <InputNumber controls={false} min={1} defaultValue={1} onChange={() => onChangeHeight} />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className={styles.input__container}>
                            <span>Radius</span>
                            <InputNumber controls={false} min={0} defaultValue={0} onChange={() => onChangeHeight} />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className={styles.input__container}>
                            <span>Rotade</span>
                            <InputNumber controls={false} min={-360} defaultValue={0} max={360} onChange={() => onChangeHeight} />
                        </div>
                    </Col>
                </Row>
            </div>

            <Divider />
            <div className={styles.action__container}>
                <Row>
                    <Col xs={12}><Typography.Title className={styles.action__title} level={4}>Fill</Typography.Title></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className={styles.input__container}>
                            <span>Color</span>
                            <ColorPicker defaultValue="#1677ff" />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className={styles.input__container}>
                            <span>Border color</span>
                            <ColorPicker defaultValue="#1677ff" />
                        </div>
                    </Col>
                </Row>
            </div>
            <Divider />
            <div className={styles.action__container}>
                <Row>
                    <Col xs={12}><Typography.Title className={styles.action__title} level={4}>Border</Typography.Title></Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className={styles.input__container}>
                            <span>Border wight</span>
                            <InputNumber controls={false} min={0} defaultValue={0} onChange={() => onChangeHeight} />
                        </div>
                    </Col>
                </Row>
            </div>
        </Sider>
    );
}

export default SideComponent;