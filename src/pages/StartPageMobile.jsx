import { Container, InfoContainer, LogoContainer, MainContainer, Paragraph, TextLogo, TextContainer } from '../styled/StartPageMobileStyles';

import logo from './../images/logo.png'
import image from './../images/image.png'

const TEXT = "Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.";

const StartPage = () => {

  return (
  
  <MainContainer>
    <Container>
      <LogoContainer>
        <img height="42px" width="42px" style={ {margin: '16px 0px'}} src={logo} alt="Логотип тензора"></img>
        <TextLogo>TENSOR SCHOOL</TextLogo>
      </LogoContainer>
      <InfoContainer>
          <img height="178px" width="209px" src={image} alt="Титульное изображение"></img>
        <Paragraph><TextContainer>{TEXT}</TextContainer></Paragraph>
      </InfoContainer>
    </Container>
  </MainContainer>
  
  );
}

export default StartPage;
