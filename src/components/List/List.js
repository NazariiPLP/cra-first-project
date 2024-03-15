import React, { Component } from 'react';
import Child from './Child';
import FlexWrapper from './FlexWrapper';

class List extends Component {
    render() {
        return (
            <>
                <Child>
                    <h1>Hello Child!</h1>
                </Child>
            </>
        );
    }
}

export default List;
