import { InfoContainer, Input, Label, CardContainer, StudentInfo, InfoCell, Avatar, Button, ButtonContainer } from '../../styled/desktop/PopupStyles';
import { useState } from 'react';

import InfoUnit from './InfoUnit'

const PopupContent = (props) => {

    const [curStudent, setCurStudent] = useState(props.student)
    
    return ( 
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
                        style={{
                            fontSize: 11.5, 
                            borderRadius: 3, 
                            height: '16px', 
                            width: '158px'
                        }}
                        onChange={e => { 
                            setCurStudent({...curStudent, avatar: e.target.value}) 
                        }}
                    />
                </Avatar>
                <StudentInfo>
                    <InfoUnit 
                        label="Имя:"
                        type="text"
                        value={curStudent.name}
                        change={e => {setCurStudent({...curStudent, name: e.target.value})}}
                    />
                    <InfoUnit 
                        label="Город:"
                        type="text"
                        value={curStudent.city}
                        change={e => {setCurStudent({...curStudent, city: e.target.value})}}
                    />
                    <InfoUnit 
                        label="ВУЗ:"
                        type="text"
                        value={curStudent.university}
                        change={e => {setCurStudent({...curStudent, university: e.target.value})}}
                    />
                    <InfoCell>
                        <Label>Курс:</Label>
                        <Input
                            type="number"
                            min={1}
                            max={4}
                            defaultValue={curStudent.course}
                            onChange={e => { setCurStudent({...curStudent, course: e.target.value})} }
                        />
                    </InfoCell>
                </StudentInfo> 
            </CardContainer>
            <InfoUnit
                labelStyle={{width: 120}}
                inputStyle={{width: 410}}
                label="Email:"
                type="email"
                value={curStudent.mail}
                change={e => {setCurStudent({...curStudent, mail: e.target.value})}}
            />
            <InfoUnit
                labelStyle={{width: 120}}
                inputStyle={{width: 410}}
                label="Телефон:"
                type="tel"
                value={curStudent.phone}
                change={e => {setCurStudent({...curStudent, phone: e.target.value})}}
            />
            <InfoUnit
                labelStyle={{width: 120}}
                inputStyle={{width: 410}}
                label="О студенте:"
                type="text"
                value={curStudent.description}
                change={e => {setCurStudent({...curStudent, description: e.target.value})}}
            />
            <ButtonContainer>
                {props.isNew ? (
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
                <Button 
                    style={{
                        backgroundColor: '#555555'
                    }}
                    onClick={(event) => { props.closePopup(); }
                }>
                    Отмена
                </Button>
            </ButtonContainer>
        </InfoContainer>  
    );
}

export default PopupContent;
