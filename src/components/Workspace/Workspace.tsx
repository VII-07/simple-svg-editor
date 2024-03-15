import { Layout } from "antd";
import styles from './style.module.scss'
import SideComponent from "./SideComponent/SideComponent";
import HeaderWorkspace from "./WorkspaceHeader/HeaderWorkspace";
import WorkspaceContent from "./WorkspaceContent/WorkspaceContent";


const Workspace = () => {
    return (
        <Layout className={styles.workspace}>
            <HeaderWorkspace/>
            <Layout className={styles.content__container}>
                <SideComponent/>
                <WorkspaceContent/>
            </Layout>
        </Layout>
    );
}

export default Workspace;