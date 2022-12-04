import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import InfoMatch from './InfoMatch'
import Login from './Login'
import Matchs from './Matchs'
import Registro from './Registro'
import Standing from './Standing'
import Teams from './Teams'

const AppRouter = () => {
  return (
    <>
       <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route path='/register' element={<Registro/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/teams' element={<Teams/>}/>
            <Route path='/matchs' element={<Matchs/>}/>
            <Route path='/standing' element={<Standing/>}/>
            <Route path='/infomatch/:id' element={<InfoMatch/>}/>
        </Routes>
       </BrowserRouter>

    </>
  )
}

export default AppRouter


{/* <div>  
<h1>Cambalaches</h1>
<BrowserRouter>
<Routes>
<Route exact path='/login' element={<Login/>}/>
<Route path='/home/:userid' element={
<AuthProvider>
<Home/>
</AuthProvider>
}/>
<Route path='/cart/:userid' element={
<AuthProvider>
<Cart/>
</AuthProvider>
}/>

<Route path='*' element={<h1>Not Found</h1>}/>
</Routes>
</BrowserRouter>
</div> */}