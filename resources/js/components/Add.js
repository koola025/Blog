import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';





export default class Add extends Component {
    constructor() {
        super()
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            title:'',
            content:"",
            img:"",
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    onChangeImg(e) {
        this.setState({
            img: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        
        const newPost ={
            title: this.state.title,
            content: this.state.content,
            img: this.state.img,
            name: "default",
            email: "abc@email.com"
        }
        console.log("came here")
        axios.post('addPost', newPost).then(response=>console.log(response)).catch(error => {
            console.log(error);
          });
        window.location = "/home";

    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group" >
                        <label htmlFor="title">Title</label>
                        <input  type="text" 
                                className="form-control" 
                                id="title" 
                                value = {this.state.title} 
                                onChange = {this.onChangeTitle}
                                placeholder=""></input>
                    </div>

                    <div class="form-group" >
                        <label htmlFor="title">Photo</label>
                        <input  type="text" 
                                className="form-control" 
                                id="img" 
                                value = {this.state.img} 
                                onChange = {this.onChangeImg}
                                placeholder=""></input>
                    </div>
                    
                    
                    <div class="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Content</label>
                        <textarea   className="form-control" 
                                    id="content" 
                                    value = {this.state.content} 
                                    onChange = {this.onChangeContent}
                                    rows="3"></textarea>
                        <br/>
                        <button type="submit" class="btn btn-secondary">Submit</button>
                        
                        <a href="http://127.0.0.1:8000/home"> Back</a>
                    </div>
                </form>

                


            </div>
            
            
        );
    }
}

if (document.getElementById('add')) {
    ReactDOM.render(<Add />, document.getElementById('add'));
}
