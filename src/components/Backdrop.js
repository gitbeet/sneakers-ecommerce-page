import "../css/Backdrop.css";

export default function Backdrop({ onClick, opacity = "35%" }) {
  return (
    <div
      onClick={onClick}
      className="backdrop"
      style={{ opacity: opacity }}
    ></div>
  );
}
