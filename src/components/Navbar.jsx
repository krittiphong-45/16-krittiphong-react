import { Link } from "react-router-dom";
export default function Navbar(){
  return(
    <nav className="">
      <ul className="flex gap-4 justify-end items-center mr-4 mt-4">
        <li className="font-medium">
          <Link to="/"> Home</Link>
        </li>
        <li className="font-medium">
          <Link to="owner">Owner</Link>
        </li>
      </ul>
    </nav>
  );
}