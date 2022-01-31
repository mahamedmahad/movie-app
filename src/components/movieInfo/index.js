import React from 'react';

//config
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";


//image
import NoImage from '../../assets/images/no_image.jpg';

//components
import Thumb from "../thumb";

//styles
import {Wrapper, Content, Text} from "./MovieInfo.styles";

const MovieInfo = ({movie}) => {
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
                    }
                    clickable={false}
                    alt='movie-thumb'
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3 style={{
                        paddingBottom: '20px'
                    }}>Plot</h3>
                    <p>{movie.overview}</p>

                    <div className={"rating-directors"}>
                        <div>
                            <h3>RATING</h3>
                            <div className={"score"}>
                                {movie.vote_average}
                            </div>
                        </div>

                        <div className={"director"}>
                            {/**add s if there are more than 1 director*/}
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ""}</h3>
                            {
                                movie.directors.map(director => (
                                        <p key={director.credit_id}>{director.name}</p>


                                ))
                            }
                        </div>

                    </div>

                </Text>
            </Content>
        </Wrapper>
    )
}
export default MovieInfo;