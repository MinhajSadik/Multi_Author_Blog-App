import { BsListUl } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="image_menubar">
              <Link className="image" to="/">
                <img src="/design/images/logo1.png" alt="" />
              </Link>
              <label className="menu_icon" htmlFor="toggle">
                <BsListUl />
              </label>
            </div>
          </div>
          <div className="col-8">
            <ul className="link_list">
              <li className="link_item">
                <Link to="/about">About</Link>
              </li>
              <li className="link_item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link_item">
                <Link to="/policy">Policy</Link>
              </li>
            </ul>
            <li className="link_item">
              <Link to="/">
                <span>
                  <FaGithubSquare />
                </span>
              </Link>
            </li>
            <li className="link_item">
              <Link to="/">
                <span>
                  <ImLinkedin />
                </span>
              </Link>
            </li>
            <li className="link_item">
              <Link to="/">
                <span>
                  <FaTwitterSquare />
                </span>
              </Link>
            </li>
            <li className="link_item">
              <Link to="/">
                <span>
                  <FaFacebookSquare />
                </span>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
