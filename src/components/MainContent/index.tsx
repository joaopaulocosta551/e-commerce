import { DivMain, DivLeft, DivBreadcrumbs, DivDescription } from "./style";
import backIcon from "../../assets/icons/back.svg"



export function MainPrincipal() {
    return <DivMain>
                <DivLeft>
                    <DivBreadcrumbs>
                          
                    </DivBreadcrumbs>

                     <DivDescription>
                        <h1>Meryl Lounge Chair</h1>
                        <div>
                            <p>$149.99</p>
                            <p>4.6/5.0 <span>556</span></p>
                        </div>
                        <p>The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.</p>
                        <div className="circleOptionsColors">
                            <ul>
                                <li><a href="#" style={{textDecoration: 'none'}}><div className="optionColor1"></div></a></li>
                                <li><a href="#" style={{textDecoration: 'none'}}><div className="optionColor2"></div></a></li>
                                <li><a href="#" style={{textDecoration: 'none'}}><div className="optionColor3"></div></a></li>
                                <li><a href="#" style={{textDecoration: 'none'}}><div className="optionColor4"></div></a></li>
                            </ul>
                        </div>
                     </DivDescription>
                </DivLeft>

           </DivMain>
}
