import { Layout } from "antd";
import styles from './style.module.scss'
import SideComponent from "./SideComponent/SideComponent";
import HeaderWorkspace from "./WorkspaceHeader/HeaderWorkspace";
import SVGResizer from "./WorkspaceContent/WorkspaceContent";
import { Content } from "antd/es/layout/layout";
import { useRef } from "react";

const Workspace = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvas = useRef<fabric.Canvas | null>(null);

    return (
        <Layout className={styles.workspace}>
            <HeaderWorkspace canvasRef={canvasRef} canvas={canvas}/>
            <Layout className={styles.content__container}>
                <SideComponent/>
                <Content id="content" className={styles.content}>
                    <SVGResizer canvasRef={canvasRef} canvas={canvas}/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Workspace;
