import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            tasks:[{id:1,txt:'Task 1'},{id:2,txt:'Task 2'},{id:3,txt:'Task 3'}],
            currTask:''
        }
    }
    handleChange=(e)=>{
        let val = e.target.value;
        // console.log(val);
        this.setState({currTask:val})
    }
    onSubmit=()=>{
        // this.state.tasks.push({id:this.state.tasks.length+1,txt:this.state.currTask});
        // this.state.currTask='';
        // console.log(this.state);
        let nta = [...this.state.tasks,{id:this.state.tasks.length+1,txt:this.state.currTask}];
        this.setState({
            tasks:nta,
            currTask:''
        })
    }
    
    render() {
        console.log('render');
        return (
            <div>
                <div className='input-container'>
                    <input onChange={this.handleChange} value={this.state.currTask} type='text'></input>
                    <button onClick={this.onSubmit}>Add</button>
                </div>
                <div className='class-list'>
                    <ul>
                        {
                            this.state.tasks.map(task=>(
                                <li key={task.id}>
                                    <h1>{task.txt}</h1>
                                    <button>Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
