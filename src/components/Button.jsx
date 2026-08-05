const variants ={
  primary: "hover:bg-amber-400 text-black",
  secondary: "bg-amber-400 hover:bg-amber-600 text-[#1D1D1F]",
};

function handleClick() {
  console.log('Sign in when i Clicked!')
}

const Button = ({ 
  children, 
  variant="primary", 
  type="button", 
  className="", 
  ...rest}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`text-sm px-3 py-2 rounded-lg font-medium  transition-colors ${variants[variant]} ${className}`}
      {...rest}
      >
      {children}
    </button>
  );
};

export default Button