import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';
import Comments from './Comments';


export default class Post extends Component {
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
        axios.get('/api/posts').then(response=>{
            this.setState({sql12271205:response.data});
        });
    }
    

    render() {
        console.log("pso");
        console.log(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
        
        return (
            
            <div>
                <p>this is post page.</p>
                <p>this is post page.</p>
                        {
                            
                            this.state.sql12271205.map((posts)=> {
                                var idx = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
                                if (posts.id == idx) {
                                return(
                                    
                                    <div class="card bg-light text-black" style={{ marginBottom: '1.5rem' }}>
                                        <img class="card-img" src={posts.img} alt="Card image"></img>

                                            
                                        
                                    
                                        <div class="card-body" >
                                            <a href={"posts/" + posts.id}><h3 class="card-title">{posts.title} </h3></a>
                                            <p class="card-text"><small class="">By {posts.name} | {posts.created_at}</small></p>
                                            {/* <p class="card-text"><small class="text-muted"></small></p> */}
                                            
                                            <ShowMoreText
                                                lines={3}
                                                more='Show more'
                                                less='Show less'
                                                anchorClass=''
                                                onClick={this.executeOnClick}
                                            >
                                            <p class="card-text">{posts.content}</p>
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
                        <Comments />
            </div>




        );

    }
}

// if (document.getElementById('post')) {
//     ReactDOM.render(<Post />, document.getElementById('post'));
// }
