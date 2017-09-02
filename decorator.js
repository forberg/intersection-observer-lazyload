import React, { Component, PropTypes } from 'react';
import LazyLoad from './index';

export default (options = {}) => function(WrappedComponent) {
    return class LazyLoadDecorated extends Component {
        render() {
            return (
                <LazyLoad {...options}>
                    <WrappedComponent {...this.props} />
                </LazyLoad>
            );
        }
    }
}
