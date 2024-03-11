import { Layout, Button, Typography, Flex, Row, Col } from 'antd';
import { DownloadOutlined, DashboardOutlined } from '@ant-design/icons';
import './styleStartPage.scss';
import logo from '../../assets/Designer.png';
import { Container } from 'react-bootstrap';
import UploadComponent from './UploadComponent/UploadComponent';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const StartPage = () => {

    return (
        <Flex gap="middle" wrap="wrap">
            <Layout className="layout">
                <Header className="header">
                    <Button className="logo__container">
                        <img className="logo" src={logo} alt="logo" />
                        <Title className="logo__title" level={3}>
                            Simple Editor
                        </Title>
                    </Button>
                </Header>
                <Content className="content">
                    <Container>
                        <Row>
                            <Col span="12">
                                <Title className='content__title' level={1}>Simple SVG editor</Title>
                                <ul className='content__list'>
                                    <li>
                                        <DownloadOutlined />
                                        <Paragraph><strong>Step 1:</strong> Select the SVG image you want to edit and submit it here to the uploader at the right.</Paragraph>
                                    </li>
                                    <li>
                                        <DashboardOutlined />
                                        <Paragraph><strong>Step 2:</strong> Wait a moment; the editor will load in a few seconds and display your image.</Paragraph>
                                    </li>
                                    <li>
                                        <DownloadOutlined />
                                        <Paragraph><strong>Step 3:</strong> Start editing and save your image once done.</Paragraph>
                                    </li>
                                </ul>

                            </Col>
                            <Col span="12">
                                <UploadComponent/>
                            </Col>
                        </Row>
                    </Container>
                </Content>
                <Footer></Footer>
            </Layout>
        </Flex>
    );

};

export default StartPage;
