import axios from 'axios';
import React from 'react';

class AboutUs extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get('http://localhost/bedrock/web/wp-json/wp/v2/pages')
         .then(res => {
             const pages = res.data;
             console.log(pages);
         })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default AboutUs;