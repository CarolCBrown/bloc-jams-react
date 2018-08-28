import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '.././styles/Library.css';

 class Library extends Component { 
 	   constructor(props) {
     super(props);
       this.state = { albums: albumData };
   }
 
   render() {
    return ( 
      <section className='library'>
          {
          this.state.albums.map( (album, index) => 
            <div id="images">
             
             <Link to={`/album/${album.slug}`} key={index}>
           <img className="albumimg" src={album.albumCover} alt={album.title} />
              
               <div className="albumtitle">{album.title}</div>
               <div className="albumartist">{album.artist}</div>
               <div className="songslength">{album.songs.length} songs</div>
            
            </Link>
            </div>
          )
        }
      </section>
     );
   }
 }

export default Library;
