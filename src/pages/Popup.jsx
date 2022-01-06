import { BackgroundContainer, InfoContainer, MainContainer, Input, Label, CardContainer, StudentInfo, InfoCell, Avatar, Button, ButtonContainer } from '../styled/PopupStyles';
import { useState } from 'react';

import logo from './../images/logo.png'


const Popup = (props) => {

  
  return (
    <MainContainer>
        <BackgroundContainer>
            <InfoContainer>
                <CardContainer>
                    <Avatar>
                        <img height="160px" width="160px" src={logo} alt="Логотип тензора"></img>
                        <Input 
                            type="file"
                            style={{fontSize: 11.5, borderRadius: 3}}
                        />
                    </Avatar>
                    <StudentInfo>
                        <InfoCell>
                            <Label>Имя:</Label>
                            <Input type="text" />
                        </InfoCell>
                        <InfoCell>
                            <Label>Город:</Label>
                            <Input type="text" />
                        </InfoCell>
                        <InfoCell>
                            <Label>ВУЗ:</Label>
                            <Input type="text" />
                        </InfoCell>
                        <InfoCell>
                            <Label>Курс:</Label>
                            <Input
                                type="number"
                                min={1}
                                max={4}
                            />
                        </InfoCell>
                    </StudentInfo> 
                </CardContainer>
                <InfoCell>
                    <Label style={{width: 120 }} >О студенте:</Label>
                    <Input 
                        style={{width: 410}} 
                    />
                </InfoCell>
                <ButtonContainer>
                    <Button 
                    style={{backgroundColor: '#4CAF50', color: 'white', borderRadius: 5, border: 0}}>Сохранить</Button>
                    <Button 
                    style={{backgroundColor: '#555555', color: 'white', borderRadius: 5, border: 0}}
                    onClick={(event) => {
                        props.closePopup();}
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
