import React, { Component } from 'react';

import './Tag';
 
const Tag = ({ tags }) => {
    return ( 
<>



     {/* <p className="tag">{props.tag1}</p>
     <p className="tag">{props.tag2}</p>
     <p className="tag">{props.tag3}</p>
     <p className="tag">{props.tag4}</p>
     <p className="tag">{props.tag5}</p> */}


         {/* <div className="tags_layout">
      {props.tag1 && <p className="tag">{props.tag1}</p>}
      {props.tag2 && <p className="tag">{props.tag2}</p>}
      {props.tag3 && <p className="tag">{props.tag3}</p>}
      {props.tag4 && <p className="tag">{props.tag4}</p>}
      {props.tag5 && <p className="tag">{props.tag5}</p>}
    </div> */}

    
 
    <div className="tags_layout">
      {tags.map((tag, index) => (
        <p className="tag" key={index}>
          {tag}
        </p>
      ))}
    </div>
    
</>
  );
};




 
export default Tag;