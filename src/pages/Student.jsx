import { Avatar, StudentContainer, StudInfoContainer, PrimaryInfo, SecondaryInfo, University, City, DeleteIcon } from '../styled/ListStyles';

import deleteicon from '../images/deleteicon.jpg'
import logo from '../images/logo.png'
import { useEffect, useState } from 'react'

const Student = (props) => {

    const {student} = props
    
    return (
        <StudentContainer key = {student._id}>
            <Avatar>
                <img 
                    height="80px" 
                    width="80px" 
                    src={logo} 
                    alt="Логотип тензора" 
                />
            </Avatar>
            <StudInfoContainer onClick={props.onClick}>
                <PrimaryInfo>{student.name || ''}</PrimaryInfo>
                <SecondaryInfo>
                    <University>
                    {`${student.university || ''} ${student.course || ''} курс`}
                    </University>
                    <City>
                    {`г. ${student.city || ''}`}
                    </City>
                </SecondaryInfo>
            </StudInfoContainer>
            <DeleteIcon 
                onClick={(event) => { props.onDelete(student) }}>
                    <img 
                        height="30px" 
                        width="30px" 
                        src={deleteicon} 
                        alt="Delete Icon" 
                    />
            </DeleteIcon>
        </StudentContainer>)
    
}

export default Student