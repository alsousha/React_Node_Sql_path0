import React, { useState, useEffect } from 'react';
import FormModal from '../components/FormModal';
import { Link } from 'react-router-dom';

function MainPage() {
  const [showForm, setShowForm] = useState(false);
  const [dataArray, setDataArray] = useState([]);

	const fetchData = async () => {
		try {
			// const res = await axios.get(`/posts`);
      const posts = [
        {
          post_id: 1,
          post_img: 'https://via.placeholder.com/150',
          post_title: 'Exploring the Mountains',
          post_text: 'Discover the beauty and challenges of mountain hiking in this comprehensive guide.'
        },
        {
          post_id: 2,
          post_img: 'https://via.placeholder.com/150',
          post_title: 'A Journey Through the Desert',
          post_text: 'Experience the vastness and unique ecosystem of the desert in our latest adventure.'
        },
        {
          post_id: 3,
          post_img: 'https://via.placeholder.com/150',
          post_title: 'City Life: The Urban Jungle',
          post_text: 'Dive into the fast-paced and vibrant life of the city, exploring its hidden gems.'
        },
        {
          post_id: 4,
          post_img: 'https://via.placeholder.com/150',
          post_title: 'Relaxing at the Beach',
          post_text: 'Unwind and enjoy the sun, sand, and sea with our ultimate beach relaxation tips.'
        },
        {
          post_id: 5,
          post_img: 'https://via.placeholder.com/150',
          post_title: 'Adventures in the Rainforest',
          post_text: 'Join us on an exhilarating journey through the lush and diverse rainforest.'
        },
        {
          post_id: 6,
          post_img: 'https://via.placeholder.com/150',
          post_title: 'Exploring Ancient Ruins',
          post_text: 'Step back in time and uncover the mysteries of ancient civilizations and their ruins.'
        },
        {
          post_id: 7,
          post_img: 'https://via.placeholder.com/150',
          post_title: 'Culinary Delights: A Foodie’s Guide',
          post_text: 'Embark on a culinary adventure and explore the world’s most delicious cuisines.'
        },
        {
          post_id: 8,
          post_img: 'https://via.placeholder.com/150',
          post_title: 'Sailing the Open Seas',
          post_text: 'Set sail and discover the freedom and adventure of life on the open seas.'
        },
        {
          post_id: 9,
          post_img: 'https://via.placeholder.com/150',
          post_title: 'Winter Wonderland: Snow Adventures',
          post_text: 'Embrace the cold and explore thrilling winter activities in a snowy wonderland.'
        },
        {
          post_id: 10,
          post_img: 'https://via.placeholder.com/150',
          post_title: 'Urban Art: Street Art and Graffiti',
          post_text: 'Explore the colorful and creative world of urban street art and graffiti.'
        }
      ];
      console.log(posts);
			setDataArray(posts);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
  return (
		<div className='container'>
			<button onClick={() => setShowForm(true)} className="open-form-btn">
        Open Form
      </button>
      {showForm && <FormModal onClose={() => setShowForm(false)} />}
      <div className="posts d-flex jcsb f-wrap">
        {dataArray && dataArray.map((post, i) => (
          <div key={post.post_id} className='post d-flex f-column jcc'>
            <img src={post.post_img} alt={post.post_title} className="post-img" />
            <Link
              to={`/post/${post.post_id}`}
              state={{ post: post }}
            ><h2 className="post-title">{post.post_title}</h2></Link> 
          </div>
        ))}
      </div>
		</div>
  )
}

export default MainPage
