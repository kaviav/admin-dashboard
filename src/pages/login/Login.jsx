import "./login.css";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="login-container">
      <div className="login">
        <h1>LOGIN</h1>
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>LOGIN</button>
        </form>
      </div>
    </div>
  );
};

//import { useState } from "react";
// import "./login.css";
// import { useDispatch } from "react-redux";
// import { login } from "../../redux/apiCalls";

// export const Login = () => {
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const dispatch = useDispatch();

//   const handleClick = (e) => {
//     e.preventDefault();
//     login(dispatch, {
//       username,
//       password,
//     });
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <input
//         type="text"
//         placeholder="username"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleClick}>LOGIN</button>
//     </div>
//   );
// };
