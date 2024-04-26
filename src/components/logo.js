import logo from '../assets/icons/logo.svg';
import logoFont from '../assets/icons/logo-lia.svg';
// import logo from '../assets/icons/logo-meadows.svg';

export default function Logo() {
  return (
    <div className="logo-box">
      <img
        className="app-logo rotate-center"
        src={logo}
        alt="liat-meadows-logo"
      />
      <img className="app-logo-font" src={logoFont} alt="liat-meadows-logo" />
    </div>
  );
}
