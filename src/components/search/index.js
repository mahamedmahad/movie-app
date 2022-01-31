import React, {useState, useEffect, useRef} from 'react';

import {Wrapper, Content} from './Search.styles';

import SearchIcon from '../../assets/images/search-icon.svg';


const SearchBar = ({setSearchTerm}) => {

    const [inputState, setInputState] = useState('');
    const initial = useRef(true);

    useEffect(() => {

        if(initial.current) {
            initial.current = false;
            return ;
        }

        //time out
        const timer = setTimeout(() => {
            setSearchTerm(inputState);

        }, 500)

        //clear time out
        return () => clearTimeout(timer);

    }, [setSearchTerm, inputState])

    return (
        <Wrapper>
            <Content>
                <img
                    src={SearchIcon}
                    alt={"Search-icon"}
                />
                <input
                    type={"text"} placeholder={"Search Movie"}
                    onChange={(e) => setInputState(e.currentTarget.value)}
                    value={inputState}

                />

            </Content>
        </Wrapper>
    )
}
export default SearchBar;