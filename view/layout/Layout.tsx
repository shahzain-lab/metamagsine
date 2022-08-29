import { NextPage } from 'next';
import React, { FC, ReactNode } from 'react'
import NavBar from '../components/core/nav';

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}

export default Layout;