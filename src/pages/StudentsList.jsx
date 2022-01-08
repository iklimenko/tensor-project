import { Container, LogoContainer, MainContainer, TextLogo, LogoNameContainer, Logo, AddingUser } from '../styled/ListStyles';
import { useState, useEffect } from 'react';
import { getStudentsListAPI } from '../API/StudentsListAPI';

import Popup from './Popup'
import Student from './Student'

import logo from './../images/logo.png'

const StudentsList = () => {

  useEffect(() => { loadStudentList() }, [])

  const [list, setList] = useState([]);
  const [isPopup, setPopup] = useState(false);
  const [curStudent, setCurStudent] = useState({});
  const [isNew, setIsNew] = useState();

  const loadStudentList = async () => { 
    const studentsList = await getStudentsListAPI()
    setList(studentsList)
  }

  const changeStudent = (student) => {
    const newList = [...list]
    const position = newList.findIndex(item => student._id === item._id)
    newList.splice(position, 1, student);
    setList(newList);
  }

  const addStudent = (student) => {
    const newList = [...list]
    const rand_id = Math.floor(Math.random() * 1000) + 1
    newList.push({...student, _id: rand_id});
    setList(newList);
  }

  const deleteStudent = (student) => {
    const newList = [...list]
    const position = newList.findIndex(item => student._id === item._id)
    newList.splice(position, 1);
    setList(newList);
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
          { list ? (
            list.map((student) => (
              <Student 
                key={student._id} 
                student = {student} 
                onClick={e => {
                  setPopup(true)
                  setCurStudent(student);
                  setIsNew(false)
                }}
                onDelete={(student) => { deleteStudent(student) }}
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
