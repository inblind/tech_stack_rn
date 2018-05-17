import React, {Component} from 'react';
import {connect} from 'react-redux';

class LibraryList extends Component{

    render(){
        console.log(this.props);
        return;
    }

}


const mapToStateProps = state => {

    return { libraries: state.libraries };

};

export default connect(mapToStateProps)(LibraryList);