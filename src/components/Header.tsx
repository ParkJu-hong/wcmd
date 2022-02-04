import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Header() {
    return (
        <Main>
            <Link 
            to="/"
            style={{ textDecoration: "none"}}
            ><h1 style={{ marginLeft: "2vw", textDecoration: "none", color: 'black'}}>WCMD</h1></Link>
            <Menus>
            <Link 
            to="/workout"
            style={{ textDecoration: "none"}}
            ><div style={{ textDecoration: "none", color: 'black' }}>운동일지</div></Link>
            </Menus>
        </Main>
    )
}

const Menus = styled.div`
    display: flex;
    margin-right: 10vw;
    margin-top: 5vh;
`

const WorkoutDiary = styled.div`
    position: relative;
    
`

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #3d511e;
    background-color: #3d511e;
    color: white;
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
`

export default Header
