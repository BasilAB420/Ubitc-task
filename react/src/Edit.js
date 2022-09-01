import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";
import {swal} from 'sweetalert';

function Edit() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [updateInput, setUpdate] = useState({
    name: "",
    email: "",
    password: "",
  });
  // eslint-disable-next-line
  const [image, setImage] = useState([]);
  const [errorlist, setError] = useState([]);

  const handleInput = (e) => {
    e.persist();
    setUpdate({ ...updateInput, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setImage({ image: e.target.files[0] });
  };

  useEffect(() => {
    axios.get(`/api/getuser/4`).then((res) => {
      if (res.status === 200) {
        setFullname(res.data.name);
        setEmail(res.data.email);
      }
    });
  }, []);

  const submitUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image.image);
    formData.append('name', updateInput.name);
    formData.append('email', updateInput.email);

    axios.post(`/api/update`, formData).then(res=>{
      if(res.data.status === 200)
      {
        swal("Success", res.data.message, "success");
        setError([]);
      }

      else if(res.data.status === 422) {
        swal('All fields are mandetory', "", "errors");
        setError(res.data.errors);
      }

      else 
      {

      }
    });
};



  //   const api = {
  //     name: updateInput.name,
  //     email: updateInput.email,
  //     password: updateInput.password,
  //   };
  //   console.log(data.email);

  //   async function updatedata() {
  //     const res = await axios.post(`http://127.0.0.1:8000/api/update/{$id}`, api);

  //     return res;
  //   }
  //   updatedata();

  // const data = {
  //   name: updateInput.name,
  //   email: updateInput.email,
  //   password: updateInput.password,
  // };

  return (
    <div className="Basil">
      <div className="Card">
        <form onSubmit={submitUpdate} encType="multipart/form-data">
          <div className="upper-container2">
            <label>Choose an Image for your avatar: </label>
            <br /> <br />
            <div className="image-container">
              <input type="file" name="image" onChange={handleImage}/>
              <small className="text-danger">{errorlist.image}</small>
              {/* <img src="" alt="Profile avatar" height="100px" width="100px" /> */}
            </div>
          </div>
          <div className="lower-container2">
            <input
              type="text"
              name="name"
              placeholder={fullname}
              onChange={handleInput}
              value={updateInput.name}
              className="form-control"
            />
            <small className="text-danger">{errorlist.name}</small>

            <br /> 

            <input
              type="text"
              name="email"
              placeholder={email}
              onChange={handleInput}
              value={updateInput.email}
              className="form-control"
            />
            <small className="text-danger">{errorlist.email}</small>

            
            <a href="./Profile">
              <button type="submit" className="button">
                Update profile
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
