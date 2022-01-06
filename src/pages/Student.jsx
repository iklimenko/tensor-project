import { Container, LogoContainer, MainContainer, TextLogo, LogoNameContainer, Avatar, StudentContainer, StudInfoContainer, PrimaryInfo, SecondaryInfo, University, City, Logo } from '../styled/ListStyles';

import logo from './../images/logo.png'
import { useEffect, useState } from 'react'

const Student = (props) => {

    const [student, setStudent] = useState({})

    useEffect(() => {setStudent(props.opt)}, [])


    console.log(student)
    
    return (<StudentContainer onClick={props.onClick} key = {student._id}>
                <Avatar>
                <img height="80px" width="80px" src={logo} alt="Логотип тензора"></img>
                </Avatar>
                <StudInfoContainer>
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
            </StudentContainer>)
    
}

export default Student