import React, { useState } from 'react';
import LessonNav from './LessonNav';
import header2 from '../assets/header2.jpg';
import { FaAngleDown } from "react-icons/fa";

import pic1 from "../assets/defensive1.png";
import pic2 from "../assets/defensive2.png"
import pic3 from "../assets/defensive3.png"
import pic4 from "../assets/defensive4.png"
import pic5 from "../assets/defensive5.png"
import pic6 from "../assets/defensive6.png"

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

    const correctAnswer1 = 'Blue team';
    const correctAnswer2 = 'Security Operations Center';
    const correctAnswer3 = 'Aggregation';

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
                                        <p className=''>Introduction to Defensive Security</p>
                                        <button className='absolute right-5' onClick={() => toggleDropdown('dropdown1')}>
                                            <FaAngleDown className={`transform ${dropdownStates.dropdown1 ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`} />
                                        </button>
                                    </div>
                                </div>
                                {dropdownStates.dropdown1 && (
                                    <div className='w-full flex flex-col items-center justify-center gap-5 py-10 bg-[#E6F0FF] px-10'>
                                        <p>Offensive security focuses on one thing: breaking into systems. Breaking into systems might be achieved through exploiting bugs, abusing insecure setups, and taking advantage of unenforced access control policies, among other things. Red teams and penetration testers specialize in offensive security.</p>
                                        <p className=' w-full text-left'>Defensive security is somewhat the opposite of offensive security, as it is concerned with two main tasks:</p>
                                        <ul className="list-disc w-full text-left ml-20">
                                            <li>Preventing intrusions from occurring</li>
                                            <li>Detecting intrusions when they occur and responding properly</li>
                                        </ul>

                                        <p className='w-full text-left'>Blue teams are part of the defensive security landscape.</p>
                                        <img src={pic1} alt="pic1" className='w-auto h-[30vh] my-5' />
                                        
                                        <p className='w-full text-left'>Some of the tasks that are related to defensive security include:</p>
                                        <ul className='w-full text-left ml-20 list-disc'>
                                            <li>User cyber security awareness: Training users about cyber security helps protect against various attacks that target their systems.</li>
                                            <li>Documenting and managing assets: We need to know the types of systems and devices that we have to manage and protect properly.</li>
                                            <li>Updating and patching systems: Ensuring that computers, servers, and network devices are correctly updated and patched against any known vulnerability (weakness).</li>
                                            <li>Setting up preventative security devices: firewall and intrusion prevention systems (IPS) are critical components of preventative security. Firewalls control what network traffic can go inside and what can leave the system or network. IPS blocks any network traffic that matches present rules and attack signatures.</li>
                                            <li>Setting up logging and monitoring devices: Without proper logging and monitoring of the network, it won’t be possible to detect malicious activities and intrusions. If a new unauthorized device appears on our network, we should be able to know.</li>
                                        </ul>

                                        <p className='w-full text-left'>There is much more to defensive security, and the list above only covers a few common topics.</p>

                                        <ul className="w-full text-left list-disc ml-20">
                                            <li>Security Operations Center (SOC)</li>
                                            <li>Threat Intelligence</li>
                                            <li>Digital Forensics and Incident Response (DFIR)</li>
                                            <li>Malware Analysis</li>
                                            <li>Blue team</li>
                                        </ul>

                                        <div className=' flex items-center w-full justify-center mt-6'>
                                            <h1 className='text-green-500 font-medium w-[35vh]'>Answer the questions below</h1>
                                            <div className='w-full h-[2px] mt-[4px] bg-green-500'></div>
                                        </div>
                                        <p className='w-full text-left'>Which team focuses on Defensive Security</p>
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
                                        <p className=''>Areas of Defensive Security</p>
                                        <button className='absolute right-5' onClick={() => toggleDropdown('dropdown2')}>
                                            <FaAngleDown className={`transform ${dropdownStates.dropdown2 ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`} />
                                        </button>
                                    </div>
                                </div>
                                {dropdownStates.dropdown2 && (
                                    <div className='w-full flex flex-col items-center justify-center gap-5 py-10 bg-[#E6F0FF] px-10'>
                                        <p className='w-full text-left'>In this task, we will cover two main topics related to defensive security:</p>
                                        <ul className='list-disc w-full text-left ml-20'>
                                            <li>Security Operations Center (SOC), where we cover Threat Intelligence.</li>
                                            <li>Digital Forensics and Incident Response (DFIR), where we also cover Malware Analysis.</li>
                                        </ul>
                                        <div className='w-full text-left flex flex-col gap-3'>
                                            <h1 className='font-medium text-xl'>Security Operations Center (SOC)</h1>
                                            <p>A Security Operations Center (SOC) is a team of cyber security professionals that monitors the network and its systems to detect malicious cyber security events. Some of the main areas of interest for a SOC are:</p>
                                            <ul className='list-disc ml-10 flex-col flex gap-2'>
                                                <li>Vulnerabilities: Whenever a system vulnerability (weakness) is discovered, it is essential to fix it by installing a proper update or patch. When a fix is not available, the necessary measures should be taken to prevent an attacker from exploiting it. Although remediating vulnerabilities is of vital interest to a SOC, it is not necessarily assigned to them.</li>
                                                <li>Policy violations: We can think of a security policy as a set of rules required for the protection of the network and systems. For example, it might be a policy violation if users start uploading confidential company data to an online storage service.</li>
                                                <li>Unauthorized activity: Consider the case where a user’s login name and password are stolen, and the attacker uses them to log into the network. A SOC needs to detect such an event and block it as soon as possible before further damage is done.</li>
                                                <li>Network intrusions: No matter how good your security is, there is always a chance for an intrusion. An intrusion can occur when a user clicks on a malicious link or when an attacker exploits a public server. Either way, when an intrusion occurs, we must detect it as soon as possible to prevent further damage.</li>
                                            </ul>
                                            <p>Security operations cover various tasks to ensure protection; one such task is threat intelligence.</p>
                                        </div>
                                        <img src={pic2} alt="pic1" className='w-auto h-[40vh] my-5' />
                                        <div className='w-full text-left flex flex-col gap-3'>
                                            <h1 className='font-medium text-xl'>Threat Intelligence</h1>
                                            <p>In this context, intelligence refers to information you gather about actual and potential enemies. A threat is any action that can disrupt or adversely affect a system. Threat intelligence aims to gather information to help the company better prepare against potential adversaries. The purpose would be to achieve a threat-informed defense. Different companies have different adversaries. Some adversaries might seek to steal customer data from a mobile operator; however, other adversaries are interested in halting the production in a petroleum refinery. Example adversaries include a nation-state cyber army working for political reasons and a ransomware group acting for financial purposes. Based on the company (target), we can expect adversaries.</p>
                                        </div>
                                        <img src={pic3} alt="pic1" className='w-auto h-[40vh] my-5' />
                                        <div className='w-full text-left flex flex-col gap-3'>
                                            <p>Intelligence needs data. Data has to be collected, processed, and analyzed. Data collection is done from local sources such as network logs and public sources such as forums. Processing of data aims to arrange them into a format suitable for analysis. The analysis phase seeks to find more information about the attackers and their motives; moreover, it aims to create a list of recommendations and actionable steps.</p>
                                            <p>Learning about your adversaries allows you to know their tactics, techniques, and procedures. As a result of threat intelligence, we identify the threat actor (adversary), predict their activity, and consequently, we will be able to mitigate their attacks and prepare a response strategy.</p>
                                        </div>
                                        <div className='w-full text-left flex flex-col gap-3 mt-2'>
                                            <h1 className='font-medium text-xl'>Digital Forensics and Incident Response (DFIR)</h1>
                                            <p>This section is about Digital Forensics and Incident Response (DFIR), and we will cover:</p>
                                            <ul className="list-disc ml-10 flex flex-col gap-2">
                                                <li>Digital Forensics</li>
                                                <li>Incident Response</li>
                                                <li>Malware Analysis</li>
                                            </ul>
                                            <h1 className='font-medium text-xl'>Digital Forensics</h1>
                                            <p>Forensics is the application of science to investigate crimes and establish facts. With the use and spread of digital systems, such as computers and smartphones, a new branch of forensics was born to investigate related crimes: computer forensics, which later evolved into, digital forensics.</p>
                                            <p>In defensive security, the focus of digital forensics shifts to analyzing evidence of an attack and its perpetrators and other areas such as intellectual property theft, cyber espionage, and possession of unauthorized content. Consequently, digital forensics will focus on different areas such as:</p>
                                            <ul className="list-disc ml-10 flex flex-col gap-2">
                                                <li>File System: Analyzing a digital forensics image (low-level copy) of a system’s storage reveals much information, such as installed programs, created files, partially overwritten files, and deleted files.</li>
                                                <li>System memory: If the attacker is running their malicious program in memory without saving it to the disk, taking a forensic image (low-level copy) of the system memory is the best way to analyze its contents and learn about the attack.</li>
                                                <li>System logs: Each client and server computer maintains different log files about what is happening. Log files provide plenty of information about what happened on a system. Some traces will be left even if the attacker tries to clear their traces.</li>
                                                <li>Network logs: Logs of the network packets that have traversed a network would help answer more questions about whether an attack is occurring and what it entails.</li>
                                            </ul>
                                            <h1 className='font-medium text-xl'>Incident Response</h1>
                                            <p>An incident usually refers to a data breach or cyber attack; however, in some cases, it can be something less critical, such as a misconfiguration, an intrusion attempt, or a policy violation. Examples of a cyber attack include an attacker making our network or systems inaccessible, defacing (changing) the public website, and data breach (stealing company data). How would you respond to a cyber attack? Incident response specifies the methodology that should be followed to handle such a case. The aim is to reduce damage and recover in the shortest time possible. Ideally, you would develop a plan ready for incident response.</p>
                                        </div>
                                        <img src={pic4} alt="pic1" className='w-auto h-[40vh] my-5' />

                                        <div className='w-full text-left flex flex-col gap-3 mt-2'>
                                            <h1 className='font-medium text-xl'>Malware Analysis</h1>
                                            <p>Malware stands for malicious software. Software refers to programs, documents, and files that you can save on a disk or send over the network. Malware includes many types, such as:</p>
                                            <ul className="ml-10 list-disc flex flex-col gap-2">
                                                <li>Virus is a piece of code (part of a program) that attaches itself to a program. It is designed to spread from one computer to another; moreover, it works by altering, overwriting, and deleting files once it infects a computer. The result ranges from the computer becoming slow to unusable.</li>
                                                <li>Trojan Horse is a program that shows one desirable function but hides a malicious function underneath. For example, a victim might download a video player from a shady website that gives the attacker complete control over their system.</li>
                                                <li>Ransomware is a malicious program that encrypts the user’s files. Encryption makes the files unreadable without knowing the encryption password. The attacker offers the user the encryption password if the user is willing to pay a “ransom.”</li>
                                            </ul>
                                        </div>

                                        <img src={pic5} alt="pic1" className='w-auto h-[40vh] my-5' />

                                        <div className='flex items-center w-full justify-center mt-6'>
                                            <h1 className='text-green-500 font-medium w-[35vh]'>Answer the questions below</h1>
                                            <div className='w-full h-[2px] mt-[4px] bg-green-500'></div>
                                        </div>
                                        <p className='w-full text-left'>What would you call a team of cyber security professionals that monitors a network and its systems for malicious events?</p>
                                        <p className='w-full text-left text-gray-400 italic'>HINT: (SOC)</p>
                                        
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
                                        <p className=''>    Practical Example of Defensive Security</p>
                                        <button className='absolute right-5' onClick={() => toggleDropdown('dropdown3')}>
                                            <FaAngleDown className={`transform ${dropdownStates.dropdown3 ? 'rotate-[0deg]' : 'rotate-[-90deg]'}`} />
                                        </button>
                                    </div>
                                </div>
                                {dropdownStates.dropdown3 && (
                                    <div className='w-full flex flex-col items-center gap-4 py-10 bg-[#E6F0FF] px-10'>
                                        <p className='w-full text-left'>What would be a typical task that you will be doing as a security analyst? Click on “View Site” to follow along until you get the flag. (If this is your first time obtaining flags, a flag can be seen as a string of text you receive once you accomplish a task. An example flag is <span className='bg-[#212C42] text-white px-2 p-[2px] rounded-md font-bold'>FLAG[WORDS_AND_MORE]</span>.)</p>
                                        <img src={pic6} alt="pic1" className='w-[100vh] h-auto my-5' />
                                        <div className='w-full text-left flex flex-col gap-5 my-2'>
                                            <p>You are part of a Security Operations Center (SOC) responsible for protecting a bank. This bank’s SOC uses a Security Information and Event Management (SIEM) system. A SIEM gathers security-related information and events from various sources and presents them via one system. For instance, you would be notified if there is a failed login attempt or a login attempt from an unexpected geographic location. Moreover, with the advent of machine learning, a SIEM might detect unusual behavior, such as a user logging in at 3 AM when he usually logs in only during work hours.</p>
                                            <p>In this exercise, we will interact with a SIEM to monitor the different events on our network and systems in real-time. Some of the events are typical and harmless; others might require further intervention from us. Find the event flagged in red, take note of it, and click on it for further inspection</p>
                                            <p>Next, we want to learn more about the suspicious activity or event. The suspicious event might have been triggered by an event, such as a local user, a local computer, or a remote IP address. To send and receive postal mail, you need a physical address; similarly, you need an IP address to send and receive data over the Internet. An IP address is a logical address that allows you to communicate over the Internet. We inspect the cause of the trigger to confirm whether the event is indeed malicious. If it is malicious, we need to take due action, such as reporting to someone else in the SOC and blocking the IP address.</p>
                                        </div>

                                        <div className='flex items-center w-full justify-center mt-6'>
                                            <h1 className='text-green-500 font-medium w-[35vh]'>Answer the questions below</h1>
                                            <div className='w-full h-[2px] mt-[4px] bg-green-500'></div>
                                        </div>
                                        <p>What role does a Security Information and Event Management (SIEM) system play in a Security Operations Center (SOC), and how does it contribute to the overall security posture of an organization?</p>
                                        <p className='w-full text-left text-gray-400 italic'>HINT: Role: ?</p>
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
