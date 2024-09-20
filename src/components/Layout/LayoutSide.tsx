import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import scss from './LayoutSide.module.scss'
import { FC, ReactNode } from 'react'

interface LayoutType {
  children: ReactNode
}

const LayoutSide: FC<LayoutType> = ({children}) => {
  return (
    <div className={scss.LayoutSide}>
      <Header/>
      <main>
       {children}
      </main>
      <Footer/>
    </div>
  )
}

export default LayoutSide