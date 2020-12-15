import React, { useState } from 'react';

const ImageCard = ({ pet }) => {
  const [activity, setActivity] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={pet.picture} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          {pet.name}
        </div>
        <ul>
          <li>
            <strong>Age: </strong>
            {pet.age}
          </li>
          <li>
            <strong>Location: </strong>
            {pet.location}
          </li>
        </ul>
      </div>
      <div style={buttonStyle}>
        <button className="h-10 content-center px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800"
        onClick={() => setActivity(!activity)}>
          Details 
        </button>
      </div>
      {activity ? <h1 style={buttonStyle}>{['Aww!', "So adorable!", "The cutest!", "Isn't she adorable?", "He's so cute!"][Math.floor(Math.random() * 5)]}{[' Your future best friend!', " Come and meet your future best friend!", " Your best friend is waiting for you!", " You'll come and see, right?", " Come and adopt me!"][Math.floor(Math.random() * 5)]}</h1> : null}
    </div>
  )
}

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding:'10px'
}


export default ImageCard;
