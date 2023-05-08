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
  }
  return (
    <Router>

        
    <div className="App container " style={{backgroundColor:'milk'}} >
      <Header />
      
      <Routes>
        <Route path="/" element={<Posts posts={posts} />} exact />
        
         {/* ) : ('No Posts To Show'

      {posts.length > 0 ? (
      )} */}
     
      <Route path='/download' element={<Details />} />
      </Routes>
      <Pagination />
      {/* <span class="back-to-top-wrapper">
        <a href="#top" class="back-to-top-link" aria-label="Scroll to Top">🔝</a>
      </span> */}
      
      {/* <Footer /> */}
    </div>

    </Router>
  );
}

export default App;
