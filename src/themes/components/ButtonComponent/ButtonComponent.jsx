/**
 * @file ButtonComponent.jsx
 * @description A reusable button component with customizable size, theme, and click behavior.
 * 
 * @component
 * @returns {JSX.Element} A styled button component.
 * 
 * @dependencies
 * - React
 * - CSS Module (Button.module.css)
 */

import styles from './Button.module.css';

/**
 * @function ButtonComponent
 * @description A flexible button component with customizable properties for theme, size, and disabled state.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.content - The text content displayed inside the button.
 * @param {Function} props.onClick - The function to be executed when the button is clicked.
 * @param {string} [props.buttonSize="large"] - The size of the button; options are `"large"` or `"small"`.
 * @param {string} [props.theme="default"] - The theme of the button; options are `"normal"` or `"default"`.
 * @param {boolean} [props.disabled=false] - Determines if the button should be disabled.
 * 
 * @returns {JSX.Element} A styled button element.
 */
const ButtonComponent = ({ content, onClick, buttonSize = "large", theme = "default", disabled = false }) => {
    
    /**
     * @function themeClass
     * @description Determines the CSS class based on the selected theme.
     * @param {string} theme - The theme selected for the button.
     * @returns {string} Corresponding CSS module class for the theme.
     */
    const themeClass = (theme) => {
        switch (theme) {
            case "normal":
                return styles.normal;
            default:
                return styles.default;
        }
    };

    /**
     * @function size
     * @description Determines the CSS class based on the button size.
     * @param {string} buttonSize - The selected size for the button.
     * @returns {string} Corresponding CSS module class for the size.
     */
    const size = (buttonSize) => {
        switch (buttonSize) {
            case "large":
                return styles.large;
            case "small":
                return styles.small;
            default:
                return "";
        }
    };

    return (
        <button className={`${size(buttonSize)} ${themeClass(theme)}`} onClick={onClick} disabled={disabled}>
            {content}
        </button>
    );
};

export default ButtonComponent;
