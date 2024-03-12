import { Layout, Button, Typography, Flex, Row, Col} from 'antd'
import {
  DownloadOutlined,
  DashboardOutlined,
  FileImageOutlined,
  PoundCircleOutlined,
  DesktopOutlined,
} from '@ant-design/icons'
import './styleStartPage.scss'
import logo from '../../assets/Designer.png'
import UploadComponent from './UploadComponent/UploadComponent'

const { Header, Content, Footer } = Layout
const { Title, Paragraph } = Typography
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
          <div>
            <Row>
              <Col sm={24} md={12}>
                <Title className="content__title" level={1}>
                  Simple SVG editor
                </Title>
                <ul className="content__list">
                  <li>
                    <DownloadOutlined />
                    <Paragraph>
                      <strong>Крок 1:</strong> Виберіть SVG-зображення, яке ви хочете
                      редагувати, та завантажте його сюди, використовуючи завантажувач
                      справа.
                    </Paragraph>
                  </li>
                  <li>
                    <DashboardOutlined />
                    <Paragraph>
                      <strong>Крок 2:</strong> Зачекайте кілька секунд; редактор
                      завантажиться та відобразить ваше зображення.
                    </Paragraph>
                  </li>
                  <li>
                    <DownloadOutlined />
                    <Paragraph>
                      <strong>Крок 3:</strong> Почніть редагувати та збережіть своє
                      зображення, коли закінчите.
                    </Paragraph>
                  </li>
                </ul>
              </Col>
              <Col sm={24} md={12}>
                <UploadComponent />
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <div className="content__info">
                  <DashboardOutlined />
                  <Paragraph>
                    <strong>Чому Simple SVG Editor цінний?</strong> SSE - це потужний
                    інструмент, який дозволяє вам легко редагувати SVG зображення прямо в
                    браузері, без необхідності встановлювати спеціалізоване програмне
                    забезпечення. Все, що вам потрібно, вже тут.
                  </Paragraph>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className="content__info">
                  <PoundCircleOutlined />
                  <Paragraph>
                    <strong>Цей сервіс коштує грошей?</strong> Наш сервіс повністю
                    безкоштовний, оскільки ми отримуємо дохід від реклами. Немає жодних
                    прихованих витрат або платежів.
                  </Paragraph>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className="content__info">
                  <DesktopOutlined />
                  <Paragraph>
                    <strong>Інтерфейс користувача.</strong> Ми надаємо простий у
                    використанні графічний інтерфейс, який робить процес редагування
                    максимально зручним.
                  </Paragraph>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <div className="content__info">
                  <FileImageOutlined />
                  <Paragraph>
                    <strong>Що таке SVG файли?</strong> SVG, або Scalable Vector Graphics,
                    - це формат векторних зображень, який став стандартом в інтернеті. Він
                    відрізняється від растрових форматів, таких як JPG або PNG, тим, що
                    його можна масштабувати без втрати якості.
                  </Paragraph>
                </div>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer>
          <Paragraph className="footer__text">
            Безкоштовний SVG-редактор надає вам доступ до всіх своїх функцій без жодних
            оплат. Ми щиро сподіваємося, що вони вам стануть у пригоді. Необхідно
            зазначити, що ми не даємо жодних гарантій щодо їх роботи. Використовуючи цей
            інструмент, ви даєте згоду на завантаження ваших зображень на віддалений
            сервер.
          </Paragraph>
        </Footer>
      </Layout>
    </Flex>
  )
}

export default StartPage
