import React, { Component } from 'react'
import {getMovies} from './MovieService'
export default class Movies extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            movies:getMovies(),
            currSearchText:''
        }
    }

    onDelete=(id)=>{
        let filterArr = this.state.movies.filter(movieObj=>{
            return movieObj._id!=id
        }
        )
        this.setState({
            movies:filterArr
        })
    }
    handleChange=(e)=>{
        let val = e.target.value;
        this.setState({
            currSearchText:val
        })
        //We are kind of creating two states for similar content. As the filter movies operation is temporary and occurs with the state change
        //  of currSearchText we can simply form the filterMovies array in the render method itself. So there is no need to make
        // it as a state.
        // if(val=='')
        // {
        //     this.setState({
        //     filterMovies:this.state.movies,
        //     currSearchText:''
        // })
        // return;
        // }
        // let filteredArr = this.state.movies.filter(movieObj=>{
        //     let title = movieObj.title.trim().toLowerCase();
        //     // console.log(title);
        //     return title.includes(val.toLowerCase());
        // })
        // this.setState({
        //     filterMovies:filteredArr,
        //     currSearchText:val
        // })
    }
    render() {
        console.log('render');
        let {movies,currSearchText}=this.state;
        let filterMovies =[];
        if(currSearchText!='')
        {
            filterMovies = movies.filter(movieObj=>{
                    let title = movieObj.title.trim().toLowerCase();
                    // console.log(title);
                    return title.includes(currSearchText.toLowerCase());
                })
        }
        else
        {
            filterMovies=movies;
        }
        return (
            <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <h1>Hello</h1>
                </div>
                <div className='col-9'>
                   <input onChange={this.handleChange} type='text'></input>
                   <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
        filterMovies.map(movieObj=>(
            <tr scope='row' key={movieObj._id} >
              <td>{movieObj.title}</td>
              <td>{movieObj.genre.name}</td>
              <td>{movieObj.numberInStock}</td>
              <td>{movieObj.dailyRentalRate}</td>
              <td><button onClick={()=>this.onDelete(movieObj._id)} type="button" className="btn btn-danger">Delete</button></td>  
            </tr>
        ))
    }
  </tbody>
</table> 
                </div>
            </div>
            </div>
        )
    }
}
