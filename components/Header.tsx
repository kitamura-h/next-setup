import React from 'react'
import { Button } from '../components/Button'

const Header = () => {
  return (
    <header className="text-gray-600 body-font border-b bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Logo</span>
        </a>
        <nav className="mb-4 md:mb-0 md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Nav</a>
          <a className="mr-5 hover:text-gray-900">Second Nav</a>
          <a className="mr-5 hover:text-gray-900">Third Nav</a>
          <Button label={'コンポーネント'} primary />
        </nav>
      </div>
    </header>
  )
}

export default Header
