npm install --save @types/styled-components
npm install --save @types/react,react-dom,react-router-dom 

npm install styled-reset

typescript도 react.js에서 쓰는 것과 동일하게 하되
컴포넌트이름.styles.ts을 만들어서 다음과 같이 사용해라
```js
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 340px;
  height: 420px;
  padding-bottom: 20px;
  background: lightblue;
  border-radius: 1rem;
  box-sizing: border-box;
  img {
    border-radius: 1rem;
    border: 1px solid lightcoral;
    width: 300px;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
`;
```
```js
import { Wrapper } from './컴포넌트이름.styles';
type Props = {
  name: string;
  imgUrl: string;
};
const Card = ({ name, imgUrl }: Props) => (
  <Wrapper>
    <p>{name}</p>
    <img src={imgUrl} alt="character-thumb" />
  </Wrapper>
);

```


npm install --save @types/react @types/react-dom

npm install --save axios