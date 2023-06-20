import { FaHome, FaInfo, FaPeopleCarry, FaUsers, FaProjectDiagram, FaListUl } from "react-icons/fa";
import '../Navbar/navbar.css';

const ListNav = () => {
  return (
    <ul>
      <li style={{ "--i": 0 } as React.CSSProperties}>
        <a href="#home" className="active">
          <span>Home</span>
          <span>
            <FaHome />
          </span>
        </a>
      </li>
      <li style={{ "--i": 1 } as React.CSSProperties}>
        <a href="/#about">
          <span>About</span>
          <span>
            <FaInfo />
          </span>
        </a>
      </li>
      <li style={{ "--i": 2 } as React.CSSProperties}>
        <a href="/#services">
          <span>Services</span>
          <span>
            <FaProjectDiagram />
          </span>
        </a>
      </li>
      <li style={{ "--i": 3 } as React.CSSProperties}>
        <a href="#team">
          <span>Team</span>
          <span>
            <FaPeopleCarry />
          </span>
        </a>
      </li>
      <li style={{ "--i": 4 } as React.CSSProperties}>
        <a href="#clients">
          <span>Clients</span>
          <span>
            <FaUsers />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default ListNav;
