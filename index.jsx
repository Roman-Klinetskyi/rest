import React, {Component} from 'react';
import logo from './logo.svg';
import styles from './styles.module.scss';

class App extends Component {
  state = {
    b: 10,
    mount: ['illya', ' stephan', ' igor'],
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({ b: 25 })
    }, 3000) 
  }

  handlerClick = () => {
    this.setState({mount:[...this.state.mount, " ivan"]})
  }
  render() {
    const {b, mount} = this.state;
    const { handlerClick } = this;

    return (
      <div className={styles["App"]}>
        <header className={styles["App-header"]}>
          <img src={logo} className={styles["App-logo"]} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            {b}
          </p>
          <button type="button" onClick={handlerClick}>Press me</button>
          <a
            className={styles["App-link"]}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 
            
          </a>
          <p>{mount}</p>
        </header>
      </div>
    );
  }
}

export default App;
