import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Send from './pages/Send'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
        <Routes>
            <Route path="signup" element={<Signup/>}/>
            <Route path='signin' element={<Signin/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='send' element={<Send/>}/>
        </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  )
}

export default App
