import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import styles from './style.module.scss'
import SideComponent from "./SideComponent/SideComponent";
import HeaderWorkspace from "./WorkspaceHeader/HeaderWorkspace";


const Workspace = () => {
    return (
        <Layout className={styles.workspace}>
            <HeaderWorkspace/>
            <Layout className={styles.content__container}>
                <SideComponent/>
                <Content className={styles.content}>
                    
                </Content>
            </Layout>
        </Layout>
    );
}

export default Workspace;