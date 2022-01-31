import React from 'react';

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
export default Breadcrumbs;