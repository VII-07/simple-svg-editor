import { Layout } from "antd";
import styles from './style.module.scss'
import SideComponent from "./SideComponent/SideComponent";
import HeaderWorkspace from "./WorkspaceHeader/HeaderWorkspace";
import SVGResizer from "./WorkspaceContent/WorkspaceContent";
import { Content } from "antd/es/layout/layout";

const Workspace = () => {
    return (
        <Layout className={styles.workspace}>
            <HeaderWorkspace />
            <Layout className={styles.content__container}>
                <SideComponent />
                <Content id="content" className={styles.content}>
                    <SVGResizer/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Workspace;
