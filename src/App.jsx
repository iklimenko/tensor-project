import { Container, InfoContainer, LogoContainer, MainContainer, MainImage, Paragraph, TextLogo } from './styled/AppStyles';

import logo from './images/logo.png'
import image from './images/image.png'

const TEXT = "Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.";

function App() {
  
  return (
  <MainContainer>
    <Container>
      <LogoContainer>
        <img height="74px" width="74px" src={logo} alt="Логотип тензора"></img>
        <TextLogo>TENSOR SCHOOL</TextLogo>
      </LogoContainer>
      <InfoContainer>
        <MainImage>
          <img height="251px" width="294px" src={image} alt="Центральное изображение"></img>
        </MainImage>
        <Paragraph>{TEXT}</Paragraph>
      </InfoContainer>
    </Container>
  </MainContainer>
  
  );
}

export default App;
