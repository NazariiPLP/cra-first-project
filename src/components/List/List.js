import React, { Component } from 'react';
import Child from './Child';

class List extends Component {
    render() {
        return (
            <div>
                <Child>
                    <h1>Header</h1>
                    <p>Hello Child</p>
                </Child>
            </div>
        );
    }
}

export default List;
