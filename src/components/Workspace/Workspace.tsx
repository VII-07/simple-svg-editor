import { Layout,Button } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import styles from './style.module.scss'
import { PlusCircleFilled } from "@ant-design/icons";


const Workspace = () => {
    return ( 
        <Layout className={styles.workspace}>
            <Header className={styles.header}>
                <div className={styles.action__container}>
                    <Button><PlusCircleFilled/>Insert file</Button>
                </div>
            </Header>
            <Content className={styles.content}>

            </Content>
        </Layout>
     );
}
 
export default Workspace;