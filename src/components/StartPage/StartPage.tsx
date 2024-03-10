import { Layout, Button, Upload, Typography, Flex, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './styleStartPage.scss';
import logo from '../../assets/Designer.png';
import { Container } from 'react-bootstrap';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const StartPage = () => {

    const handleUpload = (file: File) => {
        // Ваша логіка обробки завантаженого файлу
        console.log('Завантажено файл:', file);
    };
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
                    
                  </Col>
                  <Col span="12">
                    <Upload accept=".svg" beforeUpload={handleUpload} showUploadList={false}>
                      <Button icon={<UploadOutlined />}>Завантажити SVG</Button>
                    </Upload>
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
