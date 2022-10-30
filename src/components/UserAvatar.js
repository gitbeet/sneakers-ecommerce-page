import "../css/UserAvatar.css";

export default function UserAvatar({ avatarImage }) {
  return <img className="mobile-avatar" src={avatarImage} alt="avatar img" />;
}
