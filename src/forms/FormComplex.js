import React, { useState } from 'react';
import './../index.css';


const FormComplex = () => {
    const initialValues = { firstName: "", lastName : "", age : "", password: ""};
    const [formData, setFormData] = useState(initialValues);
    const [newRecord, setNewRecord] = useState([]);
    
    const onSubmits = (e)=> {
        e.preventDefault();
        const allRecords = {...formData, id : new Date().getTime().toString()};
        setNewRecord([...newRecord, allRecords]);
        //clean record after it is submitted or refreshed
        setFormData(initialValues); //after eac record we want input feild blank again for new user data
    };  
    const handleChange = (e)=> {
        const {name , value} = e.target;
        setFormData({...formData, [name] : value});
    };
  
  return (
    <>
    <form onSubmit={onSubmits}>
   
        <div className='formElements'>
        <label>firstName</label>
        <input type='text' 
        onChange={handleChange} autoComplete='off'
        value={formData.firstName}
        name='firstName' 
        placeholder='First Name'/>

        <label>lastName</label>
        <input type='text' onChange={handleChange} autoComplete='off' 
        value={formData.lastName}
        name='lastName' placeholder='Last Name'/>

        <label>Age</label>
        <input type='number' onChange={handleChange} 
        value={formData.age}
        name='age' placeholder='age'/> 

        <label>Password</label>
        <input type='password' onChange={handleChange} autoComplete='off' 
        value={formData.password}
        name='password' placeholder='Password'/>  

        <button type='submit'>Submit Complex Form</button>
        </div>
    </form>
    <div>
    <div>
         {
         newRecord.map((ele) => {
         const { id, firstName, lastName, age, password } = ele;
            return(
            <div key={id}>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{age}</p>
                <p>{password}</p>
            </div>
             )
        })
        }
    
    </div>
   </div>
    </>
  )
}

export default FormComplex
