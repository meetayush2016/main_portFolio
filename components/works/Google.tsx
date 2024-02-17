import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
import { amazonImg } from "@/public/assets";
import Image from "next/image";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Cloud Practitioner 
        <span className="text-textGreen tracking-wide">@AWS(Amazon)</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jul 2023 - Jul 2026
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I passed my AWS exam and now i am AWS Cloud Practitioner certified
        </li>
        {/* <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
          accusantium animi tenetur rerum, culpa quibusdam! Consectetur
          laboriosam hic harum modi.
        </li> */}
        {/* <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et
          corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt
          sequi?
        </li> */}
        <div className="w-full  h-80 relative group">
          <div className="absolute w-full h-100 -left-15 -top-35 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={amazonImg}
                alt="profileImg"
              />
             
            </div>
          </div>
         
        </div>
      </ul>
    </motion.div>
  );
};

export default Google;
