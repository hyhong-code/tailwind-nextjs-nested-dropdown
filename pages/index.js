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
            <li className="group py-2 px-4 hover:bg-orange-500 transition ease-out duration-300">
              <a href="#">Mega Menu</a>

              {/* Mega Menu */}
              <div className="absolute left-0 w-full top-14 mt-4 invisible opacity-0 group-hover:mt-0 group-hover:visible group-hover:opacity-100 transition-all ease-out duration-300">
                <div className="grid grid-cols-4 gap-4 bg-gray-700 p-8">
                  {/* Column 1 */}
                  <div className="flex flex-col justify-between">
                    <section>
                      <h2 className="text-2xl font-bold mb-4 text-orange-500">
                        Featured 1
                      </h2>
                      <a href="#">
                        <div className="overflow-hidden mb-4 rounded">
                          <img
                            src="https://picsum.photos/400?random=1"
                            alt="Random Image"
                            className="block w-full object-cover transform scale-100 hover:scale-105 transition ease-out duration-300"
                          />
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </a>
                    </section>
                  </div>

                  {/* Column 2 */}
                  <div className="">
                    <section>
                      <h2 className="text-2xl font-bold mb-4 text-orange-500">
                        Featured 2
                      </h2>
                      <ul className="border-l border-gray-600">
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 1</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 2</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 3</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 4</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 5</a>
                        </li>
                      </ul>
                    </section>
                  </div>

                  {/* Column 3 */}
                  <div className="">
                    <section>
                      <h2 className="text-2xl font-bold mb-4 text-orange-500">
                        Featured 3
                      </h2>
                      <ul className="border-l border-gray-600">
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 1</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 2</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 3</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 4</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 5</a>
                        </li>
                      </ul>
                    </section>
                  </div>

                  {/* Column 4 */}
                  <div className="">
                    <section>
                      <h2 className="text-2xl font-bold mb-4 text-orange-500">
                        Featured 4
                      </h2>
                      <ul className="border-l border-gray-600">
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 1</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 2</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 3</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 4</a>
                        </li>
                        <li className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer ">
                          <a href="#">Item 5</a>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </li>

            {/* Blog Dropdown */}
            <li className="group py-2 px-4 hover:bg-orange-500 transition ease-out duration-300">
              <a href="#">Blog</a>

              <div className="absolute left-0 w-full grid grid-cols-3 gap-8 bg-gray-700 p-8 top-14 invisible opacity-0 mt-4 group-hover:mt-0 group-hover:visible group-hover:opacity-100 transition-all ease-out duration-300">
                <article className="">
                  <div className="rounded overflow-hidden mb-4">
                    <img
                      src="https://picsum.photos/400?random=1"
                      alt="Random Image"
                      className="block w-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-orange-500">
                    Title
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum, voluptate ...
                  </p>
                  <a href="#" className="text-sm text-gray-500 hover:underline">
                    Read more.
                  </a>
                </article>
                <article className="">
                  <div className="rounded overflow-hidden mb-4">
                    <img
                      src="https://picsum.photos/401?random=1"
                      alt="Random Image"
                      className="block w-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-orange-500">
                    Title
                  </h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Neque, soluta ...
                  </p>
                  <a href="#" className="text-sm text-gray-500 hover:underline">
                    Read more.
                  </a>
                </article>
                <article className="">
                  <div className="rounded overflow-hidden mb-4">
                    <img
                      src="https://picsum.photos/402?random=1"
                      alt="Random Image"
                      className="block w-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-orange-500">
                    Title
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, dolore ...
                  </p>
                  <a href="#" className="text-sm text-gray-500 hover:underline">
                    Read more.
                  </a>
                </article>
              </div>
            </li>
            <li className="py-2 px-4 hover:bg-orange-500 transition ease-out duration-300">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center">
        <h1 className="uppercase text-3xl font-bold">
          Mega Menu and Multi-Level Dropdown Menu
        </h1>
      </main>
    </div>
  );
}
