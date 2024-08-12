import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing';
import Header from './components/Header';
// import Dashboard from "./components/Dashboard";
const Dashboard = React.lazy(() => import("./components/Dashboard"))
const Recoil = React.lazy(() => import('./components/Recoil'))
const RecoilV1 = React.lazy(() => import('./components/RecoilV1'))
const RecoilAsync = React.lazy(() => import('./components/RecoilAsync'))
const RecoilTodo = React.lazy(() => import('./components/RecoilTodo'))
const TodoSelector = React.lazy(() => import('./components/RecoilTodoSelector'))


export default function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback={'loading...'}><Dashboard /></Suspense>} />
        <Route path='/' element={<Landing />} />
          <Route path='/recoil' element={<Suspense fallback={'loading...'}><Recoil /></Suspense>} />
          <Route path='/recoilV1' element={<Suspense fallback={'loading...'}><RecoilV1 /></Suspense>} />
          <Route path='/recoilAsync' element={<Suspense fallback={'loading...'}><RecoilAsync /></Suspense>} />
          <Route path='/recoiltodo' element={<Suspense fallback={'loading...'}><RecoilTodo /></Suspense>} />
          <Route path='/recoilTodoselector' element={<Suspense fallback={'loading...'}><TodoSelector /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}