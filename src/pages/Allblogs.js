import { useState, useEffect } from 'react'; 
import BlogList from '../components/blogs/BlogList';



function AllBlogsPage() {
 const[isLoading,setIsLoading] = useState(true);
 const [loadedBlogs,  setLoadedBlogs] = useState([]);


 useEffect(()=>{
   setIsLoading(true);
  fetch(
     'https://react-blog-53c3c-default-rtdb.firebaseio.com/blogs.json'
     )
     .then(response=>{
      return response.json();
     })
     .then(data =>{
       const blogs = [];
        
       for(const key in data){
         const blog = {
           id: key,
           ...data[key]
         };
         blogs.push(blog)
       }
         setIsLoading(false);
         setLoadedBlogs(blogs);
     })
 },[]);

 
  
    if (isLoading){
      return <section>
        <p>Loading...</p>
      </section>
    }

  return (
    <section>
      <h1>All Blogs</h1>
      <BlogList blogs={loadedBlogs} />
    </section>
  );
}

export default AllBlogsPage;
