import { NavLink } from "react-router-dom";
import  { AuthContext } from "../context/auth.context"

export default function Header() {
  return (
    <div className="Header">
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/projects">Projects</NavLink> |
        <NavLink to="/projects/create">New Project</NavLink> |
    </div>
  )
}
