import React from 'react';
import '.././styles/Landing.css';


const Landing = () => (
  

<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
</head>

<body>
   <section className="landing">

     <div className="banner">
            <img className="banner-img" src='assets/images/music-logo.jpg' alt="Bloc Jams Banner" />
            <h1 className="hero-title"> Turn the music up!</h1>
        </div>

     <section className="selling-points">
           <div id="firstbox" className="point">
                  <span className="glyphicon">&#xe002;</span>
              
                 <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div id="secondbox" className="point">
        <span className="glyphicon">&#xe018;</span>
        <h2 className="point-title">Unlimited streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div id="thirdbox" className="point">
      <span className="glyphicon">&#xe145;</span>
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    
    </section>

  </section>
  </body>
 

);

export default Landing;