import React from 'react'
import "./wiki.css";

const WikiItems = ({content}) => {
  return (
    <div>
        <div className="container">
          {content.map((item) => (
            <div className="container-item" key={item.pageid}>
              <h1>{item.title}</h1>
              <p>{item.snippet}</p>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default WikiItems
