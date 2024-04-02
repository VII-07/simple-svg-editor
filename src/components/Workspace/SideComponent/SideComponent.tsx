import Sider from "antd/es/layout/Sider";
import styles from './style.module.scss';
import { Col, Divider, Row, Typography } from "antd";
import ActionInput from "./ActionInputComponents/InputAction";
import ColorChange from "./ActionInputComponents/ColorChangeAction";
import { setX, setY, setWidth, setHeight, setRadius, setRotate, SVGProperties, setBorderWight } from "../../Redux/inputReducer";
import { useDispatch, useSelector } from "react-redux";
import { ColorPropertiesType, setBorderColor, setColor } from "../../Redux/changeColorReducer";
import ButtonCreateFigure from "./ButtonCreateFigure/ButtonCreateFigure";
import { add } from "../../Redux/svgReducer";
import { ellipseSvg, lineSvg, rectangleSvg, triangleSvg } from "../../functions/figure";

type RootState = {
    inputReducer: SVGProperties;
    colorProperties: ColorPropertiesType
};

const SideComponent = () => {
    const reduxValue = useSelector((state: RootState) => state.inputReducer);
    const reduxColor = useSelector((state: RootState) => state.colorProperties);
    const dispatch = useDispatch();

    return (
        <Sider width="22%" className={styles.aside}>
            <div className={styles.action__container}>
                <Row>
                    <Col xs={12}>
                        <ActionInput title='X' setInState={setX} reduxValue={reduxValue.x} />
                    </Col>
                    <Col xs={12}>
                        <ActionInput title="Y" setInState={setY} reduxValue={reduxValue.y} />
                    </Col>
                    <Col xs={12}>
                        <ActionInput title="ScaleX" setInState={setWidth} reduxValue={reduxValue.scaleX} />
                    </Col>
                    <Col xs={12}>
                        <ActionInput title="ScaleY" setInState={setHeight} reduxValue={reduxValue.scaleY} />
                    </Col>
                    <Col xs={12}>
                        <ActionInput title="Radius" setInState={setRadius} reduxValue={reduxValue.radius} />
                    </Col>
                    <Col xs={12}>
                        <ActionInput title="Rotate" setInState={setRotate} reduxValue={reduxValue.rotate} />
                    </Col>
                </Row>
            </div>

            <Divider />
            <div className={styles.action__container}>
                <Row>
                    <Col xs={12}><Typography.Title className={styles.action__title} level={4}>Fill</Typography.Title></Col>
                </Row>
                <Row className={styles.flex__color}>
                    <Col xs={11}>
                        <ColorChange title="Color" colorRedux={reduxColor.color} setColorState={setColor} />
                    </Col>
                    <Col xs={11}>
                        <ColorChange title="Border color" colorRedux={reduxColor.colorBorder} setColorState={setBorderColor} />
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
                        <ActionInput title="Border width" setInState={setBorderWight} reduxValue={reduxValue.borderWight} />
                    </Col>
                </Row>
            </div>
            <Divider />
            <div className={styles.action__container}>
            <Row>
                    <Col xs={12}><Typography.Title className={styles.action__title} level={4}>Primitive shapes</Typography.Title></Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <ButtonCreateFigure title="Elipse" createFigureVoid={() => dispatch(add(ellipseSvg))}/>
                    </Col>
                    <Col xs={8}>
                        <ButtonCreateFigure title="Line" createFigureVoid={() => dispatch(add(lineSvg))}/>
                    </Col>
                    <Col xs={8}>
                        <ButtonCreateFigure title="Triangle" createFigureVoid={() => dispatch(add(triangleSvg))}/>
                    </Col>
                    <Col xs={8}>
                        <ButtonCreateFigure title="Reactangle" createFigureVoid={() => dispatch(add(rectangleSvg))}/>
                    </Col>
                </Row>
            </div>

        </Sider>
    );
}

export default SideComponent;