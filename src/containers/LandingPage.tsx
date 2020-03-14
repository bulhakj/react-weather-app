import React, { useEffect, useState, ChangeEvent } from 'react';
import SearchBar from "../components/LandingPage/SearchBar"
import { Button, Box, Typography } from '@material-ui/core';
import styled from "styled-components"
import axios from "axios"

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
const CustomButton = styled(Button)`
    margin-top: 2rem !important;
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
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                console.log(response)
            })
    }

    return (
        <LandingPageWrapper>
            <SearchBarWrapper component="section">
                <HeaderText variant="h2" gutterBottom>
                    Check forecast for your city
                </HeaderText>
                <SearchBar handleGetInputValue={handleGetInputValue}/>
                <CustomButton variant="contained" onClick={handleFetchData}>Search</CustomButton>
            </SearchBarWrapper>
        </LandingPageWrapper>
    )
}

export default LandingPage
