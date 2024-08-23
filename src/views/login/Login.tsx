import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-6xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
          Oxford web aplication
        </h1>
        <div className="flex flex-col justify-center items-center border-2 rounded border-solid border-blue-600 shadow-md w-96 h-96 bg-blue-200">
          <h1 className="text-center text-blue-600 text-5xl mb-5">Login</h1>
          <div>
            <form className="flex flex-col justify-center items-center action=">
              <div className="flex flex-row justify-center items-center gap-x-2 px-4 py-2">
                <div>
                  <svg
                    class="h-6 w-6"
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div></div>
                  <label htmlFor=""></label>
                  <input
                    className="focus:outline-none  focus:ring-2 focus:ring-blue-300 shadow-sm transition duration-300 rounded-lg h-10 p-2"
                    type="email"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-x-2 px-4 py-2">
                <div>
                  <svg
                    class="w-6 h-6"
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input
                    className="focus:outline-none  focus:ring-2 focus:ring-blue-300 shadow-sm transition duration-300 rounded-lg h-10 p-2"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <a href="">
                <h2 className="text-slate-400 hover:text-blue-500 my-3 transition duration-300">
                  Forgot your password
                </h2>
              </a>
              <Link to="/main/oxford">
                <button className="bg-blue-400 px-5 py-1 text-white hover:bg-blue-600 my-3 transition duration-300">
                  Sing In
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
