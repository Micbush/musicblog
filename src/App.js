import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import Header from './components/Header'
import Pagination from './components/Pagination'
import Posts from './components/Posts'

// import Footer from './components/Footer'

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }
    getPosts()
  }, [])

  // Fetch data from database
  const fetchPosts = async () => {
    const res = await fetch('https://my-json-server.typicode.com/typicode/demo/db')
    const data = await res.json()
    
   return data
  // comment the "return data" and uncomment this console.log to see the error and it will fetch the data but throw an error
    // console.log(data)
  }
  return (
    <Router>

        
    <div className="App container ">
      <Header />
      
      <Routes>
        <Route path="/" element={<Posts posts={posts} />} exact />
        
         {/* ) : ('No Posts To Show'

      {posts.length > 0 ? (
      )} */}
     
      <Route path='/download' element={<Details />} />
      </Routes>
      {/* pagination not yet working cus of the i couldn't display the post properly and yea, thats it */}
      <Pagination />
      {/* Yea and the slug i have not done it */}
      {/* <span class="back-to-top-wrapper">
        <a href="#top" class="back-to-top-link" aria-label="Scroll to Top">🔝</a>
      </span> */}
      
      {/* <Footer /> */}
    </div>

    </Router>
  );
}

export default App;
