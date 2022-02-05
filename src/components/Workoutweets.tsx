import React from 'react';
import styled from "styled-components";

type Props = {
    workouttweets: any[]
}

function Workoutweets({ workouttweets }: Props) {
    React.useEffect(()=>{
        console.log("workouttweets : ", workouttweets);
    },[])
    return (
        <div>
            {workouttweets.map((el)=>{
                return <div key={el.id}>
                    <Img src={el.imgurl}></Img>
                    <div>{el.text}</div>
                </div>
            })}
        </div>
    )
}

const Img = styled.img`
    width: 100%;
    height: 100%;
` 

export default Workoutweets
