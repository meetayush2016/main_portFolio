import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/AWS";
import Apple from "./works/Apple";
import Google from "./works/Google";


const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleApple = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleSplash = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="My certifications and Experience" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            AWS
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            CISCO
          </li>
         
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            SmartBridge
          </li>
        </ul>
        
        {workGoogle && <Google />}
        {workApple && <Apple />}
       
        {workAmazon && <Amazon />}
      </div>
    </section>
  );
};

export default Experience;
