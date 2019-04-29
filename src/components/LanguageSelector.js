import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render (){
  
    return (
      <div>
        Selecciona un idioma:
        <i
          className = "flag mx"
          onClick={() => this.context.onIdiomaChange('Español')}
        />
        <i
          className = "flag us"
          onClick={() => this.context.onIdiomaChange('English')}
        />
      </div>
    )
  }
}

export default LanguageSelector;
