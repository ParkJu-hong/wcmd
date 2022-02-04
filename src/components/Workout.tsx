import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


function Workout() {
    return (
        <div style={{ marginTop: "10vh" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                <SeePicture />
                <InputBox />
                </div>
                <DiaryBox />
            </div>
        </div>
    )
}
const DiaryBox = styled.div`
    border: 1px solid red;
    width: 300px;
    height: 100vh;
    margin-top: 5vh;
    @media screen and (max-width: 780px) {
        border: 1px solid blue;
        width: 250px;
        height: 100vh;
        margin-top: 5vh;
    }
`

const SeePicture = styled.img`
    border: 1px solid red;
    width: 200px;
    height: 200px;
    margin-top: 5vh;
    @media screen and (max-width: 780px) {
        border: 1px solid blue;
        width: 150px;
        height: 150px;
        margin-top: 5vh;
    }
`

const InputBox = styled.form`
    border: 1px solid red;
    width: 300px;
    height: 300px;
    @media screen and (max-width: 780px) {
        border: 1px solid blue;
        width: 250px;
        height: 250px;
    }

`



export default Workout
