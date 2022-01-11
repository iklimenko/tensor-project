import { Container, LogoContainer, MainContainer, TextLogo, LogoNameContainer, Logo, AddingUser, LoaderContainer } from '../../styled/desktop/ListStyles';
import { useState, useEffect } from 'react';
import { getStudentsListAPI, updateStudentsListAPI, deleteStudentApi, addStudentApi } from '../../API/StudentsListAPI';

import Popup from '../../components/desktop/Popup'
import Student from './Student'

import logo from '../../images/logo.png'
import Loader from '../../components/Loader';

const StudentsList = () => {

  useEffect(() => { loadStudentList() }, [])

  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isPopup, setPopup] = useState(false);
  const [curStudent, setCurStudent] = useState({});
  const [isNew, setIsNew] = useState();

  const loadStudentList = async () => { 
    setLoader(true)
    const studentsList = await getStudentsListAPI()
    setList(studentsList)
    setLoader(false)
  }

  const changeStudent = async (student) => {
    setLoader(true)
    const newList = [...list]
    const position = newList.findIndex(item => student.id === item.id)
    const res = await updateStudentsListAPI(student)
    newList.splice(position, 1, res[0])
    setList(newList)
    setLoader(false)
  }

  const addStudent = async (student) => {
    setLoader(true)
    await addStudentApi(student)
    loadStudentList()
    setLoader(false)
  }

  const deleteStudent = async (student) => {
    setLoader(true)
    await deleteStudentApi(student.id)
    const newList = [...list]
    const position = newList.findIndex(item => student.id === item.id)
    newList.splice(position, 1)
    setList(newList)
    setLoader(false)
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
      {loader ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
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
      )}
    </div>
  );
}

export default StudentsList
