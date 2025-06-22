import { useContext } from 'react'
import './App.css'
import { ContextData } from './Context/ContectProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './FormHandeling/FormDashBoard'
import Fetch from './FletchData/Fletch'

function App() {

  const { data, setdata } = useContext(ContextData)
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/form' element ={<Form/>} />
        <Route path='/fetch' element={<Fetch/>}/>
      </Routes>
      </BrowserRouter>
      <h1>Context: {data}</h1>
      <button onClick={() => { setdata(data + 1) }}>Add</button>
      <button onClick={() => { setdata(data - 1) }}>Decrease</button>
    </>
  );
}

export default App;
