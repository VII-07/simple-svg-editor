import { Header } from "antd/es/layout/layout";
import UpploadBtn from "../../ui/UploadButton";
import styles from './headerWorkspace.module.scss';
import logo from '../../../assets/Designer.png'
import ClearBtn from "../../ui/ClearBtn";
import { Button } from "antd";
import Title from "antd/es/typography/Title";
import DownloadSvgComponent from "../../DownloadSvgComponent/DownloadSvgComponent";
import { useNavigate } from "react-router-dom";

const HeaderWorkspace = () => {
    const navigate = useNavigate();
    return (
        <Header className={styles.header}>
            <Button onClick={() => navigate('/')}  className={styles.logo__container}>
                <img className="logo" src={logo} alt="logo" />
                <Title className="logo__title" level={3}>
                    Simple Editor
                </Title>
            </Button>
            <div className={styles.action__container}>
                <UpploadBtn />
                <ClearBtn />
                <DownloadSvgComponent/>
            </div>
        </Header>
    );
}

export default HeaderWorkspace;