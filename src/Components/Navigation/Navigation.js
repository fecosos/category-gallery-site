import React from 'react';

import {
  CATEGORY_CONCESIONARIAS,
  CATEGORY_VIVIENDAS,
  CATEGORY_BARES } from '../../store/constants';

const NavItem = ({
  title,
  selectedCategory,
  navitemActive,
  category,
  setCategory,
  setGalleryById
}) => {  
  const renderWhenOpen = component => category && selectedCategory === category && component;
  const isCategorySelected = () => {
    if (navitemActive && selectedCategory === category) {
      return true;
    }

    if (!navitemActive) {
      return true;
    }

    return false;    
  }

  const handleClick = () => setCategory(category);
  const handleClose = () => {
    setCategory(undefined);
    setGalleryById(undefined);
  };
  const handleSeeCategoryList = () => {
    console.log(category);
  }
  
  return (
    <li className={isCategorySelected() ? 'active' : 'not-active'} >
      {renderWhenOpen(
        <button onClick={handleClose} className="close-button" >
          x
        </button>
      )}
      <button onClick={handleClick} className="category-button" >
        {title}
      </button>
      {renderWhenOpen(
        <button onClick={handleSeeCategoryList} className="list-button" >
          ver lista
        </button>
      )}
    </li>
  );
}

export default function Navigation(props) {
  return (
    <nav>
      <ul>
        <NavItem {...props} category={CATEGORY_CONCESIONARIAS} title="concesionarias" />
        <NavItem {...props} category={CATEGORY_VIVIENDAS} title="viviendas" />
        <NavItem {...props} category={CATEGORY_BARES} title="bares" />
        <NavItem {...props} category={undefined} title="el estudio" />
      </ul>
    </nav>
  );
}