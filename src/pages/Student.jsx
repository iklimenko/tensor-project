import { Avatar, StudentContainer, StudInfoContainer, PrimaryInfo, SecondaryInfo, University, City, DeleteIcon } from '../styled/ListStyles';

import deleteicon from '../images/deleteicon.jpg'

const Student = (props) => {

    const {student} = props
    
    return (
        <StudentContainer key = {student.id}>
            <Avatar>
                <img
                    style = {{borderRadius: '10px'}}
                    height="80px" 
                    width="80px" 
                    src={student.avatar} 
                    alt="Фото" 
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
                        height="30px" 
                        width="30px" 
                        src={deleteicon} 
                        alt="Delete Icon" 
                    />
            </DeleteIcon>
        </StudentContainer>)
}

export default Student