import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import "./style.css";
//const view=require('../../assets/images/CoyoteLakeBackSide.jpg');


function Project({ view, github, website, description }) {
  return (
    <tr>
      <td data-th='View' className='align-middle'>
        <img
          src={view}
          className='nature-image'
          //src='../assets/images/pawsperity.png'
          alt={'screenshot'}
        />
      </td>
      <td data-th='Description' className='align-middle'>
        {description}
      </td>
      <td data-th='Website' className='align-middle'>
        <a
          //to={{ pathname: {website} }} target='_blank'
          href={website}
          className={"font-bold hover:underline cursor-pointer"}
        >
          {website}
        </a>
      </td>
      <td data-th={'Github'} className='align-middle'>
        <a
          href={github}
          className={"font-bold hover:underline cursor-pointer"}
        >
          {github}
        </a>
      </td>      
    </tr>
  );

}

export default Project;
