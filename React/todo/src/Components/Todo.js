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
    onDelete=(id)=>{
        // console.log(this);
        let nta = this.state.tasks.filter(task=>{
            return task.id!=id;
        })
        this.setState({tasks:nta})
    } 
    
    render() {
        console.log('render');
        return (
            <>
            <InputComponent value={this.state.currTask} onChange={this.handleChange} onSubmit={this.onSubmit} />
            <TaskList tasks={this.state.tasks} onDelete={this.onDelete} />
            </>
        )
    }
}

class InputComponent extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className='input-container'>
            <input value={this.props.value} onChange={this.props.onChange} type='text'></input>
            <button onClick={this.props.onSubmit} >Add</button>
        </div>
        )
    }
}


class TaskList extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className='class-list'>
                    <ul>
                        {
                            this.props.tasks.map(task=>(
                                <li key={task.id}>
                                    <h1>{task.txt}</h1>
                                    {/* <button onClick={()=>this.onDelete(task.id)}>Delete</button> */}
                                    <button onClick={()=>this.props.onDelete(task.id)} >Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
        )
    }
}
