import Sider from "antd/es/layout/Sider";
import styles from './style.module.scss';
import { Col, Divider, Row, Typography } from "antd";
import ActionInput from "./ActionInputComponents/InputAction";
import ColorChange from "./ActionInputComponents/ColorChangeAction";


const SideComponent = () => {

    return (
        <Sider width="20%" className={styles.aside}>
            <div className={styles.action__container}>
                <Row>
                    <Col xs={12}>
                        <ActionInput title="X" />
                    </Col>
                    <Col xs={12}>
                        <ActionInput title="Y" />
                    </Col>
                    <Col xs={12}>
                        <ActionInput title="Width" />
                    </Col>
                    <Col xs={12}>
                        <ActionInput title="Height" />
                    </Col>
                    <Col xs={12}>
                        <ActionInput title="Radius" />
                    </Col>
                    <Col xs={12}>
                        <ActionInput title="Rotate" />
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
                        <ColorChange title="Color"/>
                    </Col>
                    <Col xs={12}>
                        <ColorChange title="Border color"/>
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
                        <ActionInput title="Border width"/>
                    </Col>
                </Row>
            </div>
        </Sider>
    );
}

export default SideComponent;