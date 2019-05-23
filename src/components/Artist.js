import React from 'react';

const Artist = ({artist}) =>{
    if(!artist) return null;


    const {images,followers,genres,name}=artist;

    return(
        <div>
            <img 
            src={images[0] && images[0].url}
            alt='photo of artist'
            style={{height:200,width:200,borderRadius:100,objectFit:'cover'}}
            />
            <h3>{name}</h3>
            <p>{genres.join(',')}</p>
            <p>{followers.total} followers</p>
        </div>
    )
}
export default Artist;
