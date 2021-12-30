import { Container, LogoContainer, MainContainer, TextLogo, LogoNameContainer, Avatar, StudentContainer, StudInfoContainer, PrimaryInfo, SecondaryInfo, University, City, Logo } from '../styled/ListStyles';

import logo from './../images/logo.png'

const students = [{
    name: "Мария Иванова",
    university: 'УГАТУ',
    course: 2,
    city: 'Уфа'
}, 
{
    name: "Анна Волкова",
    university: 'СибГУТИ',
    course: 2,
    city: 'Новосибирск'
}, 
{
    name: "Иван Клименко",
    university: 'ЯрГУ',
    course: 4,
    city: 'Ярославль'
}]

const StudentsList = () => {
  
  return (
  <MainContainer>
      <LogoContainer>
          <LogoNameContainer>
            <Logo><img height="41px" width="41px" src={logo} alt="Логотип тензора"></img></Logo>
            <TextLogo>TENSOR SCHOOL</TextLogo>
          </LogoNameContainer>
      </LogoContainer>
      <Container>
            { students ? (
              students.map((options) => (
                <StudentContainer>
                  <Avatar>
                    <img height="80px" width="80px" src={logo} alt="Логотип тензора"></img>
                  </Avatar>
                  <StudInfoContainer>
                    <PrimaryInfo>{options.name}</PrimaryInfo>
                    <SecondaryInfo>
                      <University>
                        {`${options.university} ${options.course} курс`}
                      </University>
                      <City>
                        {`г. ${options.city}`}
                      </City>
                    </SecondaryInfo>
                  </StudInfoContainer>
                </StudentContainer>
              ))) : (<></>)
            }
      </Container>
  </MainContainer>
  
  );
}

export default StudentsList;
