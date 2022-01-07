import { Avatar, StudentContainer, StudInfoContainer, PrimaryInfo, SecondaryInfo, University, City, Logo, DeleteIcon } from '../styled/ListMobileStyles';

import deleteicon from '../images/deleteicon.jpg'
import logo from '../images/logo.png'
import { useEffect, useState } from 'react'

const Student = (props) => {

    const [student, setStudent] = useState({})

    useEffect(() => {setStudent(props.opt)}, [])
    
    return (
        <StudentContainer key = {student._id}>
            <Avatar>
                <img height="56px" width="56px" src={logo} alt="Логотип тензора"></img>
            </Avatar>
            <StudInfoContainer onClick={props.onClick}>
                <PrimaryInfo>{student.name}</PrimaryInfo>
                <SecondaryInfo>
                    <University>
                    {`${student.university} ${student.course} курс`}
                    </University>
                    <City>
                    {`г. ${student.city}`}
                    </City>
                </SecondaryInfo>
            </StudInfoContainer>
            <DeleteIcon 
                onClick={(event) => { props.onDelete(student) }}>
                    <img height="20px" width="20px" src={deleteicon} alt="Delete Icon" />
            </DeleteIcon>
        </StudentContainer>)
    
}

export default Student