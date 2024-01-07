
import {useState,useEffect} from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

import { ThemeContextProvider } from './contexts/theme'

function App() {
  
  const[themeMode,setThemeMode] = useState('light') 
  const darktheme = () => setThemeMode('dark')
  const lighttheme = () => setThemeMode('light')

  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeContextProvider value={{themeMode,darktheme,lighttheme}}>
      
    <div className="flex flex-wrap min-h-screen items-center">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            <ThemeBtn/>
                        </div>

                        <div className="w-full max-w-sm mx-auto">
                          <Card/>
                        </div>
                    </div>
                </div>

    </ThemeContextProvider>
  )
}

export default App
