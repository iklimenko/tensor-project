import { MainContainer, AddingUser, Header, HeaderUp, HeaderDown, Text, LoaderContainer } from '../../styled/mobile/ListMobileStyles';
import { useState, useEffect } from 'react';
import { getStudentsListAPI, updateStudentsListAPI, deleteStudentApi, addStudentApi } from '../../API/StudentsListAPI';
import Loader from '../../components/Loader';
import { Link } from "react-router-dom";

import Popup from '../../components/mobile/PopupMobile'
import Student from './StudentMobile'

import arrow from './../../images/Vector.png'

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
          <Header>
              <HeaderUp />
              <HeaderDown>
                  <span>
                      <Link to='/'>
                          <img 
                            height="16px" 
                            width="16px" 
                            src={arrow} 
                            alt="??????????"
                          />
                      </Link>
                  </span>
                  <Text>?????? ??????????????????????????</Text>
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
                    ???????????????? ????????????????
                </AddingUser>
            </MainContainer>
          )}
      </div>
  );
}

export default StudentsList;
