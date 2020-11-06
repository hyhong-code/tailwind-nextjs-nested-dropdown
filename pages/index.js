import ChevronRight from "../components/CheveronRight";

const NESTED = [
  { name: "Item 1" },
  { name: "Item 2" },
  {
    name: "Item 3",
    sub: [{ name: "Item 3.1" }, { name: "Item 3.2" }, { name: "Item 3.3" }],
  },
  { name: "Item 4" },
];

const MEGA_ITEMS = [
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
  { name: "Item 4" },
  { name: "Item 5" },
];

const MEGA = [
  { title: "Feature 2", items: MEGA_ITEMS },
  { title: "Feature 3", items: MEGA_ITEMS },
  { title: "Feature 4", items: MEGA_ITEMS },
];

const BLOGS = [
  {
    img: "https://picsum.photos/400?random=1",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptate ...",
  },
  {
    img: "https://picsum.photos/401?random=1",
    title: "Title",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, soluta ...",
  },
  {
    img: "https://picsum.photos/402?random=1",
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolore ...",
  },
];

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
                {/* Level 1 dropdown */}
                {NESTED.map((item, idx) => (
                  <li
                    className={`flex justify-start w-full hover:bg-orange-500 p-2 ${
                      item.sub && "group-2 relative"
                    }`}
                    key={idx}
                  >
                    <a
                      href="#"
                      className={`${item.sub && "flex w-full justify-between"}`}
                    >
                      {item.name}{" "}
                      {item.sub && (
                        <ChevronRight className="w-4 inline-block" />
                      )}
                    </a>

                    {/* Level 2 dropdown */}
                    {item.sub && (
                      <ul className="absolute bg-gray-700 left-38 top-0 w-full opacity-0 invisible mt-4 group-2-hover:opacity-100 group-2-hover:mt-0 group-2-hover:visible transition-all ease-out duration-300">
                        {item.sub.map((subItem, idx) => (
                          <li className="p-2 hover:bg-orange-500" key={idx}>
                            <a href="#">{subItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
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

                  {/* Column 2, 3, 4 */}
                  {MEGA.map((section, idx) => (
                    <div key={idx}>
                      <section>
                        <h2 className="text-2xl font-bold mb-4 text-orange-500">
                          {section.title}
                        </h2>
                        <ul className="border-l border-gray-600">
                          {section.items.map((item, idx) => (
                            <li
                              className="flex justify-center py-4 hover:bg-orange-500 cursor-pointer "
                              key={idx}
                            >
                              <a href="#">{item.name}</a>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            {/* Blog Dropdown */}
            <li className="group py-2 px-4 hover:bg-orange-500 transition ease-out duration-300">
              <a href="#">Blog</a>

              <div className="absolute left-0 w-full grid grid-cols-3 gap-8 bg-gray-700 p-8 top-14 invisible opacity-0 mt-4 group-hover:mt-0 group-hover:visible group-hover:opacity-100 transition-all ease-out duration-300">
                {/* Blog 1, 2 ,3 */}
                {BLOGS.map((blog, idx) => (
                  <article key={idx}>
                    <div className="rounded overflow-hidden mb-4">
                      <img
                        src={blog.img}
                        alt="Random Image"
                        className="block w-full object-cover transform scale-100 hover:scale-105 transition ease-out duration-300"
                      />
                    </div>
                    <h2 className="text-2xl font-semibold text-orange-500">
                      {blog.title}
                    </h2>
                    <p>{blog.content}</p>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:underline"
                    >
                      Read more.
                    </a>
                  </article>
                ))}
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
