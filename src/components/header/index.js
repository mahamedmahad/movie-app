import React from 'react';

import {Link} from 'react-router-dom';

//logos
import RMDBLogo from '../../assets/images/react-movie-logo.svg';
import TMBDLogo from '../../assets/images/tmdb_logo.svg';


//styles
import {
    Wrapper,
    Content,
    LogoImg,
    TMDBLogoImg

} from "./Header.styles";


const Header = (props) => {
    return (
        <Wrapper>
            <Content>
                <Link to={"/"}>

                    <LogoImg src={RMDBLogo} alt={"rmdb-logo"}/>
                </Link>
                    <TMDBLogoImg src={TMBDLogo} alt={"tmdb-logo"}/>
            </Content>
        </Wrapper>
    )
}
export default Header;