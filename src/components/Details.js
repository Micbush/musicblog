import React from 'react'

const Details = () => {
    return (
        <div>
            <span style={{ backgroundColor:'gray', color:'white', padding:'2px', borderRadius:'2px' }} >Music</span>
            <h1>Ayra Starr 19 and Dangerous</h1>
            <div>
                <span style={{color: 'gray'}} >by</span>
            <span style={{marginRight: '4px' }} > Divine</span>
            <span style={{color: 'gray'}}>4 May, 2023, 11:59 PM</span>

            </div>
            <img className="img-fluid"  src="images/9f44e7a6b729192d6b81e7e286a58b1a65c5aa5f780d01d4a86444d0dd9880bc.png" alt="Ayra Starr 19 and Dangerous" />

            <div>
                <p>
                description here!
                </p>
                <span>
                    <audio controls controlsList="nodownload" src="songs/Amaarae-–-Sad-Girlz-Luv-Money-ft.-Moliy.mp3"></audio>
                </span>
            </div>

            <div className="embed-responsive embed-responsive-16by9">

            <iframe className='embed-responsive-item' width="560" height="315" src="https://www.youtube.com/embed/K9xYVnTajzQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <span>Social shares</span>
        </div>
    )
}

export default Details
