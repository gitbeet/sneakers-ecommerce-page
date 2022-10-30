import "../css/Backdrop.css";

export default function Backdrop({ onClick }) {
  return <div onClick={onClick} className="backdrop"></div>;
}
