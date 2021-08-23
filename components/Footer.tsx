import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 body-font border-t">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-shrink-0 md:mx-0 mx-auto md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="text-xl">Footer</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">プロジェクト構成</p>
          <p className="mt-2 text-sm text-gray-500">
            Next.js/Tailwind/Storybook/ESLint/Prettier/husky/VScode
          </p>
          <p className="mt-2 text-sm text-gray-500">作成日：2021年08月24日</p>
        </div>
      </div>
      <div className="bg-white border-t">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 Copylight</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            https://github.com/kitamura-h/next-setup
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
