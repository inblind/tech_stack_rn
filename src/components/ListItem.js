import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, LayoutAnimation} from 'react-native';
import {CardSection} from './common';
import * as actions from './actions';
import {connect} from 'react-redux';

class ListItem extends Component{
    
    componentWillUpdate(){
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription(){
        if(this.props.expanded){
            return(
                <Text style={styles.descriptionStyle}>{this.props.library.description}}</Text>
            );
        }
    }
    
    render(){

        const {titleStyle} = styles;
        const {id, title} = this.props.library;


        return(
        <TouchableWithoutFeedback onPress= { () => this.props.selectLibrary(id)}>
            <View>
                <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                </CardSection>

                {this.renderDescription()}
            </View>
        </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle:{
        fontSize: 20,
        paddingLeft: 15,
        paddingBottom: 3,
        paddingTop: 1
    },
    descriptionStyle:{
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 10
    }
};

const mapStatetoProps = (state, ownProps) =>{
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return{ expanded }
}

export default connect(mapStatetoProps, actions)(ListItem);