import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Switch = ({ className, onToggle }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    const newValue = !isSelected;
    setIsSelected(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={classNames(
        "flex w-60 h-10 text-inred bg-ingrey bg-opacity-60 rounded-md transition-all duration-500 outline outline-2 outline-ingrey",
        className
      )}
    >
      <span
        className={classNames(
          "flex items-center justify-center h-10 w-full gap-5 bg-ingrey font-extrabold rounded-md transition-all duration-500 shadow-lg tracking-wider text-inw text-xl"
        )}
      >
        <span
          className={classNames(
            "base-class",
            "transition-opacity duration-300",
            {
              "opacity-30": !isSelected,
              "ml-2": !isSelected,
            }
          )}
        >
          TECHS
        </span>
        <span
          className={classNames("base-class", "transition-opacity duration-300", {
            "opacity-30": isSelected,
            "mr-2": isSelected,
           
          })}
        >
          CRIATIVOS
        </span>

        {/* {isSelected ? 'TECHS' : 'CRIATIVOS'} */}
      </span>
    </div>
  );
};

Switch.propTypes = {
  className: PropTypes.string,
  onToggle: PropTypes.func,
};

export default Switch;
