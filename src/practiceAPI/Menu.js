import React, {useState} from 'react';
import MenuData from './MenuData';
import MenuCategoryData from './MenuCategoryData';

const menuCat = [...new Set(MenuData.map((elements) =>{ return elements.category;})), 'All']; 
const Menu = () => {
  const [menuItems, setMenuItems] = useState(MenuData);
 // const [categories] = useState(menuCat);

  const menuFiltered = (selectCategory) =>{
    if(selectCategory === 'All'){
      setMenuItems(MenuData);
      return;
    } //if we dont write return data wont be displayed as it is expecting any return value
    const categoriesFilterd = MenuData.filter((categoryElements) => {
      const a = categoryElements.category === selectCategory;
      return a;
    })
    setMenuItems(categoriesFilterd); 
  }//menufilter end here
  return (
    <>
    <div className='parent-container'>
      {/* in onClick it is must we should write () => arrow function 
        otherwise showing error of re rendreing too many times */}
        <div className='category-button'>
        {   
        menuCat.map((categoryData, index) => {
          return( 
            <button key={index} onClick={() => menuFiltered(categoryData)}>
                {categoryData.charAt(0).toUpperCase() + categoryData.slice(1)}
            </button> 
        )})//menuCat closing tags
        }
        </div>
          <MenuCategoryData 
          menuItems={menuItems}
          />
      </div>
    </>
  )
}

export default Menu;

