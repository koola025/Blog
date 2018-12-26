import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';



export default class Comments extends Component {
    constructor() {
        super()
        this.state={
            sql12271205:[]
        }

    } 

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
    
    componentDidMount() {
        axios.get('/api/comments').then(response=>{
            this.setState({sql12271205:response.data});
        });
    }
    

    render() {
        console.log("pso");
        console.log(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
        
        return (
            
            <div>
                <p>this is comments</p>

                        {
                            
                            this.state.sql12271205.map((comments)=> {
                                var idx = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
                                if (comments.postid == idx) {
                                return(
                                    
                                    <div class="card bg-light text-black" style={{ marginBottom: '1.5rem' }}>

                                        <div class="card-body" >
                                            <p class="card-text"><small class="">By {comments.name} | {comments.created_at}</small></p>
                                            {/* <p class="card-text"><small class="text-muted"></small></p> */}
                                            
                                            <ShowMoreText
                                                lines={3}
                                                more='Show more'
                                                less='Show less'
                                                anchorClass=''
                                                onClick={this.executeOnClick}
                                            >
                                            <p class="card-text">{comments.content}</p>
                                            </ShowMoreText>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                )
                                }
                            })
                        
                        
                        }
                        <div>
                            <br/>
                        </div>
                        <form onSubmit={this.onSubmit}>
                    {/* <div class="form-group" >
                        <label htmlFor="title">Title</label>
                        <input  type="text" 
                                className="form-control" 
                                id="title" 
                                value = {this.state.title} 
                                onChange = {this.onChangeTitle}
                                placeholder=""></input>
                    </div> */}

                    {/* <div class="form-group" >
                        <label htmlFor="title">Photo</label>
                        <input  type="text" 
                                className="form-control" 
                                id="img" 
                                value = {this.state.img} 
                                onChange = {this.onChangeImg}
                                placeholder=""></input>
                    </div> */}
                    
                    
                    <div class="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Comments</label>
                        <textarea   className="form-control" 
                                    id="content" 
                                    value = {this.state.content} 
                                    onChange = {this.onChangeContent}
                                    rows="3"></textarea>
                        <br/>
                        <button type="submit" class="btn btn-secondary">Submit</button>
                        
                        {/* <a href="http://127.0.0.1:8000/home"> Back</a> */}
                    </div>
                </form>
            </div>



            
        );

    }
}

// if (document.getElementById('post')) {
//     ReactDOM.render(<Post />, document.getElementById('post'));
// }
