//todo: here i'll show all the posts no matter witch filters etc.
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
 
class HomePosts extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        axios.get('')
         .then(res => {

         });
    }

    render() {

        return (
            <div className="PostsContainer">
                <div className="container">
                    <div className="row">
                        <div className="column mt-4">
                            <div className="card width">
                                <img src="/public/img/post_x_categoria.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/" className="btn btn-primary">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePosts;