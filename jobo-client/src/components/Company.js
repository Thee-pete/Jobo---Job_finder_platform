import React from 'react';

function Company({company}) {
    return (
        <div>
            <p>{company.company_name}</p>
        </div>
    );
}

export default Company;