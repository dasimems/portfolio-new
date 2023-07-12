"use client";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = React.forwardRef(
  (
    {
      label,
      className,
      inputClassName,
      labelClassName,
      inputParentClassName,
      type,
      id,
      emptyOptionDisabled,
      selectEnabled,
      options,
      placeholder,
      error,
      rightIcon,
      rightIconAction,
      leftIcon,
      leftIconAction,
      rounded,
      ...props
    },
    ref
  ) => {

    if(!type){

      type = "text"

    }
    const [inputType, setInputType] = useState(type);


    useEffect(()=>{
      setInputType(type)
    }, [type])

    if (!leftIconAction) {
      leftIconAction = () => {};
    }

    if (!rightIconAction) {
      rightIconAction = () => {};
    }

    return (
      <div className={`${type && type.toLowerCase() !== "checkbox"? "w-full" : "w-auto"} relative flex ${type && type.toLowerCase() === "checkbox"? "flex-row items-center" : "flex-col"} ${className ? className : ""}`}>
        {label && 
          <label
            htmlFor={id ? id : ""}
            className={`${type && type.toLowerCase() !== "checkbox"? "order-1" : "order-2"} ${labelClassName ? labelClassName : ""}`}
          >
            {label}
          </label>}

        <div
          className={`${type && type.toLowerCase() !== "checkbox"?"w-full order-2" : "w-auto order-1"} relative h-auto ${label
            ? type && type.toLowerCase()  !== "checkbox"? "mt-2" : "mt-0"
            : ""} ${inputParentClassName ? inputParentClassName : ""}`}
        >
          {(type !== "select" && type !== "textarea") &&
            <input
              ref={ref}
              id={id ? id : ""}
              type={inputType ? inputType : "text"}
              placeholder={placeholder ? placeholder : "Type here"}
              className={`${type && type.toLowerCase() === "checkbox"? "w-auto py-0" :"w-full py-3"}  drop-shadow-none border   px-3 ${rightIcon ||
              type === "password"
                ? "pr-10"
                : "pr-3"} ${leftIcon
                ? "pl-10"
                : "pl-3"} outline-none ${rounded? "rounded-full" : "rounded-md"} shadow-none ${inputClassName
                ? inputClassName
                : ""}`}
              {...props}
            />}

          {type === "select" &&
            <select
              id={id ? id : ""}
              className={`w-full drop-shadow-none border  py-3 px-3 ${rightIcon ||
              type === "password"
                ? "pr-10"
                : "pr-3"} ${leftIcon
                ? "pl-10"
                : "pl-3"} outline-none rounded-md shadow-none ${inputClassName
                ? inputClassName
                : ""}`}
                ref={ref}
              {...props}
            >
              {!emptyOptionDisabled && <option>{placeholder? placeholder :"Select an option"}</option>}

              {options &&
                Array.isArray(options) &&
                options.map(({ label, value }, index) =>
                  <option key={index} value={value}>
                    {label}
                  </option>
                )}
            </select>}

          {type === "textarea" &&
            <textarea
              ref={ref}
              id={id ? id : ""}
              placeholder={placeholder ? placeholder : "Type here"}
              className={`w-full drop-shadow-none border  py-3 px-3 outline-none rounded-md shadow-none ${inputClassName
                ? inputClassName
                : ""}`}
              {...props}
            />}

          {type === "password"?
            <button
              type="button"
              className="absolute right-0 h-full px-4 -translate-y-1/2 top-1/2"
              onClick={() => {
                var newType = "text";

                if (inputType === "text") {
                  newType = "password";
                }

                setInputType(newType);
              }}
            >
              {inputType === "password"
                ? <FaEyeSlash />
                : <FaEye />}
            </button>: <>

            {rightIcon &&
              <button
                type="button"
                onClick={rightIconAction}
                className="absolute right-0 h-full px-4 -translate-y-1/2 top-1/2"
              >
                {rightIcon}
              </button>}

            {leftIcon &&
              <button
                type="button"
                onClick={leftIconAction}
                className="absolute left-0 h-full px-4 -translate-y-1/2 top-1/2"
              >
                {leftIcon}
              </button>}
            
            
            </>}


        </div>

        

        {error &&
          <p className="mt-3 text-xs text-danger">
            {error}
          </p>}
      </div>
    );
  }
);

InputField.displayName = "Input Field";

export default InputField;
