import React from 'react';

import {
  CATEGORY_CONCESIONARIAS,
  CATEGORY_VIVIENDAS,
  CATEGORY_BARES } from '../../store/constants';

const NavItem = ({ title, selectedCategory, category, setCategory }) => {
  const renderWhenOpen = component => selectedCategory === category && component;

  return (
    <li>
      {renderWhenOpen(<button>x</button>)}
      <button onClick={() => setCategory(category)} >{title}</button>
      {renderWhenOpen(<button>Ver lista</button>)}
    </li>
  );
}

export default function Navigation({ selectedCategory, setCategory }) {
  return (
    <nav>
      <ul>
        <NavItem setCategory={setCategory} category={CATEGORY_CONCESIONARIAS} title="concesionarias" selectedCategory={selectedCategory} />
        <NavItem setCategory={setCategory} category={CATEGORY_VIVIENDAS} title="viviendas" selectedCategory={selectedCategory} />
        <NavItem setCategory={setCategory} category={CATEGORY_BARES} title="bares" selectedCategory={selectedCategory} />
        <NavItem setCategory={setCategory} category={null} title="el estudio" selectedCategory={selectedCategory} />
      </ul>
    </nav>
  );
}