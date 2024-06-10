import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton/MyButton'
import MyLabel from './components/MyLabel/myLabel.tsx'
import MyText from './components/MyText/myText.tsx'
import MyImage from './components/MyImage/MyImage.tsx'
import MyHeroImage from './components/MyHeroImage/MyHeroImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <MyButton label='Test Button'></MyButton>
      <br></br>
      <MyLabel text='Test Label'></MyLabel>
      <br></br>
      <MyText text='Test Text'></MyText>
      <br></br>
      <MyImage src='#'></MyImage>
      <br></br>
      <MyHeroImage src='#'></MyHeroImage>
    </>
  )
}

export default App
