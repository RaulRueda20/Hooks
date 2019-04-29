import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{
  renderSubmit (idioma){
    return  idioma === 'Español' ? 'Ingresar' : 'Submit';
  }

  renderButton (color) {
    return (
      <button className = {`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({idioma}) => this.renderSubmit(idioma)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render (){
    return(
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
