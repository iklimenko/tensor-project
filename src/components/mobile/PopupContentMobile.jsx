import { InfoContainer, Input,  CardContainer, StudentInfo, InfoCell, Avatar, Button, ButtonContainer, Container, NameContainer, TextArea, CancelIcon } from '../../styled/mobile/PopupMobileStyles';
import { useState } from 'react';
import InfoUnitMobile from './InfoUnitMobile'

import cancel from '../../images/cancel.png'
import phone from '../../images/phone.png'
import city from '../../images/city.png'
import mail from '../../images/mail.png'
import university from '../../images/university.png'


const PopupContentMobile = (props) => {

  const [curStudent, setCurStudent] = useState(props.student)

    return (
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
                            defaultValue={curStudent.name}
                            onChange={e => { setCurStudent({...curStudent, name: e.target.value})} }
                        />
                    </NameContainer>
                    <StudentInfo>
                        <InfoUnitMobile
                            height="15px"
                            src={city} 
                            type="text"
                            value={curStudent.city}
                            change={e => {setCurStudent({...curStudent, city: e.target.value})}}
                        />
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
                                    defaultValue={curStudent.university}
                                    onChange={e => { setCurStudent({...curStudent, university: e.target.value})} }
                            />
                            ) : (
                                <div 
                                    style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-around', 
                                        width: '175px',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Input 
                                            style={{
                                                width: '80px'
                                            }}
                                            type="text" 
                                            defaultValue={`${curStudent.university}`}
                                            onChange={e => { setCurStudent({...curStudent, university: e.target.value})} }
                                        />
                                    <Input 
                                        placeholder='Курс'
                                        style={{
                                            width: '50px'
                                        }}
                                        type="number" 
                                        defaultValue={`${curStudent.course}`}
                                        onChange={e => { setCurStudent({...curStudent, course: e.target.value})} }
                                    />
                                    <p style={{
                                        fontFamily: 'Nunito',
                                        fontWeight: 'bold',
                                        fontSize: '12px',
                                        color: '#7A91B5'
                                    }}>курс</p>
                                </div>
                            )}
                        </InfoCell>
                        <InfoUnitMobile
                            src={phone} 
                            type="tel"
                            value={curStudent.phone}
                            change={e => {setCurStudent({...curStudent, phone: e.target.value})}}
                        />
                        <InfoUnitMobile
                            src={mail} 
                            type="text"
                            value={curStudent.mail}
                            change={e => {setCurStudent({...curStudent, mail: e.target.value})}}
                        />
                    </StudentInfo>
                    <ButtonContainer>
                        {props.isNew ? 
                        (
                            <Button 
                                style={{
                                    backgroundColor: '#4CAF50'
                                }}
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
                                    style={{
                                        backgroundColor: '#4CAF50'
                                    }}
                                    onClick={(event) => {
                                        props.onEdit(curStudent)
                                        props.closePopup()
                                    }}
                                >
                                    Сохранить
                                </Button>
                                <Button 
                                    style={{
                                        backgroundColor: '#a80000'
                                    }}
                                    onClick={(event) => { 
                                        props.onDelete(curStudent);
                                        props.closePopup(); 
                                    }}
                                >
                                    Удалить
                                </Button>
                            </div>
                        )}
                    </ButtonContainer>
                </CardContainer>
                <Avatar>
                    {!props.isNew ? (
                        <img 
                            style={{borderRadius: '7px'}}
                            height="104px" 
                            width="104px" 
                            src={curStudent.avatar} 
                            alt="Аватар"
                        />
                    ) : (
                        <div 
                            style={{ 
                                height: "102px", 
                                width: "102px",  
                                borderRadius: '7px', 
                                border: '1px solid black' 
                            }} 
                        />
                    )}
                    <Input  
                        placeholder='URL аватара'
                        type="text"
                        style={{
                            margin: 0,
                            height: 14,
                            width: 104,
                            fontSize: 11, 
                            borderRadius: 6
                        }}
                    />
                </Avatar>
            </InfoContainer>
        </Container>
    );
}

export default PopupContentMobile;
