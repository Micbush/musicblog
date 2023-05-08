import React from 'react'

const Posts = ({ posts }) => {
  
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">

          {/* This was the initial map function i did which was working fine to a point */}
          {/* posts.map((post) => () */}
          
          {Array.from(posts).map((post) => (

          <div className="col">
              <div key={post.id} className="card" style={{width:'18rem', marginLeft:'25px', marginBottom:'10px'}}>
          
              <img src={post.image} className="card-img-top" alt={posts.title}/>
              <span className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.time}</p>
              </span>
            </div>

          </div>
          
        ))}
        
      </div>
            
            
    )
}

export default Posts
