import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Category({category, handleDeleteCategory}) {
    function handleDelete(){
        axios.delete(`https://jobo-server2.herokuapp.com/categories/${category.id}`)
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
        <div className='category-item'>
            <div className='label-name'>
            <p className='label-txt'>Category name:</p>
              <p>{category.category_name}</p>
              </div>
              <div className='label-name'>
            <p className='label-txt'>Category description:</p>
              <p>{category.category_desc}</p>
              </div>
              <div className='button-cont'>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={() => setData(category)}>Update</button>
              </div>
        </div>
    );
}

export default Category;