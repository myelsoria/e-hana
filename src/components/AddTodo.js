import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} >
              <input type="text" 
                value={this.state.title} 
                onChange={this.onChange}
                style={{width: '100%', padding: '5px'}} 
                name="title" />
              <input type="submit" value="Add" style={btnStyle} />
            </form>
        )
    }
}
AddTodo.propTypes = {
    addtodo: PropTypes.func.isRequired
}
const btnStyle = {
    marginTop: '10px',
    background: 'blue',
    color: '#fff',
    border: 'none',
    padding: '10px 25px',
    borderRadius: '10%'
}

export default AddTodo;
