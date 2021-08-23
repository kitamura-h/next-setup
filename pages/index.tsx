import { Button } from '../components/Button'

const IndexPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="text-gray-600 body-font border-b bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Logo</span>
          </a>
          <nav className="mb-4 md:mb-0 md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Nav</a>
            <a className="mr-5 hover:text-gray-900">Second Nav</a>
            <a className="mr-5 hover:text-gray-900">Third Nav</a>
            <Button label={'コンポーネント'} primary={true} />
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="w-full h-96 rounded border-dashed border-2 border-gray-300"></div>
          </div>
        </section>
      </main>
      <footer className="bg-white text-gray-600 body-font border-t">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="text-xl">Footer</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Next.js/Tailwind/Storybook/ESLint/Prettier/huskyでセットアップされたプロジェクト。
              <br />
              作成日：2021年08月24日
            </p>
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
    </div>
  )
}

export default IndexPage
