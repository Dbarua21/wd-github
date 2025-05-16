import { ListGroup } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaFlask, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { PiChatsTeardropLight } from "react-icons/pi"; // New icon for Pazza
import { Link, useParams } from "react-router-dom";

export default function KambazNavigation() {
  const { cid } = useParams();

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      {/* NEU Logo */}
      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </ListGroup.Item>

      {/* Account Link */}
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Account"
        className="text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text-white" />
        <br />
        Account
      </ListGroup.Item>

      {/* Dashboard Link */}
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Dashboard"
        className="text-center border-0 bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </ListGroup.Item>

      {/* Courses Link */}
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Dashboard"
        className="text-center border-0 bg-black text-white"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </ListGroup.Item>

      {/* Pazza Link - Conditional on course */}
      {cid && (
        <ListGroup.Item
          as={Link}
          to={`/Kambaz/Courses/${cid}/Pazza`}
          className="text-center border-0 bg-black text-white"
        >
          <PiChatsTeardropLight className="fs-1 text-danger" />
          <br />
          Pazza
        </ListGroup.Item>
      )}

      {/* Calendar Link */}
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Calendar"
        className="text-center border-0 bg-black text-white"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </ListGroup.Item>

      {/* Inbox Link */}
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Inbox"
        className="text-center border-0 bg-black text-white"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </ListGroup.Item>

      {/* Labs Link */}
      <ListGroup.Item
        as={Link}
        to="/Labs"
        className="text-center border-0 bg-black text-white"
      >
        <FaFlask className="fs-1 text-danger" />
        <br />
        Labs
      </ListGroup.Item>
    </ListGroup>
  );
}
