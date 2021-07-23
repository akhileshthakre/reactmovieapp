import { Link } from 'react-router-dom'
import RMDBLogo from '../../images/react-movie-image.png';
import TMDBLogo from '../../images/tmdb-db-image.png';
import { Wrapper,Content,LogoImg,TMDBLogoImg } from './Header.Styles';


const Header = () => {
    return (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
    )
}

export default Header;