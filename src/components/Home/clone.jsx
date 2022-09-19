import './clone.css' 
const Post = ({ name, profilePhoto, postTime, postText, postImage, }) => (
    <div className='post'>
      <div className='header'>
        <img className='image' src={profilePhoto} alt='Profile' />
  
        <div>
         <span className='name'> {name}</span> <br />
         <span className='postTime'>{postTime}</span>
        </div>
      </div>
  
      <div className='postText'>
        {postText}
      </div>
  
      <img className='postImage' src={postImage} alt="postPic" />
  
  
      <hr />
  
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
        postImage='https://ae01.alicdn.com/kf/H5a567c20332740d5a850e5b0dd1235646/Customized-3D-Wallpaper-Jade-Carving-Landscape-Plum-Blossom-Crane-Sea-Inner-Rivers-Mural-TV-Background-Wall.jpg_Q90.jpg_.webp'
      />
  
      <Post
        name='Ali'
        profilePhoto='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80'
        postTime='21 Jan 2022'
        postText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium voluptates impedit magni reiciendis adipisci necessitatibus tempora at veritatis commodi doloribus quaerat, nulla sint vitae aut consectetur corporis alias ipsa.'
        postImage='https://wally.com.pl/galerie/t/tapeta-3d-trojkaty-0246_57936.jpg'
      />
  
    </div>
  }

  export default Clone;