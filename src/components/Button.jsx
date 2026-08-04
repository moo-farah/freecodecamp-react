const variants ={
  primary: "hover:bg-amber-500 text-black",
  secondary: "bg-amber-500 hover:bg-amber-600 text-[#1D1D1F]",
};

const Button = ({ 
  children, 
  variant="primary", 
  onclick, 
  type="button", 
  className="", 
  ...rest}) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`text-sm px-3 py-2 rounded-lg font-medium  transition-colors ${variants[variant]} ${className}`}
      {...rest}
      >
      {children}
    </button>
  );
};

export default Button