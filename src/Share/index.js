import React, { Component } from 'react';

import PrevNext from '../components/PrevNext/index';

export default class Share extends Component {
    render() {
        return (
            <div>
                <h1>Share</h1>
                <PrevNext pathname='share' />
            </div>
        )
    }
}
