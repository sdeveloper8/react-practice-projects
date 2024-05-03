import React from 'react';
import { useState, useEffect } from 'react';
import PaginationSimple from './PaginationSimple';
import Photos from './Photos';

const GalleryPics = () => {
    const [photos, setPhotos] = useState([]); 
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(9);


    const getPhotos = async ()=> {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        setPhotos(await res.json());
    }

    useEffect(()=>{
        getPhotos();
       
    },[]);
    //per page photos
    const indexOfLastPhoto = currentPage * photosPerPage; //1*9 // 9
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage; // 9-9 //0
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto); //per page photos 9

    //change page
    //const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
         <Photos photos={currentPhotos} />
        <PaginationSimple
            photosPerPage={photosPerPage}
            totalPhotos={photos.length}
            setCurrentPage={setCurrentPage}
            />
          
       {/* {
            photos.map((galleryPhotos)=>{
                const {id, title, url, thumbnailUrl} = galleryPhotos;
                return(
                    <div className='card-container'  key={id} >
                      <div className="card">
                       <p>{id}</p>
                      <h5>{title.toUpperCase()}</h5>
                      <a href={url}>url</a>  
                      <img src={thumbnailUrl} alt="images" className="card-media" />         
                      </div> 
        
                      
                    </div>
                )
            })
        } */}
       
    
    </>
  )
}

export default GalleryPics;
