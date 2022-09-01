import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css';

function Profile() {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {

    axios.get(`/api/getuser/4`).then(res=>{
      if(res.status === 200) {
        setFullname(res.data.name);
        setEmail(res.data.email);
      }
    });

  }, []);

  return (
    <div className='Basil'>
    <div className="Card">
      <div className="upper-container">

        <div className="image-container">
          <img
          src='https://scontent.famm9-1.fna.fbcdn.net/v/t39.30808-6/284262175_1206420770124164_8458178959522859028_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGfYZXiwYteO4nZ7i4nPgIN9_MRGkfQiUf38xEaR9CJRyzoveT0FZgvG5mUmDTFn_cOUh454XwdZtcfAeUdRUG0&_nc_ohc=w6KPOOVDmHAAX_nBy4T&_nc_zt=23&_nc_ht=scontent.famm9-1.fna&oh=00_AT9rvb_Un40vdLvwL7XV1n6f2c8BBMzAXWpVXOMWD8UY_Q&oe=6310D1D2'
          alt='' 
          height="100px" 
          width="100px" 
          />
        </div>

      </div>
      <div className='lower-container'>
        <h3> { fullname }</h3>
        <h4> { email } </h4>
        <a href='./Edit'><button className='button'>Edit your profile</button></a>
      </div>
    </div>
    </div>
  );
}


export default Profile;
