import { NavLink } from "react-router-dom";



function Leaderboard() {
  return (
    <>
            {/* Leaderboard */}
            <div className="flex justify-center py-7">
              <div className="w-[950px]">
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      className="h-auto w-[100px]"
                      src="../src/assets/badge1.png"
                      alt=""
                    />
                    <div className="text-[#0F57C1]">
                      <p className="text-2xl font-medium">Justine Lopez (5)</p>
                      <p className="text-sm font-normal">81 points</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-center">
                    <div className="flex flex-col justify-center">
                      <img
                        className="h-[60px] w-[60px]"
                        src="../src/assets/badge5.png"
                        alt="badge 5"
                      />
                      <p className="text-[10px] font-medium text-gray-700 text-center items-center">
                        (900 - 800)
                      </p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <img
                        className="h-[60px] w-[60px]"
                        src="../src/assets/badge4.png"
                        alt="badge 4"
                      />
                      <p className="text-[10px] font-medium text-gray-700 text-center items-center">
                        (700 - 600)
                      </p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <img
                        className="h-[60px] w-[60px]"
                        src="../src/assets/badge3.png"
                        alt="badge 3"
                      />
                      <p className="text-[10px] font-medium text-gray-700 text-center items-center">
                        (500 - 400)
                      </p>
                    </div>
                    <div className="flex flex-col justify-center ">
                      <img
                        className="h-[60px] w-[60px]"
                        src="../src/assets/badge2.png"
                        alt="badge 2"
                      />
                      <p className="text-[10px] font-medium text-gray-700 text-center items-center">
                        (300 - 200)
                      </p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <img
                        className="h-[60px] w-[60px]"
                        src="../src/assets/badge1.png"
                        alt="badge 1"
                      />
                      <p className="text-[10px] font-medium text-gray-700 text-center items-center">
                        (100 - 0)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-between mt-[50px]">
                  <div>
                    <label for="table-search" class="sr-only">
                      Search
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          class="w-5 h-5 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="table-search"
                        class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search User"
                      />
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="h-[400px] w-full mt-[20px] overflow-auto">
                  <table className="text-gray-700 table-fixed w-full p-6 bg-white rounded-lg border-[#e5e7eb] shadow dark:border dark:bg-gray-800 dark:border-[#e5e7eb]">
                    <thead className="text-white bg-[#0F57C1] text-md font-medium sticky top-0">
                      <tr className="border-b-2 border-gray-400 last:border-0">
                        <th className="py-6">Ranking</th>
                        <th className="py-6">Name</th>
                        <th className="py-6">Points</th>
                        <th className="py-6">Badge</th>
                      </tr>
                    </thead>
                    <tbody className="font-normal text-center">
                      <tr className="border-b-2 border-gray-200 last:border-0">
                        <td className="py-4">1</td>
                        <td className="py-4">Alden Rubio</td>
                        <td className="py-4">973</td>
                        <td className="flex justify-center -2">
                          <img
                            src="../src/assets/badge5.png"
                            alt="badge 5"
                            py
                            className="h-auto w-[50px]"
                          />
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200 last:border-0">
                        <td className="py-4">2</td>
                        <td className="py-4">Kevin De Alva</td>
                        <td className="py-4">708</td>
                        <td className="flex justify-center -2">
                          <img
                            src="../src/assets/badge4.png"
                            alt="badge 4"
                            py
                            className="h-auto w-[50px]"
                          />
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200 last:border-0">
                        <td className="py-4">3</td>
                        <td className="py-4">Mark Taz</td>
                        <td className="py-4">500</td>
                        <td className="flex justify-center -2">
                          <img
                            src="../src/assets/badge3.png"
                            alt="badge 3"
                            py
                            className="h-auto w-[50px]"
                          />
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200 last:border-0">
                        <td className="py-4">4</td>
                        <td className="py-4">Alden Kobi</td>
                        <td className="py-4">331</td>
                        <td className="flex justify-center -2">
                          <img
                            src="../src/assets/badge2.png"
                            alt="badge 2"
                            py
                            className="h-auto w-[50px]"
                          />
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200 last:border-0">
                        <td className="py-4">5</td>
                        <td className="py-4">
                          Justine Lopez
                        </td>
                        <td className="py-4">81</td>
                        <td className="flex justify-center -2">
                          <img
                            src="../src/assets/badge1.png"
                            alt="badge 1"
                            py
                            className="h-auto w-[50px]"
                          />
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200 last:border-0">
                        <td className="py-4">6</td>
                        <td className="py-4">
                          Laurence Kropio
                        </td>
                        <td className="py-4">77</td>
                        <td className="flex justify-center -2">
                          <img
                            src="../src/assets/badge1.png"
                            alt="badge 1"
                            py
                            className="h-auto w-[50px]"
                          />
                        </td>
                      </tr>
                      <tr className="border-b-2 border-gray-200 last:border-0">
                        <td className="py-4">7</td>
                        <td className="py-4">
                          James Gildre
                        </td>
                        <td className="py-4">72</td>
                        <td className="flex justify-center -2">
                          <img
                            src="../src/assets/badge1.png"
                            alt="badge 1"
                            py
                            className="h-auto w-[50px]"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
    </>
  );
}

export default Leaderboard;