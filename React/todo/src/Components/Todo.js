import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            tasks:[{id:1,txt:'Task 1'},{id:2,txt:'Task 2'},{id:3,txt:'Task 3'}],
           
        }
    }
 
    onSubmit=(task)=>{
        // this.state.tasks.push({id:this.state.tasks.length+1,txt:this.state.currTask});
        // this.state.currTask='';
        // console.log(this.state);
        let nta = [...this.state.tasks,{id:this.state.tasks.length+1,txt:task}];
        this.setState({
            tasks:nta
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
        console.log('Todo render');
        return (
            <>
            <InputComponent onSubmit={this.onSubmit} />
            <TaskList tasks={this.state.tasks} onDelete={this.onDelete} />
            </>
        )
    }
}

class InputComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            currTask:''
        }
    }
    handleChange=(e)=>{
        this.setState({currTask:e.target.value})
    }
    render() {
        // console.log(this.props);
        console.log('Input render');
        return (
            <div className='input-container'>
            <input value={this.state.currTask} onChange={this.handleChange} type='text'></input>
            <button onClick={()=>{
                this.props.onSubmit(this.state.currTask)
                this.setState({currTask:''})
            }
        } >Add</button>
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
        console.log('TaskList render');
        // console.log(this.props);
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
