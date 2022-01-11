import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const TextLogo = styled.div`
    height: 27px;
    width: 180px;
    letter-spacing: -1px;
    font-family: 'Catamaran', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
`

export const Container = styled.div`
    height: 784px;
    width: 784px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 800px;
    height: 185px;
`
export const LogoNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    width: 233px;
    height: 41px;
    margin: 10px 0px;
`
export const Logo = styled.div`
    height: 41px;
    width: 41px;
    margin: 0px 6px 0px 6px;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    width: 526px;
    height: 404px;
`
export const ListContainer = styled.div`
    height: 784px;
    width: 392px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`
export const StudentContainer = styled.div`
    height: 112px;
    width: 392px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    transition: background-color 0.5s linear;
    &:hover {
        background-color: #fcc897;
        border-radius: 5px;
        transition: background-color 0.1s linear;
    }
`
export const Avatar = styled.div`
    height: 80px;
    width: 80px;
    margin: 0px 10px;
`

export const StudInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 250px;
`
export const PrimaryInfo = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    font-family: 'Nunito', sans-serif;
`
export const SecondaryInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const University = styled.div`
    height: 17px;
    width: 120px;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #5465ff;
`

export const City = styled.div`
    height: 17px;
    width: 110px;
    font-family: 'Nunito', sans-serif;;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #5465ff;
`
export const AddingUser = styled.div`
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 112px;
    width: 390px;
    font-size: 20px;
    border: dashed 1px #5465ff;
    border-radius: 5px;
    color: #5465ff;
    transition: color 0.5s linear;
    &:hover {
        color: #fcc897;
        transition: color 0.1s linear;
    }
`

export const DeleteIcon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
`
export const LoaderContainer = styled.div`
    height: 950px;
    display: flex;
    justify-content: center;
    align-items: center;
`