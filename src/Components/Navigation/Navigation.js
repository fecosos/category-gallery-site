import React from 'react';
import { connect } from 'react-redux';

const NavItem = ({ title, openCategory }) => {
  const renderWhenOpen = component => openCategory === title && component;

  return (
    <li>
      {renderWhenOpen(<button>x</button>)}
      <button>{title}</button>
      {renderWhenOpen(<button>Ver lista</button>)}
    </li>
  );
}

export function Navigation({ openCategory }) {
  return (
    <nav>
      <ul>
        <NavItem title="concesionarias" openCategory={openCategory} />
        <NavItem title="viviendas" openCategory={openCategory} />
        <NavItem title="bares" openCategory={openCategory} />
        <NavItem title="el estudio" openCategory={openCategory} />
      </ul>
    </nav>
  );
}

const mapStateToProps = state => ({
  openCategory: "viviendas"
});

export default connect(mapStateToProps)(Navigation);