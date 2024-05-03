import React from 'react'
//next steps add pagination, layout better, make it ecommerce, live payament order, deploy live

const MenuCategoryData = ({menuItems}) => {
  return (
    <>   
        <main className='main-card-container'>
           {        
            menuItems.map((elements) => { 
              const {id, image, name, category, price, description} = elements;
                return ( 
                    <div key={id} className='card-container' >                    
                        <img src={image} alt='I ma food.'/>
                        <h5>{category.charAt(0).toUpperCase() + category.slice(1)}</h5>
                          <div className='card-details'>
                            <h2>{name.toUpperCase()}</h2>
                            <p>{description}</p>
                            <h4>Price: {price}</h4>
                          </div> 
                    </div>   
                );//filter return closing here
            })
          }  
      </main> 
    </>
  )
}

export default MenuCategoryData;
