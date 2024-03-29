 import React from 'react';

const List = ({peoples}) => {
  return (
    <>
      {peoples.map((person) =>{
        const { id, name, age, image} = person;
        return <article key = {id} className='person'>
          <img src={ image } alt= {name} />
          <div className="">
            <h4>{name}</h4>
            <p>{age} years old</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
