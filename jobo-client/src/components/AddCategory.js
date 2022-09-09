import React,{useState} from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router-dom';

function AddCategory(onAddCategory) {
    const [category_name, setCategoryName] = useState("");
    const [category_desc, setCategoryDesc] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        //navigate to created shop or to the whole list of shops?
        fetch("http://localhost:9292/categories", {
             method: "POST",
              body: JSON.stringify({
               category_name:category_name,
               category_desc:category_desc,
            
                
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(data=> onAddCategory(data));

        navigate("/categories")

    }
    return (
        <div className='add-category-container'>
            <AdminSideBar/>
            <div>
            <h1 className='create-header'>Create new category</h1>  
            <form onSubmit={handleSubmit}>
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

export default AddCategory;