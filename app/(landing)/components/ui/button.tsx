type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "transparent";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: TButtonProps) => {
  const baseStyles =
    "px-8 py-3 flex justify-center items-center cursor-pointer hover:scale-105 rounded-xl duration-300 text-center";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/85",
    transparent: "bg-blue-50 border border-slate-200",
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
