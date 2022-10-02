import KeepIcon from "../assets/KeepIcon.png";

function Header() {
  return (
    <header className="header">
      <img src={KeepIcon} className="main-icon" />
      <h1>Keep</h1>
    </header>
  );
}

export default Header;