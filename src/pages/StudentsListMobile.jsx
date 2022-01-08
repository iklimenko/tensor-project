import { Container, LogoContainer, MainContainer, TextLogo, LogoNameContainer, Logo, AddingUser, Header, HeaderUp, HeaderDown, Text } from '../styled/ListMobileStyles';
import { useState, useEffect } from 'react';
import { getStudentsListAPI, updateStudentsListAPI, deleteStudentApi, addStudentApi } from '../API/StudentsListAPI';

import Popup from './PopupMobile'
import Student from './StudentMobile'

import arrow from './../images/Vector.png'

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
    // const newList = [...list]
    // const position = newList.findIndex(item => student.id === item.id)
    // newList.splice(position, 1, student)
    await updateStudentsListAPI(student, student.id)
    loadStudentList()
  }

  const addStudent = async (student) => {
    // const newList = [...list]
    // const id = list.length + 1
    // newList.push({...student, id: id})
    // setList(newList)
    // console.log(student)
    await addStudentApi(student)
    loadStudentList()
  }

  const deleteStudent = async (student) => {
    // const newList = [...list]
    // const position = newList.findIndex(item => student.id === item.id)
    // newList.splice(position, 1)
    // setList(newList)
    // console.log(student.id)
    await deleteStudentApi(student.id)
    loadStudentList()
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
      <Header>
          <HeaderUp></HeaderUp>
          <HeaderDown>
              <span><img height="16px" width="16px" src={arrow} alt="Логотип тензора"></img></span>
              <Text>Мои одноклассники</Text>
          </HeaderDown>
      </Header>
      <MainContainer>
          { list ? (
            list.map((student) => (
              <Student 
                key={student._id} 
                opt = {{...student}} 
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
      </MainContainer>
    </div>
  );
}

export default StudentsList;
