import ChevronRight from "../components/CheveronRight";

export default function Home() {
  return (
    <div className="min-h-screen font-body bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="bg-blue-900 relative z-10 flex items-center justify-between py-2 px-4 max-w-screen-lg mx-auto">
        <a href="#" className="text-4xl">
          LOGO
        </a>

        {/* Navbar Links */}
        <nav>
          <ul className="flex items-center">
            <li className="py-2 px-4 hover:bg-orange-500 transition ease-out duration-300">
              <a href="#">Home</a>
            </li>

            {/* Dropdown Menu */}
            <li className="group relative py-2 px-4 hover:bg-orange-500 transition ease-out duration-300">
              <a href="#">Dropdown Menu</a>

              {/* Dropdown */}
              <ul className="absolute bg-gray-700 left-0 right-0 top-10 mt-4 opacity-0 invisible group-hover:mt-0 group-hover:opacity-100 group-hover:visible transition-all ease-out duration-300">
                <li className="flex justify-start w-full hover:bg-orange-500 p-2">
                  <a href="#">Item 1</a>
                </li>
                <li className="flex justify-start w-full hover:bg-orange-500 p-2">
                  <a href="#">Item 2</a>
                </li>
                <li className="group-2 relative flex justify-start w-full hover:bg-orange-500 p-2">
                  <a href="#" className="flex w-full justify-between">
                    Item 3 <ChevronRight className="w-4 inline-block" />
                  </a>

                  {/* Level two dropdown */}
                  <ul className="absolute bg-gray-700 left-38 top-0 w-full opacity-0 invisible mt-4 group-2-hover:opacity-100 group-2-hover:mt-0 group-2-hover:visible transition-all ease-out duration-300">
                    <li className="p-2 hover:bg-orange-500">
                      <a href="#">Item 3.1</a>
                    </li>
                    <li className="p-2 hover:bg-orange-500">
                      <a href="#">Item 3.2</a>
                    </li>
                    <li className="p-2 hover:bg-orange-500">
                      <a href="#">Item 3.3</a>
                    </li>
                  </ul>
                </li>
                <li className="flex justify-start w-full hover:bg-orange-500 p-2">
                  <a href="#">Item 4</a>
                </li>
              </ul>
            </li>
            <li className="py-2 px-4 hover:bg-orange-500 transition ease-out duration-300">
              <a href="#">Mega Menu</a>
            </li>
            <li className="py-2 px-4 hover:bg-orange-500 transition ease-out duration-300">
              <a href="#">Blog</a>
            </li>
            <li className="py-2 px-4 hover:bg-orange-500 transition ease-out duration-300">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center">
        <h1 className="uppercase text-4xl font-bold">
          Mega Menu and Multi-Level Dropdown Menu
        </h1>
      </main>
    </div>
  );
}
