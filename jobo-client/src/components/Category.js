import React from 'react';

function Category({category}) {
    return (
        <div>
              <p>{category.category_name}</p>
        </div>
    );
}

export default Category;