import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Field extends React.Component {
  static contextType = LanguageContext;

  render (){
    const text = this.context.idioma === 'Español' ? 'Nombre' : 'Name';

    return (
      <div className = "ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
