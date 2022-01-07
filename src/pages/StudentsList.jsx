import { Container, LogoContainer, MainContainer, TextLogo, LogoNameContainer, Logo, AddingUser } from '../styled/ListStyles';
import { useState } from 'react';

import Popup from './Popup'
import Student from './Student'

import logo from './../images/logo.png'

const students = [{
    _id: 213,
    name: "Мария Иванова",
    university: 'УГАТУ',
    course: 2,
    city: 'Уфа',
    description: 'Good student',
    mail: 'example@mail.ru',
    phoneNumber: 89001002030
}, 
{
    _id: 4356,
    name: "Анна Волкова",
    university: 'СибГУТИ',
    course: 2,
    city: 'Новосибирск',
    description: 'Good student',
    mail: 'example@mail.ru',
    phoneNumber: 89001002030
}, 
{   
    _id: 123234, 
    name: "Иван Клименко",
    university: 'ЯрГУ',
    course: 4,
    city: 'Ярославль',
    description: 'Good student',
    mail: 'example@mail.ru',
    phoneNumber: 89001002030
}]

const StudentsList = () => {

  const [isPopup, setPopup] = useState(false);
  const [curStudent, setCurStudent] = useState({});
  const [isNew, setIsNew] = useState();

  const changeStudent = (student) => {
    const position = students.findIndex(item => student._id === item._id)
    students.splice(position, 1, student);
  }

  const addStudent = (student) => {
    const rand_id = Math.floor(Math.random() * 1000) + 1
    students.push({...student, _id: rand_id});
    console.log(students)
  }

  const deleteStudent = (student) => {
    const position = students.findIndex(item => student._id === item._id)
    students.splice(position, 1);
  }
  
  return (
    <div>
      { isPopup ? (<Popup 
                      closePopup={() => { setPopup(false) }} 
                      student={curStudent} 
                      onEdit={(student) => { changeStudent(student) }}
                      onAdd={(student) => { addStudent(student) }}
                      onDelete={(student) => { deleteStudent(student) }}
                      isNew={isNew}
                  />) : (<></>) }
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
                onClick={e => {
                  setPopup(true)
                  setCurStudent(student);
                  setIsNew(false)
                }} 
              />
            ))) : (<></>)
          }
          <AddingUser 
            onClick={e => {
              setPopup(true)
              setIsNew(true)
              setCurStudent({})
            }}
          >
          Добавить студента
          </AddingUser>
        </Container>
      </MainContainer>
    </div>
  );
}

export default StudentsList;
