import React, { useState } from 'react';
import LessonNav from './LessonNav';
import header2 from '../assets/header3.jpg';
import { FaAngleDown } from "react-icons/fa";

import img1 from "../assets/SystemAna.png";
import img2 from "../assets/SystemEn.png";
import img3 from "../assets/CyberSec.png";

import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";

function Lesson1() {
    const [dropdownStates, setDropdownStates] = useState({
        dropdown1: false,
        dropdown2: false,
        dropdown3: false
    });

    const toggleDropdown = (dropdownName) => {
        setDropdownStates(prevState => ({
            dropdown1: dropdownName === 'dropdown1' ? !prevState.dropdown1 : false,
            dropdown2: dropdownName === 'dropdown2' ? !prevState.dropdown2 : false,
            dropdown3: dropdownName === 'dropdown3' ? !prevState.dropdown3 : false
        }));
    };

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [buttonColor1, setButtonColor1] = useState('gray');
    const [buttonColor2, setButtonColor2] = useState('gray');
    const [buttonColor3, setButtonColor3] = useState('gray');
    const [inputBorderColor1, setInputBorderColor1] = useState('');
    const [inputBorderColor2, setInputBorderColor2] = useState('');
    const [inputBorderColor3, setInputBorderColor3] = useState('');
    const [submitButtonDisabled1, setSubmitButtonDisabled1] = useState(false);
    const [submitButtonDisabled2, setSubmitButtonDisabled2] = useState(false);
    const [submitButtonDisabled3, setSubmitButtonDisabled3] = useState(false);
    const [answerSubmitted1, setAnswerSubmitted1] = useState(false);
    const [answerSubmitted2, setAnswerSubmitted2] = useState(false);
    const [answerSubmitted3, setAnswerSubmitted3] = useState(false);
    const [progress, setProgress] = useState(0);

    const consProgress = 33.333333333333333;

    const correctAnswer1 = 'Analyse';
    const correctAnswer2 = 'Engineers';
    const correctAnswer3 = 'Testing';

    const handleInputChange1 = (event) => {
        const value = event.target.value;
        setInputValue1(value);
        if (value.trim() === '') {
            setButtonColor1('gray');
        } else {
            setButtonColor1('#007bff');
        }
    };

    const handleInputChange2 = (event) => {
        const value = event.target.value;
        setInputValue2(value);
        if (value.trim() === '') {
            setButtonColor2('gray');
        } else {
            setButtonColor2('#007bff');
        }
    };

    const handleInputChange3 = (event) => {
        const value = event.target.value;
        setInputValue3(value);
        if (value.trim() === '') {
            setButtonColor3('gray');
        } else {
            setButtonColor3('#007bff');
        }
    };

    const handleSubmit1 = () => {
        if (inputValue1.trim() === '') {
            return;
        }

        if (inputValue1 === correctAnswer1) {
            setInputBorderColor1('green');
            setButtonColor1('green');
            setSubmitButtonDisabled1(true);
            setAnswerSubmitted1(true);
            setProgress(progress + consProgress);
        } else {
            setInputBorderColor1('red');
            setButtonColor1('red');
        }
    };

    const handleSubmit2 = () => {
        if (inputValue2.trim() === '') {
            return;
        }

        if (inputValue2 === correctAnswer2) {
            setInputBorderColor2('green');
            setButtonColor2('green');
            setSubmitButtonDisabled2(true);
            setAnswerSubmitted2(true);
            setProgress(progress + 33.3);
            setProgress(progress + consProgress);
        } else {
            setInputBorderColor2('red');
            setButtonColor2('red');
        }
    };

    const handleSubmit3 = () => {
        if (inputValue3.trim() === '') {
            return;
        }

        if (inputValue3 === correctAnswer3) {
            setInputBorderColor3('green');
            setButtonColor3('green');
            setSubmitButtonDisabled3(true);
            setAnswerSubmitted3(true);
            setProgress(progress + 33.4);
            setProgress(progress + consProgress);
        } else {
            setInputBorderColor3('red');
            setButtonColor3('red');
        }
    };
    

    return (
        <section>
            <LessonNav />
            <div className='flex justify-center w-full'>
                <div className='h-auto flex flex-col items-center'>
                    <div className='relative bg-white h-auto'>
                        <img src={header2} alt="" className='w-full h-auto margin-auto' />
                        <div className='h-4 bg-[#212C42] flex relative'><div style={{ width: `${progress}%` }} className="absolute left-0 bg-customBlue top-0 transition-all duration-500 ease-in-out h-full"></div>
                            <div style={{ width: `${progress}%` }} className={`absolute left-0 ${progress === 100 ? 'bg-green-500' : 'bg-customBlue'} top-0 transition-all duration-500 ease-in-out h-full`}></div>
                            <span className='absolute top-0 text-white text-[10px] font-medium text-center w-full'>Lesson Progress ({progress}%)</span>
                        </div>
                    </div>


                    <div class='relative w-[1300px] pt-5 border-r border-l'>
                        <div className='w-full h-auto'>

                            {/* Dropdown 1 */}
                            <div className='w-full p-2 px-[85px]'>
                                <div className='relative w-full py-7'>
                                    {/* Dropdown */}
                                    <div className='rounded-md flex items-center absolute top-0 w-full py-4 bg-[#212C42] px-5 text-white'>
                                        <h1 className={`text-${inputBorderColor1}-500`}>Lesson1</h1>
                                        <button className={`bg-${inputBorderColor1}-500 border border-[#424B5E] w-3 h-3 mx-2 rounded-full`}></button>
                                        <p className=''>Security Analyst</p>
                                        <button className='absolute right-5' onClick={() => toggleDropdown('dropdown1')}>
                                            <FaAngleDown className={`transform ${dropdownStates.dropdown1 ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`} />
                                        </button>
                                    </div>
                                </div>
                                {dropdownStates.dropdown1 && (
                                    <div className='w-full flex flex-col items-center justify-center gap-5 py-10 bg-[#E6F0FF] px-10'>
                                        <img src={img1} alt="pic1" className='w-auto h-[50vh]' />
                                        <p class="italic">Responsible for maintaining the security of an organisation's data</p>
                                        <div className="w-full text-left my-2 flex flex-col gap-2">
                                            <p>Security analysts are integral to constructing security measures across organisations to protect the company from attacks. Analysts explore and evaluate company networks to uncover actionable data and recommendations for engineers to develop preventative measures. This job role requires working with various stakeholders to gain an understanding of security requirements and the security landscape.</p>
                                            <h1 className='font-medium text-xl mt-5'>Responsibilities</h1>
                                            <ul className='list-disc ml-10'>
                                                <li>Working with various stakeholders to analyse the cyber security throughout the company</li>
                                                <li>Compile ongoing reports about the safety of networks, documenting security issues and measures taken in response</li>
                                                <li>Develop security plans, incorporating research on new attack tools and trends, and measures needed across teams to maintain data security.</li>
                                            </ul>
                                        </div>

                                        <div className=' flex items-center w-full justify-center mt-6'>
                                            <h1 className='text-green-500 font-medium w-[35vh]'>Answer the questions below</h1>
                                            <div className='w-full h-[2px] mt-[4px] bg-green-500'></div>
                                        </div>
                                        <p className='w-full text-left'>What is the primary responsibility of security analysts in maintaining the security of an organization's data?</p>
                                        <div className='flex w-full'>
                                            <input
                                                type="text"
                                                className={`w-full rounded-xl text-[14px] border-${inputBorderColor1}-500`}
                                                placeholder='Type your answer here'
                                                value={inputValue1}
                                                onChange={handleInputChange1}
                                                readOnly={answerSubmitted1}
                                            />
                                            <input
                                                type="submit"
                                                className='ml-2 py-2 px-16 text-white rounded-xl text-[14px]'
                                                style={{ backgroundColor: buttonColor1 }}
                                                onClick={handleSubmit1}
                                                disabled={submitButtonDisabled1}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>


                            <div className='w-full p-2 px-[85px]'>
                                <div className='relative w-full py-7'>
                                    {/* Dropdown */}
                                    <div className='rounded-md flex items-center absolute top-0 w-full py-4 bg-[#212C42] px-5 text-white'>
                                        <h1 className={`text-${inputBorderColor2}-500`}>Lesson2</h1>
                                        <button className={`bg-${inputBorderColor2}-500 border border-[#424B5E] w-3 h-3 mx-2 rounded-full`}></button>
                                        <p className=''>Security Engineer</p>
                                        <button className='absolute right-5' onClick={() => toggleDropdown('dropdown2')}>
                                            <FaAngleDown className={`transform ${dropdownStates.dropdown2 ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`} />
                                        </button>
                                    </div>
                                </div>
                                {dropdownStates.dropdown2 && (
                                    <div className='w-full flex flex-col items-center justify-center gap-5 py-10 bg-[#E6F0FF] px-10'>
                                        <img src={img2} alt="pic1" className='w-auto h-[50vh]' />
                                        <p class="italic">Design, monitor and maintain security controls, networks, and systems to help prevent cyberattacks</p>
                                        <div className="w-full text-left my-2 flex flex-col gap-2">
                                            <p>Security engineers develop and implement security solutions using threats and vulnerability data - often sourced from members of the security workforce. Security engineers work across circumventing a breadth of attacks, including web application attacks, network threats, and evolving trends and tactics. The ultimate goal is to retain and adopt security measures to mitigate the risk of attack and data loss.</p>
                                            <h1 className='font-medium text-xl mt-5'>Responsibilities</h1>
                                            <ul className='list-disc ml-10'>
                                                <li>Testing and screening security measures across software</li>
                                                <li>Monitor networks and reports to update systems and mitigate vulnerabilities</li>
                                                <li>Identify and implement systems needed for optimal security</li>
                                            </ul>
                                        </div>

                                        <div className=' flex items-center w-full justify-center mt-6'>
                                            <h1 className='text-green-500 font-medium w-[35vh]'>Answer the questions below</h1>
                                            <div className='w-full h-[2px] mt-[4px] bg-green-500'></div>
                                        </div>
                                        <p className='w-full text-left'>What is the overarching responsibility of security engineers in safeguarding against cyberattacks and data loss?</p>
                                        <div className='flex w-full'>
                                            <input
                                                type="text"
                                                className={`w-full rounded-xl text-[14px] border-${inputBorderColor2}-500`}
                                                placeholder='Type your answer here'
                                                value={inputValue2}
                                                onChange={handleInputChange2}
                                                readOnly={answerSubmitted2}
                                            />
                                            <input
                                                type="submit"
                                                className='ml-2 py-2 px-16 text-white rounded-xl text-[14px]'
                                                style={{ backgroundColor: buttonColor2 }}
                                                onClick={handleSubmit2}
                                                disabled={submitButtonDisabled2}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* dropdown3 */}
                            <div className='w-full p-2 px-[85px]'>
                                <div className='relative w-full py-7'>
                                    {/* Dropdown */}
                                    <div className='rounded-md flex items-center absolute top-0 w-full py-4 bg-[#212C42] px-5 text-white'>
                                        <h1 className={`text-${inputBorderColor3}-500`}>Lesson3</h1>
                                        <button className={`bg-${inputBorderColor3}-500 border border-[#424B5E] w-3 h-3 mx-2 rounded-full`}></button>
                                        <p className=''>Penetration Tester</p>
                                        <button className='absolute right-5' onClick={() => toggleDropdown('dropdown3')}>
                                            <FaAngleDown className={`transform ${dropdownStates.dropdown3 ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`} />
                                        </button>
                                    </div>
                                </div>
                                {dropdownStates.dropdown3 && (
                                    <div className='w-full flex flex-col items-center gap-4 py-10 bg-[#E6F0FF] px-10'>
                                        <img src={img3} alt="pic1" className='w-auto h-[50vh]' />
                                        <p class="italic">Responsible for testing technology products for security loopholes</p>
                                        <div className="w-full text-left my-2 flex flex-col gap-2">
                                            <p>You may see penetration testing referred to as pentesting and ethical hacking. A penetration tester's job role is to test the security of the systems and software within a company - this is achieved through attempts to uncover flaws and vulnerabilities through systemised hacking. Penetration testers exploit these vulnerabilities to evaluate the risk in each instance. The company can then take these insights to rectify issues to prevent a real-world cyberattack.</p>
                                            <h1 className='font-medium text-xl mt-5'>Responsibilities</h1>
                                            <ul className='list-disc ml-10'>
                                                <li>Conduct tests on computer systems, networks, and web-based applications</li>
                                                <li>Perform security assessments, audits, and analyse policies</li>
                                                <li>Evaluate and report on insights, recommending actions for attack prevention</li>
                                            </ul>
                                        </div>


                                        <div className='flex items-center w-full justify-center mt-6'>
                                            <h1 className='text-green-500 font-medium w-[35vh]'>Answer the questions below</h1>
                                            <div className='w-full h-[2px] mt-[4px] bg-green-500'></div>
                                        </div>
                                        <p class="w-full text-left my-3">What is the primary responsibility of penetration testers in relation to technology products?</p>
                                        <div className='flex w-full'>
                                            <input
                                                type="text"
                                                className={`w-full border-${inputBorderColor3}-500 rounded-xl text-[14px]`}
                                                placeholder='Type your answer here'
                                                value={inputValue3}
                                                onChange={handleInputChange3}
                                                readOnly={answerSubmitted3}
                                            />
                                            <input
                                                type="submit"
                                                className='ml-2 py-2 px-16 bg-customBlue text-white rounded-xl text-[14px]'
                                                style={{ backgroundColor: buttonColor3 }}
                                                onClick={handleSubmit3}
                                                disabled={submitButtonDisabled3}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className='w-full p-2 px-[85px] mt-10 pb-16'>
                                <div className=' text-custom Blue w-full opacity-50 py-5 rounded-lg flex justify-center items-center'>
                                    <IoIosInformationCircleOutline class="text-2xl mr-2" />
                                    <h1 class="text-[14px] italic">Finish all the lessons to unlock other lessons.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="bg-customBlue w-full flex justify-center">
                <div class="w-full px-[100px] max-w-screen-xl opacity-50 p-4 md:py-8">
                    <div class="flex items-center justify-between">
                        <div className="flex text-white text-2xl gap-[1vh]">
                            <CiFacebook />
                            <CiInstagram />
                            <CiLinkedin />
                        </div>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Quiz</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Leaderboard</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-white sm:text-center">© 2023 <a class="hover:underline">Cyber Shield™</a>. All Rights Reserved.</span>
                </div>
            </footer>

        </section>
    )
}

export default Lesson1;
