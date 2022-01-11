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
export const InfoContainer = styled.div`
    height: 460px;
    max-width: 600px;
    background-color: white;
    margin: auto;
    margin-top: 5%;
    border-radius: 5px;
`
export const Input = styled.input`
    height: 30px;
    width: 200px;
    margin: 10px;
    font-size: 18px;
    border: 0.2px solid;
    border-radius: 6px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
`

export const Label = styled.label`
    font-family: 'Nunito', sans-serif;
    height: 30px;
    width: 60px;
    font-size: 20px;
    margin: 10px;
    font-weight: bold;
`
export const CardContainer = styled.div`
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
`
export const StudentInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
export const InfoCell = styled.div`
    display: flex;
    flex-direction: row;
`
export const Avatar = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const ButtonContainer = styled.div`
    margin: 10px 0px;
    margin-top: 30px;
    height: 30px;
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Button = styled.button`
    color: white; 
    border-radius: 5px; 
    border: 0;
    margin: 10px;
    height: 30px;
    width: 100px;
    font-weight: bold;
    font-family: 'Nunito', sans-serif;
    &:hover {
        box-shadow: 0px 0px 15px 1px grey;
        backdrop-filter: brightness (100%);
    }
`

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 10px;
    width: 200px;
`