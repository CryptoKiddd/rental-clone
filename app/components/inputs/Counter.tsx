"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subTitle: string;
  onChange: (value: number) => void;
  value: number;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subTitle,
  onChange,
  value,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [value, onChange]);
  return (
    <div className=" flex flex-row items-center justify-between  ">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-grap-600 ">{subTitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          className="w-10 h-10 rounded-full 
          border-[1px] flex items-center 
          justify-center text-neutral-600 
          cursor-pointer
          hover:opacity-80
          transition
        "
          onClick={onReduce}
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-xl text-neutral-600 text-xl ">{value}</div>
        <div
          className="w-10 h-10 rounded-full 
          border-[1px] flex items-center 
          justify-center text-neutral-600 
          cursor-pointer
          hover:opacity-80
          transition
        "
          onClick={onAdd}
        >
          <AiOutlinePlus />
        </div>

      </div>
    </div>
  );
};

export default Counter;
