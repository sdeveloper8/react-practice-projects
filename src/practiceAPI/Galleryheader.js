import React, { useEffect, useState } from 'react';
import './../App.css';

const GalleryHeader = () => {
  const [users, setUsers] = useState([]);
 
  const getUsers = async ()=>{
    //we use async await istead of .then both are promises 
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    setUsers(await response.json());     
    } 
     
    useEffect(()=>{
      getUsers();
    },[]); 

  return (
    <React.Fragment>
      <header>
      <h1>React Gallery</h1>
        <section className="main-card-container">
          {
            users.map((ele) => {
              const {id, name, email, address:{street , city, zipcode}} = ele;
               return (
                <>
                  <div key={id} className='card-container' >
                    <div className="card">
                      <p className="card-body">
                        ID:{ele.id}, Name:{name}<br></br>Adress:{street},{city},{zipcode}<br></br> Email: {email}
                      </p>
                      {/* <img src="/public/logo512.png" alt="images" className="card-media" /> */}
                    </div>
                </div> 
               </>  
               )
           })
          }
        </section>
      </header>
    </React.Fragment>
  );
}
//export  getUsers;
export default GalleryHeader;
