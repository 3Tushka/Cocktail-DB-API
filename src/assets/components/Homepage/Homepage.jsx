import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Typography } from 'antd';
import { useGetOneRandomCoctailQuery, useGetRandomCocktailsQuery } from '../../services/cocktailApi';

import './homepage.scss';
import wineLogo from '../../images/—Pngtree—red wine wine splash_6526263.png';
import cocktailLogo from '../../images/—Pngtree—orange cocktail_6240337.png'

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetOneRandomCoctailQuery();

    if (isFetching) return 'Loading...';
    console.log(data)

    return (
        <>
            <Title level={1} className='heading'>
                <p>About project. Responsible drinking</p>
            </Title>
            <div className="homepage-container">
                <div className="homepage-text">
                    <p>Responsible drinking means more than just limiting yourself to a certain number of drinks. It also means not getting drunk and not letting alcohol control your life or your relationships.</p>
                    <p>Many people drink now and then. You may have heard about some health benefits from moderate drinking. Some of these benefits have been proven more than others. But none of them should be used as a reason for drinking.</p>
                </div>
                <div className="homepage-wine">
                    <img src={wineLogo} alt="wine-logo" />
                </div>
            </div>

            <div className="homepage-container cocktail">
                <div className="homepage-text">
                    <p>Alcohol use disorder - responsible drinking; Drinking alcohol responsibly; Drinking in moderation; Alcoholism - responsible drinking</p>
                    <p>All data was provided by <a href="https://www.thecocktaildb.com/">TheCocktailDB</a></p>
                </div>
                <div className="homepage-wine">
                    <img src={cocktailLogo} alt="cocktail-logo" />
                </div>
            </div>

        </>
    )
}

export default Homepage