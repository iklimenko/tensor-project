import { Container, InfoContainer, LogoContainer, MainContainer, MainImage, Paragraph, TextLogo } from '../styled/StartPageStyles';

import logo from './../images/logo.png'
import image from './../images/image.png'

const TEXT = "Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.";

const StartPage = () => {

  return (
  
  <MainContainer>
    <Container>
      <LogoContainer>
        <img height="74px" width="74px" src={logo} alt="Логотип тензора"></img>
        <TextLogo>TENSOR SCHOOL</TextLogo>
      </LogoContainer>
      <InfoContainer>
        <MainImage>
          <img height="251px" width="294px" src={image} alt="Титульное изображение"></img>
        </MainImage>
        <Paragraph>{TEXT}</Paragraph>
      </InfoContainer>
    </Container>
  </MainContainer>
  
  );
}

export default StartPage;
