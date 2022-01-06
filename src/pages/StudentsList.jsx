import { Container, LogoContainer, MainContainer, TextLogo, LogoNameContainer, Avatar, StudentContainer, StudInfoContainer, PrimaryInfo, SecondaryInfo, University, City, Logo } from '../styled/ListStyles';
import { useState } from 'react';

import Popup from './Popup'
import Student from './Student'

import logo from './../images/logo.png'

const students = [{
    _id: 1,
    name: "Мария Иванова",
    university: 'УГАТУ',
    course: 2,
    city: 'Уфа'
}, 
{
    _id: 2,
    name: "Анна Волкова",
    university: 'СибГУТИ',
    course: 2,
    city: 'Новосибирск'
}, 
{   
    _id: 3, 
    name: "Иван Клименко",
    university: 'ЯрГУ',
    course: 4,
    city: 'Ярославль'
}]

const StudentsList = () => {

  const [isPopup, setPopup] = useState(false);
  
  return (
  <div>
  { isPopup ? (<Popup closePopup={() => { setPopup(false); }} />) : (<></>) }
  <MainContainer>
      <LogoContainer>
          <LogoNameContainer>
            <Logo><img height="41px" width="41px" src={logo} alt="Логотип тензора"></img></Logo>
            <TextLogo>TENSOR SCHOOL</TextLogo>
          </LogoNameContainer>
      </LogoContainer>
      <Container>
            { students ? (
              students.map((student) => (
                <Student 
                  key={student._id} 
                  opt = {{...student}} 
                  onClick={e => {setPopup(true)}} 
                />
              ))) : (<></>)
            }
      </Container>
  </MainContainer>
  </div>
  );
}

export default StudentsList;
