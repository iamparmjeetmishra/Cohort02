import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing';
import Header from './components/Header';
// import Dashboard from "./components/Dashboard";
const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Prop = React.lazy(() => import('./components/Prop'))
const Context = React.lazy(() => import('./components/Context'))
const Recoil = React.lazy(() => import('./components/Recoil'))

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback={'loading...'}><Dashboard /></Suspense>} />
        <Route path='/' element={<Landing />} />
          <Route path='/prop' element={<Suspense fallback={'loading...'}><Prop /></Suspense>} />
          <Route path='/context' element={<Suspense fallback={'loading...'}><Context /></Suspense>} />
          <Route path='/recoil' element={<Suspense fallback={'loading...'}><Recoil /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}