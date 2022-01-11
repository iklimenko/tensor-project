import styled from 'styled-components';

export const Header = styled.div`
    height: 80px;
    width: 100%;
    margin-bottom: 12px;
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

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 732px;
`

export const TextLogo = styled.div`
    font-family: TensorFont;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    margin: 0px 12px;
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
    align-items: center;
    padding: 0px;
    width: 300px;
    height: 41px;
    margin: 10px 0px 10px 10px;
`
export const Logo = styled.div`
    margin: 0px 12px;
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
    height: 72px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const Avatar = styled.div`
    height: 56px;
    width: 56px;
`

export const StudInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 56px;
    width: 217px;
`
export const PrimaryInfo = styled.div`
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin: 4px 0px;
`
export const SecondaryInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 4px 0px;
`
export const University = styled.div`
    height: 17px;
    width: 120px;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #5465ff;
`

export const City = styled.div`
    height: 17px;
    width: 110px;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #5465ff;
`
export const AddingUser = styled.div`
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
    width: 100%;
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
    height: 20px;
    width: 20px;
    margin: 0px 10px;
`
export const Text = styled.div`
    height: 24px;
    width: 286px;
    display: flex;
    justify-content: flex-start;
    font-family: 'Catamaran', sans-serif;
    letter-spacing: 1px;
`
export const LoaderContainer = styled.div`
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
`