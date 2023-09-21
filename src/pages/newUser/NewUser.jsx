import { useState } from "react";
import "./newUser.css";
import { useDispatch } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"; //imported from firebase docs inside upload files
import app from "../../firebase";
import { addClient } from "../../redux/apiCalls";

export const NewUser = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    //todo firebase storage
    //whenever we try to upload files with same name, it will overwrite the file so inorder to prevent this, we can give a new file name.

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    //

    //
    //
    //
    //
    //
    //
    //below code from firebase
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          const client = {
            ...inputs,
            image: downloadURL,
          };
          addClient(client, dispatch);
          console.log(client);
        });
      }
    );
  };

  // console.log(inputs);
  console.log(file);

  return (
    <div className="newuser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])} //files ethod is in the event.target object
          />
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Terra"
            onChange={handleChange}
          />
        </div>
        {/* <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Terra Jan" />
        </div> */}
        <div className="newUserItem">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="terra@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        {/* <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 345 678 89" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>

            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>

            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}

        <div className="newUserItem">
          <label>Admin</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="newUserSelect"
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button className="newUserButton" onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
};
