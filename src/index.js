import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Post = ({ name, profilePhoto, postTime, postText, postImage, }) => (
  <div className='post'>
    <div className='header'>
      <img className='image' src={profilePhoto} alt='Profile' />

      <div>
        {name} <br />
        {postTime}
      </div>

      <div className='postText'>
        {postText}
      </div>

      <img className='postImage' src={postImage} alt="postPic" />
    </div>

    <hr/>

    <div>
      
    </div>
  </div>
  

);

function Clone() {
  return <div className='cloningPage'>
    <Post
      name='Ahmer '
      profilePhoto='https://static8.depositphotos.com/1377527/930/i/600/depositphotos_9305412-stock-photo-businessman.jpg'
      postTime='21 Jan 2022'
      postText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium voluptates impedit magni reiciendis adipisci necessitatibus tempora at veritatis commodi doloribus quaerat, nulla sint vitae aut consectetur corporis alias ipsa.'
      postImage='shorturl.at/ABPV8'
    />

    <Post
      name='Ali'
      profilePhoto='https://static8.depositphotos.com/1377527/930/i/600/depositphotos_9305412-stock-photo-businessman.jpg'
      postTime='21 Jan 2022'
      postText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium voluptates impedit magni reiciendis adipisci necessitatibus tempora at veritatis commodi doloribus quaerat, nulla sint vitae aut consectetur corporis alias ipsa.'
      postImage='shorturl.at/ABPV8'
    />


  </div>
}

ReactDOM.render(<Clone />, document.querySelector('#root'));


