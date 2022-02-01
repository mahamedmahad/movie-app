import React from 'react';

import {Content, Wrapper, Info} from './MovieInfoBar.styles';

const MovieInfoBar = ({movie}) => {

    //movie estimated time, budget and revenue

    //convert timer
    function convertTime(runtime) {
        let hours = Math.floor(runtime / 60);
        let minutes = runtime % 60;

        return hours + "h " + minutes + "min";
    }


    // Convert a number to money formatting
    const convertMoney = money => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        });
        return formatter.format(money);
    };

    return (
        <Wrapper>
            <Content>
                <Info>
                    <span>Running time: {convertTime(movie.runtime)}</span>
                </Info>
                <Info>
                    <span>Budget:  {convertMoney(movie.budget)}</span>
                </Info>
                <Info>
                    <span>Revenue:  {convertMoney(movie.revenue)}</span>
                </Info>
            </Content>
        </Wrapper>
    )
}
export default MovieInfoBar;