import styled from 'styled-components';

export const MainContainer = styled.div`
    ${'' /* background-image: url(${logo}); */}
    
`

export const BackgroundContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    background: rgb(0 0 0 / 0.35);
`
export const Container = styled.div`
    height: 192px;
    width: 343px;
    background-color: white;
    margin: auto;
    margin-top: 50%;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InfoContainer = styled.div`
    height: 160px;
    width: 311px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
export const Input = styled.input`
    background-color: #eee;
    height: 14px;
    width: 170px;
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
    color: #7A91B5;
    border: 0px solid;
    border-radius: 6px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
`

export const Label = styled.label`
    height: 30px;
    width: 60px;
    font-size: 20px;
    margin: 10px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
`
export const CardContainer = styled.div`
    height: 160px;
    width: 199px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`
export const StudentInfo = styled.div`
    height: 76px;
    width: 199px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`
export const InfoCell = styled.div`
    height: 16px;
    width: 199px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const Avatar = styled.div`
    height: 124px;
    width: 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`
export const ButtonContainer = styled.div`
    margin-top: 10px;
    height: 20px;
    width: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Button = styled.button`
    color: white;
    border-radius: 5px;
    border: 0px;
    font-size: 8.2px;
    margin: 5px;
    height: 20px;
    width: 50px;
    &:hover {
        box-shadow: 0px 0px 15px 1px grey;
        backdrop-filter: brightness (100%);
    }
`
export const NameContainer = styled.div`
    height: 42px;
    width: 199px;
`
export const TextArea = styled.textarea`
    background-color: #eee;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #333333;
    border: 0px solid;
    border-radius: 6px;
    resize: none;
`
export const CancelIcon = styled.button`
    background-color: white;
    border: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13px;
    width: 13px;
    position: relative;
    top: -87px;
    right: -317px;
`