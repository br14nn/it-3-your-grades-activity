type TCustomButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
};

export default function CustomButton({
  className,
  type,
  children,
}: TCustomButtonProps) {
  return (
    <button className={`${className} default-button-style`} type={type}>
      {children}
    </button>
  );
}
