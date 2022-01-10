import { Container, LogoContainer, MainContainer, TextLogo, LogoNameContainer, Logo, AddingUser } from '../styled/ListStyles';
import { useState, useEffect } from 'react';
import { getStudentsListAPI, updateStudentsListAPI, deleteStudentApi, addStudentApi } from '../API/StudentsListAPI';

import Popup from './Popup'
import Student from './Student'

import logo from './../images/logo.png'
import Loader from './Loader';

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

  const changeStudent = async (student) => {
    const newList = [...list]
    const position = newList.findIndex(item => student.id === item.id)
    const res = await updateStudentsListAPI(student)
    newList.splice(position, 1, res[0])
    setList(newList)
  }

  const addStudent = async (student) => {
    student.avatar = 'qwer'
    console.log(student)
    const newList = [...list]
    // const res = await addStudentApi(student)
    // console.log(res[0])
    // newList.push(res[0])
    await addStudentApi(student)
    loadStudentList()
  }

  const deleteStudent = async (student) => {
    await deleteStudentApi(student.id)
    const newList = [...list]
    const position = newList.findIndex(item => student.id === item.id)
    newList.splice(position, 1)
    setList(newList)
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
                key={student.id} 
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

export default StudentsList
