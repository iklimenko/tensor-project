import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 732px;
`

export const Header = styled.div`
    height: 80px;
    width: 100%;
    margin-bottom: 32px;
`
export const HeaderUp = styled.div`
    height: 24px;
    width: 100%;
    background-color: #364968;
    border-radius: 6px 6px 0 0;
`
export const HeaderDown = styled.div`
    height: 56px;
    width: 100%;
    background-color: #364968;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: SF UI Display;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #FFFFFF;
`
export const Text = styled.div`
    height: 24px;
    width: 286px;
    display: flex;
    justify-content: flex-start;
    font-family: 'Catamaran', sans-serif;
    letter-spacing: 1.3px;
`


export const MenuContainer = styled.div`
    height: 140px;
    width: 375px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 140px;
    width: 162px;
    border-radius: 14px;
    box-shadow: 0px 0px 15px 1px grey;
`

export const MenuImage = styled.div`
    height: 95px;
    width: 162px;
`

export const MenuSign = styled.div`
    height: 45px;
    width: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    font-family: 'Nunito', sans-serif;
`