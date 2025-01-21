import './App.css'
import {Route, Routes} from 'react-router-dom'
import MainLayout from './layouts/mainlayout'
import Home from './pages/home'
import Dresses from './pages/dresses'
import Wishlist from './pages/wishlist'
import Details from './pages/details'
import NotFound from './pages/notfound'
import Add from './pages/add'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/dresses' element={<Dresses/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/add' element={<Add/>}/>

        <Route path='*' element={<NotFound/>}/>

      </Route>


    </Routes>
      
    </>
  )
}

export default App
