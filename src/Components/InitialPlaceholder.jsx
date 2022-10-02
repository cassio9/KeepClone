import KeepIcon from "../assets/KeepIcon.png";

function Initial() {
  return (
    <div className="noNotesPlace">
      <img src={KeepIcon} className="sub-icon" />
      <p className="notes-appear">Notes you add appear here</p>
    </div>
  );
}

export default Initial;
