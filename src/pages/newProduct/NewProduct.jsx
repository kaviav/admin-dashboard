import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"; //imported from firebase docs inside upload files
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCategories(e.target.value.split(","));
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
          const product = {
            ...inputs,
            image: downloadURL,
            categories: categories,
          };
          addProduct(product, dispatch);
        });
      }
    );
  };
  // console.log(inputs);
  // console.log(categories);
  console.log(file);
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])} //files ethod is in the event.target object
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title" // make sure name is same as in ur DB
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="description"
            type="text"
            placeholder="description.."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="jeans,skirts" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          {/* <input type="text" placeholder="123" /> */}
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {/* <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
};

// create a new project in firebase and copy the configuration code of new created project in the firebase.js file
//install firebase
