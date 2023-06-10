import logo from '../images/logo.svg';

function Header() {
  return (
    <>
      <header className="header">
        <div style={{ backgroundImage: `url(${logo})` }} className="header__logo"></div>
      </header>
    </>
  );
}

export default Header;
