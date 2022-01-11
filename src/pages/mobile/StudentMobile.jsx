import { Avatar, StudentContainer, StudInfoContainer, PrimaryInfo, SecondaryInfo, University, City, DeleteIcon } from '../../styled/mobile/ListMobileStyles';

import deleteicon from '../../images/deleteicon.jpg'

const StudentMobile = (props) => {

    const {student} = props

    return (
        <StudentContainer key = {student.id}>
            <Avatar>
                <img 
                    height="56px" 
                    width="56px" 
                    style={{borderRadius: '7px'}} 
                    src={student.avatar} 
                    alt="Логотип тензора" 
                />
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
                    <img 
                        height="22px" 
                        width="22px" 
                        src={deleteicon} 
                        alt="Delete Icon" 
                    />
            </DeleteIcon>
        </StudentContainer>)
    
}

export default StudentMobile