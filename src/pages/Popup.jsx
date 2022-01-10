import { BackgroundContainer, InfoContainer, MainContainer, Input, Label, CardContainer, StudentInfo, InfoCell, Avatar, Button, ButtonContainer } from '../styled/PopupStyles';
import { useState } from 'react';

const Popup = (props) => {

  const student = props.student
  const [curStudent, setCurStudent] = useState(student)
  return (
    <MainContainer>
        <BackgroundContainer>
            <InfoContainer>
                <CardContainer>
                    <Avatar>
                        { !props.isNew ? ( 
                            <img 
                                height="160px" 
                                width="160px" 
                                style={{ borderRadius: '7px' }} 
                                src={curStudent.avatar} 
                                alt="Логотип тензора" 
                            />
                        ) : (
                            <div 
                                style={{ 
                                    height: "159px", 
                                    width: "159px",  
                                    borderRadius: '7px', 
                                    border: '1px solid black' 
                                }} 
                            />
                        )}
                        <Input
                            placeholder="URL аватара"
                            type="text"
                            style={{fontSize: 11.5, borderRadius: 3, height: '14px'}}
                            onChange={e => { 
                                setCurStudent({...curStudent, avatar: e.target.value}) 
                            }}
                        />
                    </Avatar>
                    <StudentInfo>
                        <InfoCell>
                            <Label>Имя:</Label>
                            <Input 
                                type="text" 
                                defaultValue={student.name}
                                onChange={e => { setCurStudent({...curStudent, name: e.target.value})} }
                            />
                        </InfoCell>
                        <InfoCell>
                            <Label>Город:</Label>
                            <Input 
                                type="text" 
                                defaultValue={student.city}
                                onChange={e => { setCurStudent({...curStudent, city: e.target.value})} }
                            />
                        </InfoCell>
                        <InfoCell>
                            <Label>ВУЗ:</Label>
                            <Input 
                                type="text" 
                                defaultValue={student.university}
                                onChange={e => { setCurStudent({...curStudent, university: e.target.value})} }
                            />
                        </InfoCell>
                        <InfoCell>
                            <Label>Курс:</Label>
                            <Input
                                type="number"
                                min={1}
                                max={4}
                                defaultValue={student.course}
                                onChange={e => { setCurStudent({...curStudent, course: e.target.value})} }
                            />
                        </InfoCell>
                    </StudentInfo> 
                </CardContainer>
                <InfoCell>
                    <Label style={{width: 120 }} >E-mail:</Label>
                    <Input
                        type='email'
                        style={{width: 410}}
                        defaultValue={student.mail}
                        onChange={e => { setCurStudent({...curStudent, mail: e.target.value})} } 
                    />
                </InfoCell>
                <InfoCell>
                    <Label style={{width: 120 }} >Телефон:</Label>
                    <Input 
                        type='tel'
                        style={{width: 410}}
                        defaultValue={student.phone}
                        onChange={e => { setCurStudent({...curStudent, phone: e.target.value})} } 
                    />
                </InfoCell>
                <InfoCell>
                    <Label style={{ width: 120 }} >О студенте:</Label>
                    <Input 
                        type='text'
                        style={{width: 410}}
                        defaultValue={student.description}
                        onChange={e => { setCurStudent({...curStudent, description: e.target.value})} } 
                    />
                </InfoCell>
                <ButtonContainer>
                    {props.isNew ? (
                        <Button 
                            style={{
                                backgroundColor: '#4CAF50', 
                                color: 'white', 
                                borderRadius: 5, 
                                border: 0
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
                                    backgroundColor: '#4CAF50', 
                                    color: 'white', 
                                    borderRadius: 5, 
                                    border: 0
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
                                    backgroundColor: '#a80000', 
                                    color: 'white', 
                                    borderRadius: 5, 
                                    border: 0
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
                    <Button 
                        style={{
                            backgroundColor: '#555555', 
                            color: 'white', 
                            borderRadius: 5, 
                            border: 0
                        }}
                        onClick={(event) => { props.closePopup(); }
                    }>
                        Отмена
                    </Button>
                </ButtonContainer>
            </InfoContainer>
        </BackgroundContainer>
    </MainContainer>
    
  );
}

export default Popup;
