import React from 'react'
import { Link, useLocation } from 'react-router-dom';


function SinglePost() {
  const location = useLocation();
	//get post data from MainPage
	const item = location.state?.post;
	console.log(item);
  return (
    <div className="container">
      <div className='single-post mt4'>
        <div className="post__details d-flex f-column jcc aic">
          <img src={item.post_img} alt='art_icon' className='art__icon' />
          <div className='text d-flex f-column jcc aic'>
            <h2 className='mb2'>{item.post_title}</h2>
            <div className="post_text">
            {item.post_text}
            </div>
          </div>
        </div>
        
      </div>
    </div>
	 
  )
}

export default SinglePost