import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'

const AppRouter = () => {
  const auth = true

  return (
    auth
      ? <Routes>
          {privateRoutes.map(route =>
            <Route key={route.path} path={route.path} element={<route.element />} />
          )}
        </Routes>
      : <Routes>
          {publicRoutes.map(route =>
            <Route key={route.path} path={route.path} element={<route.element />} />
          )}
        </Routes>
  )
}

export default AppRouter
