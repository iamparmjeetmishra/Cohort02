import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing';
import Header from './components/Header';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Send from './components/Send';
import { Toaster } from './components/ui/toaster';
const Dashboard = React.lazy(() => import("./components/Dashboard"))
export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={'loading...'}><Dashboard /></Suspense>} />
          <Route path='/' element={<Suspense fallback={'loading...'}><Landing /></Suspense>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/send' element={<Send />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}