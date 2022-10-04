import Keep from "../../public/assets/Keep.png";

function Header() {
  return (
    <header className="header">
      <img src={Keep} className="main-icon" />
      <h1>Keep</h1>
    </header>
  );
}

export default Header;
