import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './Routes/Route/Route';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RouterProvider router ={router}></RouterProvider>
    </div>
  )
}

export default App
