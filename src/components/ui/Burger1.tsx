import { useState } from "react";

interface Burg {
  mobile: () => void;
}

export default function Burger({ mobile }: Burg) {
  const [burger, setBurger] = useState(true);
  const menuChange = () => {
    setBurger((prev) => !prev);
    mobile();
  };
  return (
    <div
      className="w-16 h-16 flex justify-center items-center relative cursor-pointer"
      onClick={menuChange}
    >
      <div
        className={`${
          burger ? "w-6 -translate-y-[11.5px]" : "w-[33.75px] -rotate-135"
        } absolute h-[2px] bg-white duration-500 ease-in-out rounded-sm`}
      ></div>
      <div
        className={`absolute h-[2px] w-6 bg-white duration-500 ease-in-out rounded-sm ${
          burger ? "" : "opacity-0 translate-x-[14.25px]"
        } `}
      ></div>
      <div
        className={`${
          burger ? "w-6 translate-y-[11.5px]" : "w-[33.75px] rotate-135"
        } absolute h-[2px] bg-white duration-500 ease-in-out rounded-sm`}
      ></div>
    </div>
  );
}
