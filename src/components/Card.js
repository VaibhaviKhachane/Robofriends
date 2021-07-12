import React from 'react';

const Card = ({id,name,email})=>{
    return(
        <div className='bg-green dib ma2 br3 tc pa3 grow shadow-5'>
          <img src = {`https://robohash.org/${id}?size=200x200`} alt='robots'/>
          <div>
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
        </div>
    );
}
export default Card;