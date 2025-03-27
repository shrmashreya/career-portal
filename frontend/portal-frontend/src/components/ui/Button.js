import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Button = ({label,onClick,icon:Icon = ArrowRightIcon ,variant='primary',type='button'}) => {
    const baseStyle = "inline-flex items-center justify-center gap-2 px-4 py-2 mx-2 w-32 text-base rounded-full font-medium transition duration-300";
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-teal-400 text-white hover:bg-teal-500",
        danger: "bg-red-500 text-white hover:bg-red-600",
    }
    const buttonStyle = `${baseStyle} ${variants[variant]}`;
    return(
        <button
        type = {type}
        className={buttonStyle}
        onClick={onClick}
        >
        <Icon className="w-5 h-5" /> {label}
            
        </button>
    );
};

export default Button;
