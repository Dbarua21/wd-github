import { ListGroup } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

export default function KambazNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kambaz/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }}>
      <ListGroup.Item>
        <img
          src="/images/NEU.png"
          width="75px"
          className="wd-neu-logo text-center"
        />
      </ListGroup.Item>
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Account"
        className={`text-center border-0 bg-black text-white ${pathname.includes("Account") ? "bg-white text-danger" : ""}`}
      >
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br /> Account
      </ListGroup.Item>
      {links.map((link) => (
        <ListGroup.Item
          key={link.path}
          as={Link}
          to={link.path}
          className={`bg-black text-center border-0 ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white"}`}
        >
          <link.icon className={`fs-1 ${pathname.includes(link.label) ? "text-danger" : "text-white"}`} />
          <br /> {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}