import { MainContainer, LogoNameContainer, LogoContainer, TextLogo, Logo, MenuContainer, MenuItem, MenuImage, MenuSign} from '../../styled/desktop/MenuPageStyles'

import { Link } from "react-router-dom";

import logo from '../../images/logo.png'
import students from '../../images/students.png'
import lessons from '../../images/lessons.png'

const MenuPage = () => {

    return (
        <MainContainer>
            <LogoContainer>
                <LogoNameContainer>
                    <Logo>
                        <img 
                            height="41px" 
                            width="41px" 
                            src={logo} 
                            alt="Логотип тензора"
                        />
                    </Logo>
                    <TextLogo>TENSOR SCHOOL</TextLogo>
                </LogoNameContainer>
            </LogoContainer>
            <MenuContainer>
                <Link to="/students">
                    <MenuItem>
                        <MenuImage>
                            <img 
                                style = {{borderRadius: '14px 14px 0px 0px'}}
                                height="231px" 
                                width="390px" 
                                src={students} 
                                alt="Мои одноклассники"
                            />
                        </MenuImage>
                        <MenuSign>
                            Мои одноклассники
                        </MenuSign>
                    </MenuItem>
                </Link>
                <Link to="/tensor">
                    <MenuItem>
                        <MenuImage>
                            <img 
                                style = {{borderRadius: '14px 14px 0px 0px'}}
                                height="231px" 
                                width="390px" 
                                src={lessons} 
                                alt="Темы уроков"
                            />
                        </MenuImage>
                        <MenuSign>
                            Темы уроков
                        </MenuSign>
                    </MenuItem>
                </Link>    
            </MenuContainer>
        </MainContainer>
    )
}

export default MenuPage