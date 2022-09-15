import '../Post/Post.css'

const Post = (props) => {
  return ( 
    <div className="post">
      <div className="img-post"></div>
      <h5>{props.subtitle}</h5>
      <h3>{props.title}</h3>
      <p>
      {props.textpost}
      </p>
      <div className="flex">
        <div className="img-profile">{props.imgprofile}</div>
        <div className="description-profile">
          <h6 className='person-name'>{props.author}</h6>
          <p>{props.datatime}</p>
        </div>
      </div>
    </div>
  );
}
 
export default Post;