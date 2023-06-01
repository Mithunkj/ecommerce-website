import { NavLink } from "react-router-dom";
import "../styles/mainStyle.css";

function PageNavigation({ title }) {
  return (
    <div className="pageNav">
      <NavLink to="/">Home</NavLink> / {title}
    </div>
  );
}

export default PageNavigation;
