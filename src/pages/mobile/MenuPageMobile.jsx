import { MainContainer, Header, HeaderUp, HeaderDown, Text, MenuContainer, MenuItem, MenuImage, MenuSign } from '../../styled/mobile/MenuPageMobileStyles'

import { Link } from "react-router-dom";

import list from '../../images/list.png'
import students from '../../images/students.png'
import lessons from '../../images/lessons.png'

const MenuPageMobile = () => {

    return (
    <div>
        <Header>
            <HeaderUp />
            <HeaderDown>
                <span>
                <img 
                    height="16px" 
                    width="16px" 
                    src={list} 
                    alt="Логотип тензора"
                />
                </span>
                <Text>TENSOR SCHOOL</Text>
            </HeaderDown>
        </Header>
        <MainContainer>
            <MenuContainer>
                <Link to="/students">
                    <MenuItem>
                        <MenuImage>
                            <img 
                                style = {{borderRadius: '14px 14px 0px 0px'}}
                                height="95px" 
                                width="162px" 
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
                                height="95px" 
                                width="162px" 
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
        </div>
    )
}

export default MenuPageMobile