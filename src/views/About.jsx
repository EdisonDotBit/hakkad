import Navigation from "../components/Navigation";
import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <section className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <Navigation />
      <div className="container mx-auto ">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-start-3 md:col-span-8">
            <div className="pb-20">
              <h1 className="text-4xl font-bold text-center mb-8">
                About CyberShield
              </h1>
              <p className="text-md text-justify font-light text-gray-700">
                CyberShield is a web platform focused on boosting security
                awareness and training in today's digital world. It's crucial
                for both individuals and organizations to be ready to defend
                against cyber threats. Our platform offers interactive modules
                and personalized learning paths covering various topics like
                phishing, malware, data protection, and safe browsing. Users can
                dive into simulated scenarios to practice real-world skills,
                enhancing critical thinking and decision-making abilities. We
                tailor learning paths to each user's needs and skill levels,
                ensuring targeted training. Real-time feedback, progress
                tracking, and performance analytics help users monitor their
                growth. Plus, our community features foster collaboration and
                support. With CyberShield, users can stay informed, protect
                data, and contribute to a safer digital space.
              </p>
            </div>

            <h2 className="text-center text-gray-700 dark:text-gray-300 text-2xl mb-12">
              What you can expect at CyberShield
            </h2>
            <div className="sm:grid sm:grid-cols-12 sm:gap-x-6 pb-14">
              <div className="flex sm:col-span-2 justify-center items-center">
                <img
                  alt=""
                  className="w-20 h-20"
                  src="./src/assets/knowledge.png"
                />
              </div>

              <div className="sm:col-span-10 text-center sm:text-left space-y-3">
                <h3 className="pt-10 sm:pt-0 text-lg font-semibold">
                  A full roadmap to becoming a cyber expert
                </h3>
                <p className="prose prose-gray dark:prose-invert text-gray-500 dark:text-gray-400 text-justify">
                  Our free, comprehensive curriculum will equip you to be a full
                  cyber expert, no matter your current experience level.
                </p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-12 sm:gap-x-6 pb-14">
              <div className="flex sm:col-span-2 justify-center items-center">
                <img
                  alt=""
                  className="w-20 h-20"
                  src="./src/assets/keyboard.png"
                />
              </div>

              <div className="sm:col-span-10 text-center sm:text-left space-y-3">
                <h3 className="pt-10 sm:pt-0 text-lg font-semibold">
                  Learn by doing
                </h3>
                <p className="prose prose-gray dark:prose-invert text-gray-500 dark:text-gray-400 text-justify">
                  The most effective learning happens while working on real
                  cyber projects, so we strategically include them throughout
                  our curriculum.
                </p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-12 sm:gap-x-6 pb-14">
              <div className="flex sm:col-span-2 justify-center items-center">
                <img alt="" className="w-20 h-20" src="./src/assets/care.png" />
              </div>

              <div className="sm:col-span-10 text-center sm:text-left space-y-3">
                <h3 className="pt-10 sm:pt-0 text-lg font-semibold">
                  Receive support from others
                </h3>
                <p className="prose prose-gray dark:prose-invert text-gray-500 dark:text-gray-400 text-justify">
                  <a href="#team" className="underline text-black">
                    The maintainers of the curriculum
                  </a>{" "}
                  run a Discord community, with the help of countless other
                  volunteers, where you can receive help with anything in our
                  curriculum.
                </p>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-12 sm:gap-x-6 pb-20">
              <div className="flex sm:col-span-2 justify-center items-center">
                <img
                  alt=""
                  className="w-20 h-20"
                  src="./src/assets/partners.png"
                />
              </div>

              <div className="sm:col-span-10 text-center sm:text-left space-y-3">
                <h3 className="pt-10 sm:pt-0 text-lg font-semibold">
                  Open source and community driven
                </h3>
                <p className="prose prose-gray dark:prose-invert text-gray-500 dark:text-gray-400 text-justify">
                  You can deepen your understanding and improve your GitHub
                  skills by contributing to our open source curriculum and
                  helping others in our Discord community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div>
          <h1 className="text-center text-4xl font-bold py-6" id="team">
            Meet the Team
          </h1>
          <p className="pb-4 text-center text-sm sm:text-base mx-auto text-gray-500 dark:text-gray-400">
            CyberShield is run by a group of dedicated students from Rizal
            Technological University.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10 space-y-16">
            <div className="space-y-10" id="core">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pb-2">
                  Frontend Developers
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base text-justify">
                  The Front End Team consists of long-serving members who have
                  made significant contributions to the frontend interface of
                  CyberShield. This team is responsible for shaping and guiding
                  the direction of the platform's user interface and user
                  experience.
                </p>
              </div>

              <ul
                aria-label="frontend team list"
                className="mx-auto mt-10 grid max-w-2xl pb-4 grid-cols-1 gap-6 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5 lg:gap-8"
              >
                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/kenneth.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      John Kenneth Macabitas
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List of John Kenneth Macabitas social links 2 items"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/ignpinch"
                      >
                        <span className="sr-only">
                          John Kenneth Macabitas on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://github.com/CoPinch"
                      >
                        <span className="sr-only">
                          John Kenneth Macabitas on GitHub
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/edison.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Edison P. Lati Jr.
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List of Edison Lati Jr. social links 2 items"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/miragelati"
                      >
                        <span className="sr-only">
                          Edison Lati Jr. on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://github.com/juliedotbit"
                      >
                        <span className="sr-only">
                          Edison Lati Jr. on Github
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-22 w-22 rounded-[8px]"
                    src="./src/assets/paolo.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Paolo Banaglorioso
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List of Paolo Banaglorioso social links 2 items"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/narte08"
                      >
                        <span className="sr-only">
                          Paolo Banaglorioso on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://github.com/chippee08"
                      >
                        <span className="sr-only">
                          Paolo Banaglorioso on Github
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:pt-2 sm:px-6 lg:px-8">
          <div className="mt-10 space-y-16">
            <div className="space-y-10" id="core">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pb-2">
                  Backend Developers
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base text-justify">
                  The Backend Team comprises seasoned members who have made
                  substantial contributions to the backend infrastructure of
                  CyberShield. This team plays a pivotal role in architecting
                  and steering the platform's server-side functionalities and
                  data management.
                </p>
              </div>

              <ul
                aria-label="backend team list"
                className="mx-auto mt-10 grid max-w-2xl pb-4 grid-cols-1 gap-6 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5 lg:gap-8"
              >
                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/ken.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Ken Arnold Sta. Ana
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List of Ken Arnold Sta. Ana social links 2 items"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/Kczarus"
                      >
                        <span className="sr-only">
                          Ken Arnold Sta. Ana on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://github.com/Kczarus"
                      >
                        <span className="sr-only">
                          Ken Arnold Sta. Ana on GitHub
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:pt-2 sm:px-6 lg:px-8">
          <div className="mt-10 space-y-16">
            <div className="space-y-10" id="core">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pb-2">
                  Documentary and Research Team
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base text-justify">
                  The Documentary Team consists of experienced members who have
                  made significant contributions to the documentation and
                  research of CyberShield. This team plays a crucial role in
                  crafting and guiding the platform's documentation, ensuring
                  comprehensive coverage of its features, functionalities, and
                  usage guidelines.
                </p>
              </div>

              <ul
                aria-label="documentary team list"
                className="mx-auto mt-10 grid max-w-2xl pb-10 grid-cols-1 gap-6 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5 lg:gap-8"
              >
                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/adrian.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Adrian Oropesa
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List Alex Adrian Oropesa social link 1 item"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/adriandanmel2"
                      >
                        <span className="sr-only">
                          Adrian Oropesa on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/alex.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Alex Joseph De Vera
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List Alex Joseph De Vera social link 1 item"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/alexjosephhhhh"
                      >
                        <span className="sr-only">
                          Alex Joseph De Vera on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/joseph.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Joseph Pagsaligan
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List Joseph Pagsaligan social link 1 item"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/othep04"
                      >
                        <span className="sr-only">
                          Joseph Pagsaligan Ana on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/kenner.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Kenner Felix
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List Kenner Felix social link 1 item"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/kenner.felix"
                      >
                        <span className="sr-only">
                          Kenner Felix on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/jerica.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Jerica Marie Bermas
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List Jerica Marie Bermas social link 1 item"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/jai.bermas07"
                      >
                        <span className="sr-only">
                          Jerica Marie Bermas on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/cestina.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Justine Eduard Cestina
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List Justine Eduard Cestina  social link 1 item"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/justineeduard"
                      >
                        <span className="sr-only">
                          Justine Eduard Cestina on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/leonnel.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Leonnel Demate Cribe
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List Leonnel Demate Cribe social link 1 item"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/leonnel.cribe"
                      >
                        <span className="sr-only">
                          Leonnel Demate Cribe on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>

                <li className="rounded-2xl bg-white shadow dark:bg-gray-800 pt-6 p-4 flex flex-col">
                  <img
                    alt=""
                    className="mx-auto h-auto w-auto rounded-[8px]"
                    src="./src/assets/leslie.png"
                  />

                  <div className="text-center pb-6">
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      Leslie Bercilla
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Joined 2024 · Philippines
                    </p>
                  </div>

                  <ul
                    aria-label="List Leslie Bercilla  social link 1 item"
                    className="mt-auto flex justify-center gap-x-6"
                  >
                    <li>
                      <a
                        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100"
                        href="https://www.facebook.com/leslie.bercilla07"
                      >
                        <span className="sr-only">
                          Leslie Bercilla on Facebook
                        </span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                          className="h-7 w-7"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                        </svg>
                      </a>{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default About;
