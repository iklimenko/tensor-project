import { MainContainer, AddingUser, Header, HeaderUp, HeaderDown, Text, LoaderContainer } from '../styled/ListMobileStyles';
import { useState, useEffect } from 'react';
import { getStudentsListAPI, updateStudentsListAPI, deleteStudentApi, addStudentApi } from '../API/StudentsListAPI';
import Loader from '../components/Loader';

import Popup from '../components/PopupMobile'
import Student from './StudentMobile'

import arrow from './../images/Vector.png'

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
    // student.avatar = 'qwer'
    // console.log(student)
    // const newList = [...list]
    // const res = await addStudentApi(student)
    // console.log(res[0])
    // newList.push(res[0])
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
      <Header>
          <HeaderUp />
          <HeaderDown>
              <span>
                <img 
                  height="16px" 
                  width="16px" 
                  src={arrow} 
                  alt="Логотип тензора"
                />
              </span>
              <Text>Мои одноклассники</Text>
          </HeaderDown>
      </Header>
      {loader ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <MainContainer>
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
        </MainContainer>
      )}
    </div>
  );
}

export default StudentsList;
