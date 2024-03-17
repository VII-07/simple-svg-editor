import { Layout } from "antd";
import styles from './style.module.scss'
import SideComponent from "./SideComponent/SideComponent";
import HeaderWorkspace from "./WorkspaceHeader/HeaderWorkspace";
import SVGResizer from "./WorkspaceContent/WorkspaceContent";
import { Content } from "antd/es/layout/layout";

const svg1 = `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
<circle r="45" cx="50" cy="50" fill="red" />
</svg>`
const svg2 = `<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="blue" />
</svg>`

const Workspace = () => {
    return (
        <Layout className={styles.workspace}>
            <HeaderWorkspace />
            <Layout className={styles.content__container}>
                <SideComponent />
                <Content id="content" className={styles.content}>
                    <SVGResizer svgStrings={[svg1, svg2]} />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Workspace;
