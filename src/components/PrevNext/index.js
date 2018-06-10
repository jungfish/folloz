// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../routes';
import './style.css';

type Props = {
    pathname: string
}
export default class PrevNext extends Component<Props> {
    render() {
        let previous, next;
        const routeIndex = routes.findIndex(r => r === this.props.pathname);
        if (routeIndex === 0) {
            previous = 0;
            next = 1;
        } else if (routeIndex === routes.length - 1) {
            previous = routes.length - 2;
            next = routes.length - 1;
        } else {
            previous = routeIndex - 1;
            next = routeIndex + 1;
        }
        return (
            <div className="PrevNext">
                <button>
                    <Link to={routes[previous]}>previous</Link>
                </button>
                <button>
                    <Link to={routes[next]}>next</Link>
                </button>
            </div>
        )
    }
}
