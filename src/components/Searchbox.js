import React from 'react';

const Searchbox = ({searchfield,searchChange})=>{
return(
    <div>
        <input
        className = 'bg-lightest-blue pa3 ba b--green'
        type = 'search'
        placeholder = 'Search Robots'
        onChange = {searchChange}
        />
    </div>
);
}
export default Searchbox;
