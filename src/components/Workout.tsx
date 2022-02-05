import React, { useEffect, useState } from 'react';
import { dbService, storageService } from "../fbase";
import styled from 'styled-components';
import Workoutweets from './Workoutweets';
import { v4 as uuidv4 } from 'uuid'; 


function Workout() {
    const [workoutTexts, setWorkoutTexts] = useState([]);
    const [text, setText] = useState("");
    const [attachment, setAttachment] = useState("");
    const [noticePicture, setNoticePicture] = useState(false);

    useEffect(() => {
        dbService.collection("workout").onSnapshot((snapshot) => {
            const workoutArray: any = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setWorkoutTexts(workoutArray);
        });

    }, [])

    //e: React.FormEvent<HTMLInputElement>
    // event: React.ChangeEvent<HTMLInputElement>
    const onChange = (event: any): void => {
        const { currentTarget: { value } } = event;
        setText(value);
    }

    const onFileChange = (event:any) =>{
        const { target: {files},} = event;
        const theFile = files[0];
        //fileReaderAPI 
        const reader = new FileReader();
        // npm i stream함
        reader.onloadend = (finishedEvent : any) => {
            // 파일 로딩이 끝날시 호출되는 함수
            const {currentTarget: { result }} = finishedEvent
            setAttachment(result)
        }
        reader.readAsDataURL(theFile);
    }

    const onClearAttachmentClick = () => {
        setAttachment("");
    }
       
    // event: React.FormEvent<HTMLFormElement>
    const onSubmit = async (event: any) => {
        event.preventDefault();
        console.log('event : ', event);
        if(attachment.length === 0){
            setNoticePicture(true);
        }
        const fileRef = storageService.ref().child(`${uuidv4()}`);
        const response = await fileRef.putString(attachment, "data_url");

        const result = await dbService.collection("workout").add({
            text,
            imgurl: attachment
        });
        console.log(result);
        setText("");
        setAttachment("");
        setNoticePicture((prev)=> !prev);
    }

    return (
        <div style={{ marginTop: "10vh" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <SeePicture >
                    {attachment && <div>
                    <img src={attachment} width="150Px" height="150px"></img>
                    <button onClick={onClearAttachmentClick}>clear photo</button>
                    </div>}
                    </SeePicture>
                    <InputBox >
                        <form >
                            <InputText
                                // type="text"
                                value={text}
                                onChange={onChange}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={onFileChange}
                            />
                            <Button 
                            // type="submit"
                            onClick={onSubmit}
                            >제출버튼</Button>
                        </form>
                    </InputBox>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {noticePicture && <div>사진을 첨부해주세요</div>}
                </div>
                <DiaryBox>
                    <Workoutweets workouttweets={workoutTexts} />
                </DiaryBox>
            </div>
        </div>
    )
}
const Button = styled.button`
    position: relative;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    background-color: aliceblue;
    color: #1e6b7b;
}
`

const InputText = styled.textarea`
  width: 90%;
  height: 40vh;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  border: none;
    resize: none;
    @media screen and (max-width: 780px) {
        width: 90%;
        height: 20vh;
        font-size: 15px;
        border: 0;
        border-radius: 15px;
        outline: none;
        padding-left: 10px;
        background-color: rgb(233, 233, 233);
        border: none;
        resize: none;
    }
`
const DiaryBox = styled.div`
    width: 300px;
    height: 100vh;
    margin-top: 5vh;
    text-align: center;
    @media screen and (max-width: 780px) {
        width: 250px;
        height: 100vh;
        margin-top: 5vh;
        text-align: center;
    }
`

const SeePicture = styled.div`
    width: 200px;
    height: 200px;
    margin-top: 5vh;
    @media screen and (max-width: 780px) {
        width: 150px;
        height: 150px;
        margin-top: 5vh;
    }
`

const InputBox = styled.div`
    width: 300px;
    height: 300px;
    @media screen and (max-width: 780px) {
        width: 250px;
        height: 250px;
    }

`



export default Workout
