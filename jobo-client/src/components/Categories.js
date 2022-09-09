import React, { useEffect} from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';
import Category from './Category';

function Categories({categories, getCategories, handleDeleteCategory}) {

    useEffect(() => {
        fetch(`http://localhost:9292/categories`)
         .then((response) => response.json())
         .then((actualData) => {
            console.log(actualData)
            getCategories(actualData)})
         .catch((err) => {
          console.log(err.message);
         });
       }, [getCategories]);

    const renderCategories = categories.map((category)=>{
        return <Category key={category.id} category={category} categoryId = {category.id} handleDeleteCategory={handleDeleteCategory}/>
    })

    const navigate =useNavigate();
    function handleAddCategory(){
        navigate("/addcategory")
    }
    
    return (
        <div className='categories-container'>
            <AdminSideBar/>
            <div>
            <div>
                {renderCategories}
            </div>
            <button onClick={handleAddCategory}>Add new category</button>
            </div>
            
        </div>
    );
}

export default Categories;