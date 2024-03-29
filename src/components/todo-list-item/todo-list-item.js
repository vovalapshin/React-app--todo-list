import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {

        const {label,onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;
        
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                    {label}
                </span>
                <button type="button" 
                        className="btn btn-outline-success btn sm float-right todo-list-item-btn"
                        onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"></i>
                </button>
                <button type="button" 
                        className="btn btn-outline-danger btn sm float-right todo-list-item-btn"
                        onClick={onDeleted}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        )
    }
}

 