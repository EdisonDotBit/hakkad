import React, { useState } from 'react';
import LessonNav from './LessonNav';
import header1 from '../assets/header1.jpg';
import { FaAngleDown } from "react-icons/fa";
import lessonpic from "../assets/lesson1pic.png";
import lessonpic2 from "../assets/lesson1pic2.png";
import lesson2pic from "../assets/Lesson2pic.png";
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

    const correctAnswer1 = 'Offensive Security';
    const correctAnswer2 = 'Defensive Security';
    const correctAnswer3 = 'Penetration Testing';

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
                        <img src={header1} alt="" className='w-full h-auto margin-auto' />
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
                                        <p className=''>What is Offensive Security?</p>
                                        <button className='absolute right-5' onClick={() => toggleDropdown('dropdown1')}>
                                            <FaAngleDown className={`transform ${dropdownStates.dropdown1 ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`} />
                                        </button>
                                    </div>
                                </div>
                                {dropdownStates.dropdown1 && (
                                    <div className='w-full flex flex-col items-center justify-center gap-5 py-10 bg-[#E6F0FF] px-10'>
                                        <img src={lessonpic2} alt="pic1" className='w-auto h-40' />
                                        <p>In short, offensive security is the process of breaking into computer systems, exploiting software bugs, and finding loopholes in applications to gain unauthorized access to them.</p>
                                        <p>To beat a hacker, you need to behave like a hacker, finding vulnerabilities and recommending patches before a cybercriminal does, as you'll do in this room!</p>
                                        <img src={lessonpic} alt="pic2" className='w-auto h-40' />
                                        <p>On the flip side, there is also defensive security, which is the process of protecting an organization's network and computer systems by analyzing and securing any potential digital threats; learn more in the digital forensics room.</p>
                                        <p>In a defensive cyber role, you could be investigating infected computers or devices to understand how it was hacked, tracking down cybercriminals, or monitoring infrastructure for malicious activity.</p>

                                        <div className=' flex items-center w-full justify-center mt-6'>
                                            <h1 className='text-green-500 font-medium w-[35vh]'>Answer the questions below</h1>
                                            <div className='w-full h-[2px] mt-[4px] bg-green-500'></div>
                                        </div>
                                        <p>Which of the following options better represents the process where you simulate a hacker's actions to find vulnerabilities in a system?</p>
                                        <ul className='flex gap-12 font-medium list-disc'>
                                            <li>Offensive Security</li>
                                            <li>Defensive Security</li>
                                        </ul>
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
                                        <p className=''>Hacking your first machine</p>
                                        <button className='absolute right-5' onClick={() => toggleDropdown('dropdown2')}>
                                            <FaAngleDown className={`transform ${dropdownStates.dropdown2 ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`} />
                                        </button>
                                    </div>
                                </div>
                                {dropdownStates.dropdown2 && (
                                    <div className='w-full flex flex-col items-center justify-center gap-5 py-10 bg-[#E6F0FF] px-10'>
                                        <img src={lesson2pic} alt="pic1" className='w-auto h-40' />
                                        <p>In essence, defensive security involves safeguarding an organization's digital assets by identifying and mitigating potential cyber threats. It encompasses various strategies such as access control, network security, and incident response.</p>
                                        <p>To effectively defend against cyber attacks, it's crucial to understand the tactics and techniques used by malicious actors and to implement proactive security measures.</p>
                                        <img src={lessonpic} alt="pic2" className='w-auto h-40' />
                                        <p>On the other hand, offensive security focuses on simulating hacker attacks to identify vulnerabilities in systems and applications. Professionals in offensive security, often referred to as ethical hackers or penetration testers, assess an organization's security posture by attempting to exploit weaknesses.</p>
                                        <p>While offensive security aims to find vulnerabilities and recommend patches before cybercriminals exploit them, defensive security is concerned with preventing and mitigating cyber threats to protect the organization's assets and data.</p>

                                        <div className='flex items-center w-full justify-center mt-6'>
                                            <h1 className='text-green-500 font-medium w-[35vh]'>Answer the questions below</h1>
                                            <div className='w-full h-[2px] mt-[4px] bg-green-500'></div>
                                        </div>
                                        <p>Which of the following options describes the process of simulating hacker attacks to identify vulnerabilities in systems?</p>
                                        <ul className='flex gap-12 font-medium list-disc'>
                                            <li>Offensive Security</li>
                                            <li>Defensive Security</li>
                                            <li>Penetration Testing</li>
                                            <li>Security Assessment</li>
                                        </ul>
                                        <div className='flex w-full'>
                                            <input
                                                type="text"
                                                className={`w-full border-${inputBorderColor2}-500 rounded-xl text-[14px]`}
                                                placeholder='Type your answer here'
                                                value={inputValue2}
                                                onChange={handleInputChange2}
                                                readOnly={answerSubmitted2}
                                            />
                                            <input
                                                type="submit"
                                                className='ml-2 py-2 px-16 bg-customBlue text-white rounded-xl text-[14px]'
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
                                        <p className=''>Careers in cyber security</p>
                                        <button className='absolute right-5' onClick={() => toggleDropdown('dropdown3')}>
                                            <FaAngleDown className={`transform ${dropdownStates.dropdown3 ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`} />
                                        </button>
                                    </div>
                                </div>
                                {dropdownStates.dropdown3 && (
                                    <div className='w-full flex flex-col  gap-4 py-10 bg-[#E6F0FF] px-10'>
                                        <h1 className='text-2xl text-left'>How can I start Learning?</h1>
                                        <p>People often wonder how others become hackers (security consultants) or defenders (security analysts fighting cybercrime), and the answer is simple. Break it down, learn an area of cyber security you're interested in, and regularly practice using hands-on exercises. Build a habit of learning a little bit each day on TryHackMe, and you'll acquire the knowledge to get your first job in the industry.</p>
                                        <p>Trust us; you can do it! Just take a look at some people who have used TryHackMe to get their first security job:</p>
                                        <ul className='list-disc ml-10 flex-col flex gap-1'>
                                            <li>Paul went from a construction worker to a security engineer. <span className='text-customBlue'>Read more.</span></li>
                                            <li>Kassandra went from a music teacher to a security professional. <span className='text-customBlue'>Read more.</span></li>
                                            <li>Brandon used TryHackMe while at school to get his first job in cyber. <span className='text-customBlue'>Read more.</span></li>
                                        </ul>
                                        <h1 className='text-2xl text-left mt-5'>What careers are there?</h1>
                                        <p>The cyber careers room goes into more depth about the different careers in cyber. However, here is a short description of a few offensive security roles:</p>
                                        <ul className='list-disc ml-10 flex-col flex gap-1'>
                                            <li>Penetration Tester - Responsible for testing technology products for finding exploitable security vulnerabilities.</li>
                                            <li>Red Teamer - Plays the role of an adversary, attacking an organization and providing feedback from an enemy's perspective.</li>
                                            <li>Security Engineer - Design, monitor, and maintain security controls, networks, and systems to help prevent cyberattacks.</li>
                                        </ul>
                                        <div className='flex items-center w-full justify-center mt-6'>
                                            <h1 className='text-green-500 font-medium w-[35vh]'>Answer the questions below</h1>
                                            <div className='w-full h-[2px] mt-[4px] bg-green-500'></div>
                                        </div>
                                        <p>Which of the following options describes the process of simulating hacker attacks to identify vulnerabilities in systems?</p>
                                        <ul className='flex gap-12 font-medium list-disc justify-center my-5'>
                                            <li>Offensive Security</li>
                                            <li>Defensive Security</li>
                                            <li>Penetration Testing</li>
                                            <li>Security Assessment</li>
                                        </ul>
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
