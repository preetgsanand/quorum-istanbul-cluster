import React, { Component } from 'react';
import SimpleStorage from './components/SimpleStorage/SimpleStorage';
import getWeb3 from './utils/Web3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3 : null
    }
  }

  componentWillMount() {
    getWeb3.then((results) => {
      console.log(results.web3)
      this.setState({
        web3: results.web3
      });
    });
  }

  render() {
    return (
      <div className="App">
        <SimpleStorage 
          web3={this.state.web3}/>
      </div>
    );
  }
}

export default App;
