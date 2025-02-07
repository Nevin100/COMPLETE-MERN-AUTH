import LogOut from "./logOut.jsx";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between">
        <ol>
          <li>
            <LogOut />
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Navbar;
