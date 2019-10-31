import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    render() {
        const { id, title } = this.props.todo; //destructuring for less use of 'this..'
        return (
            <div>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                    { title }
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    markComplete: PropTypes.func.isRequired,
}

export default TodoItem;
