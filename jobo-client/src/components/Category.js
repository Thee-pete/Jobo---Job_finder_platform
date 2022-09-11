import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Category({category, handleDeleteCategory}) {
    function handleDelete(){
        axios.delete(`http://localhost:9292/categories/${category.id}`)
        .then(()=>{
           
            handleDeleteCategory(category)
        })


    }
    const navigate = useNavigate()
    
  
    const setData = (category) => {
        console.log(category);
        let {id,category_name,category_desc} = category
        localStorage.setItem('ID',id)
        localStorage.setItem('CATEGORY_NAME', category_name)
        localStorage.setItem('CATEGORY_DESC',category_desc)

        navigate("/editcategory")
        
     }
    return (
        <div>
              <p>{category.category_name}</p>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={() => setData(category)}>Update</button>
        </div>
    );
}

export default Category;