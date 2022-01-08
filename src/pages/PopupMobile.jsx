import { BackgroundContainer, InfoContainer, MainContainer, Input, Label, CardContainer, StudentInfo, InfoCell, Avatar, Button, ButtonContainer, Container, NameContainer, TextArea, CancelIcon } from '../styled/PopupMobileStyles';
import { useState, useEffect } from 'react';

import logo from './../images/logo.png'
import cancel from './../images/cancel.png'
import phone from './../images/phone.png'
import city from './../images/city.png'
import mail from './../images/mail.png'
import university from './../images/university.png'


const Popup = (props) => {

  const student = props.student
  const [curStudent, setCurStudent] = useState(student)

  return (
    <MainContainer>
        <BackgroundContainer>
            <Container>
                <CancelIcon onClick={(event) => { props.closePopup(); }}>
                    <img 
                        height="11px" 
                        width="11px" 
                        src={cancel} 
                        alt="Аватар"
                    />
                </CancelIcon>
                <InfoContainer>
                    <CardContainer>
                        <NameContainer>
                            <TextArea
                                type="text" 
                                defaultValue={student.name}
                                onChange={e => { setCurStudent({...curStudent, name: e.target.value})} }
                            />
                        </NameContainer>
                        <StudentInfo>
                            <InfoCell>
                                <img 
                                    height="15px" 
                                    width="13px" 
                                    src={city} 
                                    alt="Аватар"
                                />
                                <Input 
                                    type="text" 
                                    defaultValue={student.city}
                                    onChange={e => { setCurStudent({...curStudent, city: e.target.value})} }
                                />
                            </InfoCell>
                            <InfoCell>
                                <img 
                                    height="13px" 
                                    width="13px" 
                                    src={university} 
                                    alt="Аватар"
                                />
                                {props.isNew ? (
                                    <Input 
                                    type="text" 
                                    defaultValue={student.university}
                                    onChange={e => { setCurStudent({...curStudent, university: e.target.value})} }
                                    />
                                ) : (
                                    <Input 
                                    type="text" 
                                    defaultValue={` ${student.university}, ${student.course} курс`}
                                    onChange={e => { setCurStudent({...curStudent, university: e.target.value})} }
                                    />
                                )}
                                
                            </InfoCell>
                            <InfoCell>
                                <img 
                                    height="13px" 
                                    width="13px" 
                                    src={phone} 
                                    alt="Аватар"
                                />
                                <Input 
                                    type="text" 
                                    defaultValue={student.phoneNumber}
                                    onChange={e => { setCurStudent({...curStudent, phoneNumber: e.target.value})} }
                                />
                            </InfoCell>
                            <InfoCell>
                                <img 
                                    height="13px" 
                                    width="13px" 
                                    src={mail} 
                                    alt="Аватар"
                                />
                                <Input 
                                    type="text" 
                                    defaultValue={student.mail}
                                    onChange={e => { setCurStudent({...curStudent, mail: e.target.value})} }
                                />
                            </InfoCell>
                        </StudentInfo>
                        <ButtonContainer>
                            {props.isNew ? (
                                <Button 
                                style={{backgroundColor: '#4CAF50', color: 'white', borderRadius: 5, border: 0, fontSize: '8.2px'}}
                                onClick={(event) => {
                                    props.onAdd(curStudent)
                                    props.closePopup()
                                }}
                                >
                                    Добавить
                                </Button>
                                ) : (
                                <div>
                                    <Button 
                                    style={{backgroundColor: '#4CAF50', color: 'white', borderRadius: 5, border: 0, fontSize: '8.2px'}}
                                    onClick={(event) => {
                                        props.onEdit(curStudent)
                                        props.closePopup()
                                    }}
                                    >
                                        Сохранить
                                    </Button>
                                    <Button 
                                        style={{backgroundColor: '#a80000', color: 'white', borderRadius: 5, border: 0, fontSize: '8.2px'}}
                                        onClick={(event) => { 
                                            props.onDelete(curStudent);
                                            props.closePopup(); 
                                        }
                                    }>
                                        Удалить
                                    </Button>
                                </div>
                            )}
                        </ButtonContainer>
                    </CardContainer>
                    <Avatar>
                        <img 
                            height="104px" 
                            width="104px" 
                            src={logo} 
                            alt="Аватар"
                        />
                        <Input 
                                type="file"
                                style={{
                                    margin: 0,
                                    height: 13,
                                    width: 104,
                                    fontSize: 5.5, 
                                    borderRadius: 3
                                    }}
                        />
                    </Avatar>
                    
                </InfoContainer>
            </Container>
        </BackgroundContainer>
    </MainContainer>
    
  );
}

export default Popup;
