import React, { Component } from 'react';
import {Panel} from 'muicss/react';
import TaskItem from './TaskItem';


class Tasks extends Component {
  render() {
    let taskItems;
    if(this.props.tasks){
      taskItems = this.props.tasks.map(task => {
        return (
          <TaskItem key={task._id.$oid} task={task} />
        );
      });
    }

    return (
      <Panel>
      {taskItems}
      </Panel>
    );
  }
}

export default Tasks;
