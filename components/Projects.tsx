import { web3 , saizer , ctf } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://coruscating-griffin-e6defb.netlify.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={saizer}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">AyushSaizer</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
          "Saizer," an open-source article summarizer that efficiently condenses
             lengthy articles into concise and clear  {" "}
              <span className="text-textGreen">summaries.</span>  
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React Js</li>
              <li>TailWind CSS</li>
              <li>Redux</li>
              <li>Rapid API</li>
              
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/meetayush2016/Sumrizer"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              
              <a
                className="hover:text-textGreen duration-300"
                href="https://coruscating-griffin-e6defb.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://incandescent-biscotti-64ae1a.netlify.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={ctf}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">CTF Arena</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            Established a compact virtualized home lab for honing offensive security expertise, comprising 
            an attacker's system and a vulnerable {" "}
              <span className="text-textGreen">web server.</span> 
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Kali Linux</li>
              <li>Nmap</li>
              <li>Virtual Box</li>
              <li>Mr. Robot</li>
              <li>React Js (Blog website)</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/meetayush2016/CTF-Arena"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              
              <a
                className="hover:text-textGreen duration-300"
                href="https://incandescent-biscotti-64ae1a.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/meetayush2016/crowd_funding"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={web3}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Web3 Crowd Funding</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            I developed a cryptocurrency crowdfunding app with a modern and user-friendly interface that is
            connected to the <span className="text-textGreen">MetaMask wallet.</span>  The app allows users to easily create and manage crowdfunding campaigns,
            and to securely contribute to campaigns using their {" "}
              <span className="text-textGreen"> cryptocurrency.</span> 
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React Js</li>
              <li>TailWind CSS</li>
              <li>MetaMask Wallet</li>
              <li>Solidity</li>
              <li>Sepolia Faucet</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/meetayush2016/crowd_funding"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
             
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/meetayush2016/crowd_funding"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
