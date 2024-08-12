import  { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
                'flex w-60 h-10 bg-inallblack rounded-md transition-all duration-500 outline outline-2 outline-ingrey',
                className
            )}
        >
            <span className={classNames('flex items-center justify-center h-10 w-36 bg-ingrey font-extrabold rounded-md transition-all duration-500 shadow-lg tracking-wider text-inw text-xl',
                {
                    'ml-24': isSelected,
                }
            )}>
                {isSelected ? 'TECH' : 'CRIAT'}
            </span>
        </div>
    );
};

Switch.propTypes = {
    className: PropTypes.string,
    onToggle: PropTypes.func,
};

export default Switch;
