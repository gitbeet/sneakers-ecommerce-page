import "../css/Button.css";

export default function Button({ onClick, type, size, content }) {
  return (
    <button
      className={`btn ${
        type === "primary"
          ? "btn-primary"
          : type === "secondary"
          ? "btn-secondary"
          : "btn-danger"
      }
                      ${
                        size === "sm"
                          ? "btn-sm"
                          : size === "md"
                          ? "btn-md"
                          : "btn-lg"
                      }
                         `}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
