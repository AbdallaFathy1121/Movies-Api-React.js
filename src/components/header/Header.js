import { React } from 'react';
import { Link } from 'react-router-dom';

// Styles
import "./Header.styles"
import { Content, LogoImg, TMDBLogoImg, Wrapper } from './Header.styles';

// Images
import RMDLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"

const Header = () => {
    return (
        <div>
            <Wrapper>
                <Content>
                    <Link to="/">
                        <LogoImg src={RMDLogo} alt="rmdl-logo" />
                    </Link>
                    <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
                </Content>
            </Wrapper>
        </div>
    )
}

export default Header
