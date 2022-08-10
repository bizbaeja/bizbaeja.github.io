import { useHistory } from 'react-router-dom';

import NewBlogForm from '../components/blogs/NewBlogForm';

function NewBlogPage() {
  const history= useHistory();

  function addBlogHandler(blogData){
    fetch(

      'https://react-blog-53c3c-default-rtdb.firebaseio.com/blogs.json',{
        mtehod:'POST',
        body: JSON.stringify(blogData),
        headers:{
          'Content-Type': 'applycation.json'
        }
      }
    ).then(()=>{
      history.replace('/')
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewBlogForm onAddBlog={addBlogHandler}/>
    </section>
  );
}

export default NewBlogPage;
