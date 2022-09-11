import React, { useState, useEffect } from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';

function EditCategory({onUpdateCategory}) {
    const  [category_name,setCategoryName] = useState('')
    const  [category_desc,setCategoryDesc] = useState('')
    const  [id, setID] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setCategoryName(localStorage.getItem('CATEGORY_NAME'));
        setCategoryDesc(localStorage.getItem('CATEGORY_DESC'))
        
    }, []);
    function handleUpdate(event){
      event.preventDefault()
          fetch(`https://jobo-server2.herokuapp.com/categories/${id}`, {
          method: 'PATCH',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            category_name: category_name,
            category_desc: category_desc
          })
        })
        .then(r => r.json())
        .then(data => onUpdateCategory(data))

        navigate("/categories")
    
      }

    return (
        <div className='edit-container'>
             <AdminSideBar/>
            <div className='form-container'>
            <h1 className='create-header'>Update category</h1>  
            <form onSubmit={handleUpdate} >
              <label>
                Category name:
               <input type="text" name="name" value={category_name} onChange={(e)=> setCategoryName(e.target.value)}/>
               </label>
               <br></br>
               <label>
                Category description:
                <input type="text" name="name" value={category_desc} onChange={(e)=> setCategoryDesc(e.target.value)}/>
               </label>
               <br></br>
              <button type="submit" value="Submit">SAVE</button>
             </form>  
             </div>
        </div>
    );
}

export default EditCategory;