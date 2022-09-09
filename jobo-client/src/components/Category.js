import React from 'react';
import axios from 'axios';

function Category({category, handleDeleteCategory}) {
    function handleDelete(){
        axios.delete(`http://localhost:9292/categories/${category.id}`)
        .then(()=>{
           
            handleDeleteCategory(category)
        })


    }
    return (
        <div>
              <p>{category.category_name}</p>
              <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Category;