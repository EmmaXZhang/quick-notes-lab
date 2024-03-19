/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    //remove token
    userService.LogOut();
    //set user to null
    setUser(null);
  }

  return (
    <>
      <nav>
        <Link to="/notes">Notes</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </nav>
    </>
  );
}
