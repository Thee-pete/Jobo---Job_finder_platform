import React, { useEffect, useState} from 'react';
import AdminSideBar from './AdminSideBar';
import { useNavigate } from 'react-router';
import Category from './Category';
import Loading from './Loading';

function Categories({categories, getCategories, handleDeleteCategory}) {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch(`https://jobo-server2.herokuapp.com/categories`)
         .then((response) => response.json())
         .then((actualData) => {
            console.log(actualData)
            getCategories(actualData)
            setIsLoading(false)
        })
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
            {isLoading ? <Loading/> : renderCategories}
            </div>
            <button className='add-new-btn' onClick={handleAddCategory}>Add new category</button>
            </div>
            
        </div>
    );
}

export default Categories;