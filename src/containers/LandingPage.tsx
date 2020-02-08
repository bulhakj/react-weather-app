import React, { useEffect, useState, ChangeEvent } from 'react';
import SearchBar from "../components/LandingPage/SearchBar"
import { Box, Typography } from '@material-ui/core';
import styled from "styled-components"

const LandingPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const HeaderText = styled(Typography)`
    color: #fff;
`

const SearchBarWrapper = styled(Box)`
    width: 60%;
`

interface IProps {

}

const LandingPage: React.FC<IProps> = (props: IProps) => {

    const [weatherData, setWeatherData] = useState([])
    const [city, setCity] = useState()

    const handleGetInputValue = (e?: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let typedCity = e?.target.value
        setCity(typedCity)
    }

    const handleFetchData = () => {
        console.log("request for data")
    }

    return (
        <LandingPageWrapper>
            <SearchBarWrapper component="section">
                <HeaderText variant="h2" gutterBottom>
                    Check forecast for your city
                </HeaderText>
                <SearchBar handleGetInputValue={handleGetInputValue}/>
                <button onClick={handleFetchData}>search</button>
            </SearchBarWrapper>
        </LandingPageWrapper>
    )
}

export default LandingPage
