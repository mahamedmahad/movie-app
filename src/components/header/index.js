import React from 'react';

//logos
import RMDBLogo from '../../assets/images/react-movie-logo.svg';
import TMBDLogo from '../../assets/images/tmdb_logo.svg';


//styles
import {Wrapper,
    Content,
    LogoImg,
    TMDBLogoImg

} from "./Header.styles";



const Header = (props) => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt={"rmdb-logo"}/>
                <TMDBLogoImg src={TMBDLogo} alt={"tmdb-logo"}/>
            </Content>
        </Wrapper>
    )
}
export default Header;