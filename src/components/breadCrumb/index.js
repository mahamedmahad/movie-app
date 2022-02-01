import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Content} from './BreadCrumb.styles';

import {Link} from 'react-router-dom';

const Breadcrumbs = ({movieTitle}) => {
    return (
        <Wrapper>
            <Content>
                <Link to={"/"}>
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>

            </Content>
        </Wrapper>
    )
}

Breadcrumbs.propTypes = {
    movieTitle: PropTypes.string
}

export default Breadcrumbs;