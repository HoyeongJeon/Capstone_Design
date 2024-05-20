export default function Header() {
  return (
    <header className="bg-white rounded-lg m-4 dark:bg-gray-800">
      <ul className="flex justify-between">
        <li className="mr-3">
          <div className="inline-block border border-gray-300 rounded py-2 px-4 hover:bg-gray-300 hover:text-white text-black mr-3">
            소개
          </div>
          <div className="inline-block border border-gray-300 rounded py-2 px-4 hover:bg-gray-300 hover:text-white text-black">
            이용안내
          </div>
        </li>
        <li className="mr-3"></li>
        <li className="mr-3">
          <a
            className="inline-block py-2 px-4 text-gray-400 cursor-not-allowed"
            href="#"
          >
            Login
          </a>
        </li>
      </ul>
    </header>
  );
}
