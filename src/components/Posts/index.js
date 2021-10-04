//todo: here i'll show all the posts no matter witch filters etc.
import React from 'react';
import { Link } from 'react-router-dom';
 
class HomePosts extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="PostsContainer">
                <div className="container">
                    <div className="row">
                        <div className="column mt-4">
                            <div class="card width">
                                <img src="/public/img/post_x_categoria.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/" class="btn btn-primary">Read more</Link>
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