import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { userRequest } from "../../requestMethods";

export const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await userRequest.get("/user/getall"); // /?new=true for first few
        setUsers(res.data);
        // console.log(res.data);
      } catch (err) {}
    };
    getAllUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Welcome memb</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.image ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName"> {user.username} </span>
              <span className="widgetSmUserJob">Software Developer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
