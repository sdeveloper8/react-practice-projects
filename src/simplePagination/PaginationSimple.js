import React from 'react'

const PaginationSimple = ({photosPerPage, totalPhotos, setCurrentPage}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPhotos/photosPerPage); i++){
        pageNumbers.push(i);
    }
    return (
      <div className='listNumbers' >
        {pageNumbers.slice(0,10).map((number, index) => {
          return(
            <div key={index}>
              <a onClick={() => setCurrentPage(number)} href='!#'>
                {number}
              </a>
            </div>
          )}
        )}
      </div> 
  )
}

export default PaginationSimple;
