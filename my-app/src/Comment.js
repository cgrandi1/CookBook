import React, { Component } from 'react';
import Recipe from './container/RecipeContainer'

export default class Comment extends Component{
    render(){
        return(
            <div className="comment">
                {this.props.commentText}

            </div>
        )
    }
}

export default Comment;