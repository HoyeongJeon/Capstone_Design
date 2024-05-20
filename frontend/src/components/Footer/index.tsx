export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="absolute bottom-0.5 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://github.com/HoyeongJeon/Capstone_Design"
            className="hover:underline"
          >
            전과자들
          </a>
          . All Rights Reserved.
        </span>
        <span className="text-sky-500 sm:text-center dark:text-gray-400">
          저희 AI는 꾸준히 업데이트되어, 최신의 위협을 탐지합니다.
        </span>
      </div>
    </footer>
  );
}
