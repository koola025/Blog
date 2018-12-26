import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, Col, Panel, Radio } from 'react-bootstrap';
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';


export default class Home extends Component {
    constructor() {
        super()
        this.state={
            sql12271205:[]
        }
    } 
    goPage(id) {
        console.log(id);
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
        console.log("render home");
        return (
            <div>
                        {
                            this.state.sql12271205.map(posts=> {
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
                            })
                        
                        
                        }
                        <div>
                            <br/>
                        </div>
                    
            </div>




        );

    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
