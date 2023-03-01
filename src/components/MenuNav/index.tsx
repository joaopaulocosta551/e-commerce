import { DivNav, DivLogo, DivMenu, DivIcons, DivAll } from "./style";
import menuIcon from "../../assets/icons/menu.svg";
import searchIcon from "../../assets/icons/search.svg"
import shoppingIcon from "../../assets/icons/shopping-cart.svg"


interface IProps {
    value: string;
    
}


export function MenuNavi({value}:IProps){
    return <DivNav>
                <DivAll>
                    <DivLogo>{value}</DivLogo>

                    <DivMenu>
                        <span>SHOP</span>
                        <span>COLLECTIVE</span>
                        <span>DESIGNERS</span>
                        <span>ABOUT US</span>
                        <span>CONTACT</span>
                    </DivMenu>
                    <DivIcons>
                        <img src={menuIcon} alt="icone menu"/>
                        <img src={searchIcon} alt="icone search"/>
                        <img src={shoppingIcon} alt="icone shopping"/>
                    </DivIcons>

                </DivAll>
            </DivNav>
          
}