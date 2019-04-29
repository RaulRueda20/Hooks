import React from 'react';

const Context = React.createContext('Español');

export class LanguageStore extends React.Component {
  state = { idioma: 'Español' };

  onIdiomaChange = (idioma) => {
    this.setState({ idioma });
  }

  render () {
    return (
      <Context.Provider value={{ ...this.state, onIdiomaChange: this.onIdiomaChange }}>
        {this.props.children}
      </ Context.Provider>
    )
  }
}

export default Context;
