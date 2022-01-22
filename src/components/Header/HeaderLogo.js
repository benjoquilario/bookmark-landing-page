import blackLogo from '../../assets/images/logo-bookmark.svg';
import whiteLogo from '../../assets/images/logo-bookmark-white.svg';

const Logo = ({ click }) => {
   return <img src={click ? whiteLogo : blackLogo} alt="Bookmark - Logo" />;
};

export default Logo;
