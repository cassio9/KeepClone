import Keep from "../../public/assets/Keep.png";

function Initial() {
  return (
    <div className="noNotesPlace">
      <img src={Keep} className="sub-icon" />
      <p className="notes-appear">Notes you add appear here</p>
    </div>
  );
}

export default Initial;
