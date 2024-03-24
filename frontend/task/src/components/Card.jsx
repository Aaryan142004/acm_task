import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios'
function Card({ data, reference, cardData, setTaskArray , id }) {
  const [isDone, setIsDone] = useState(false);

  function toggleDone() {
    setIsDone(!isDone);
  }
  function removeTask() {
   
    axios.delete('http://localhost:5000/todos',{
        data:{
          id
        }
      })
      .then((res) => {
        
        setTaskArray(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  // return (
  //   <motion.div
  //     drag
  //     dragConstraints={reference}
  //     whileDrag={{ scale: 1.2 }}
  //     dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }}
  //     className={`relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden ${
  //       isDone ? "line-through" : ""
  //     }`}
  //   >
  //     <FaRegFileAlt />
  //     <p className="text-sm leading-right mt-5 font-semibold">{cardData}</p>
  //     <div className="footer absolute bottom-0 w-full left-0">
  //       <div className="flex items-center justify-between px-8 py-2 mb-3">
  //         <h5>{data?.filesize}</h5>
  //         <span
  //           className="h-6 w-6 bg-zinc-600 rounded-full flex items-center justify-center"
  //           onClick={toggleDone}
  //         >
  //           {data?.close ? (
  //             <IoIosClose onClick={() => removeTask(data)} />
  //           ) : (
  //             <MdOutlineFileDownload fontSize={20} color="white" />
  //           )}
  //         </span>
  //       </div>

  //       {data?.tag?.isopen && (
  //         <div
  //           className={`tag w-full py-4 ${
  //             data?.tag?.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
  //           } flex items-center justify-center`}
  //         >
  //           <h3 className="text-sm  text-white font-semibold">hi</h3>
  //         </div>
  //       )}
  //     </div>
  //   </motion.div>
  // );

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }}
      className={`relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden ${
        isDone ? "line-through" : ""
      }`}
    >
      <p className="text-4xl leading-right mt-20 font-semibold text-center flex justify-center items-center ">{cardData}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-2 mb-3">
          <h5>{data?.filesize}</h5>
         
            <button
              className="h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center text-white"
              onClick={removeTask}
            >
              Delete
            </button>
         
        </div>
        {/* {data?.tag?.isopen && (
          <div
            className={`tag w-full py-4 ${
              data?.tag?.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm text-white font-semibold"></h3>
          </div>
        )} */}
        
      </div>
    </motion.div>
  );



}

export default Card;
