type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: TButtonProps) => {
  const baseStyles =
    "px-8 py-3 flex justify-center items-center cursor-pointer hover:scale-105 rounded-xl duration-300";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/85",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
