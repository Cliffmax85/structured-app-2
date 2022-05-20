import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";


export default function Header() {
    const { user, logout } = useUser();

    return (
    <header
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      }}
    >
    <Link to="/">
      <h1>InstaReddit</h1>
    </Link>
    <h3>
      Hello, {user.email}
    </h3>
    <button onClick={logout}>signout</button>
  </header>
    );
}