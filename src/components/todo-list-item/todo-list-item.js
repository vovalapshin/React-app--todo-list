import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    };

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    };
    
    render() {

        const {label} = this.props;
        const {done, important} = this.state;

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
                    onClick={this.onLabelClick}>
                    {label}
                </span>
                <button type="button" className="btn btn-outline-success btn sm float-right todo-list-item-btn"
                onClick={this.onMarkImportant}>
                    <i className="fa fa-exclamation"></i>
                </button>
                <button type="button" className="btn btn-outline-danger btn sm float-right todo-list-item-btn">
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        )
    }
}

 