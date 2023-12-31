import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        {/* Ayush. <span className="text-lg font-titleFont tracking-wide text-textGreen">code name</span> */}
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the <span className="text-textGreen mt-2 lgl:mt-4"> Web </span> &
          
        </span>
        {/* <span className="text-textDark mt-2 lgl:mt-4">
          &
        </span> */}
        <span className="text-textDark mt-2 lgl:mt-4">
          
          Break things for <span className="text-yellow-600 mt-2 lgl:mt-4">Cyber</span>
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a web developer and Cyber security enthusiast. I have a
        strong foundation in front-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its and ecosystem.{" "}
        <a href="https://www.linkedin.com/in/ayush-s-abb331128/" target="_blank">
          {" "}
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a href="https://github.com/meetayush2016" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project and give them a star
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
