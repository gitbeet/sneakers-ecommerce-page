import { useEffect } from "react";
import "../css/UserAvatar.css";

export default function UserAvatar({ avatarImage }) {
  useEffect(() => {
    console.log("rerendering");
  }, []);
  return <img className="mobile-avatar" src={avatarImage} alt="avatar img" />;
}
