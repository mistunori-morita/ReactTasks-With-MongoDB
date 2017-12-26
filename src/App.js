import React, { Component } from 'react';
import axios from 'axios';
import {Appbar, Container} from 'muicss/react';
import Tasks from './components/Tasks';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: []
    }
  }
  componentWillMount(){
    this.getTasks();
  }
  getTasks(){
    axios.request({
      method: 'get',
      url: 'https://api.mlab.com/api/1/databases/reacttask/collections/tasks?apiKey=jTroFZtBVa3L0rbd70SoL9aovA5Om3j3'
    }).then((response) => {
      this.setState({tasks: response.data}, () => {
        console.log(this.state)
      })
    }).catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <div className="App">
        <Appbar>
          <Container>
            <table width="100%">
              <tbody>
                <tr>
                  <td className="mui--appbar-height"><h3>React Tasks</h3></td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Appbar>
        <br/>
        <Container>
          <Tasks tasks={this.state.tasks}/>
        </Container>
      </div>
    );
  }
}

export default App;
