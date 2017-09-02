import React, { Component } from 'react';
import Observer from 'react-intersection-observer';
import decorator from './decorator';

class LazyLoad extends Component {
    static defaultProps = {
        once: true,
        offset: 500,
    }

    render() {
        const {
            children,
            offset,
            once,
        } = this.props;

        return (
            <Observer
                triggerOnce={once}
                render={() => children}
                rootMargin={`${offset}px 0px`}
            >
            </Observer>
        );
    }
}

export const lazyload = decorator;
export default LazyLoad;
