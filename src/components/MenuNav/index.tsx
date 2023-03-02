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
                        {/* <nav style={{display: "flex"}}>
                            <ul style={{display: "flex",}}>
                                <li><a href="@">SHOP</a></li>
                                <li><a href="@">COLLECTIVE</a></li>
                                <li><a href="@">DESIGNERS</a></li>
                                <li><a href="@">ABOUT US</a></li>
                                <li><a href="@">CONTACT</a></li>
                            </ul>
                        </nav> */}
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