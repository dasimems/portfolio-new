import { useRouter } from "next/router";

const Button = ({
  type,
  children,
  action,
  link,
  className,
  buttonDescription
}) => {
  const { push } = useRouter();

  let typeClassName = "bg-gray-300";

  switch (type) {
    case "primary":
      typeClassName = "bg-primary text-white";
      break;

    default:
      break;
  }

  return (
    <button
      onClick={() => {
        if (action) {
          action();
        } else if (link) {
          push(link);
        }
      }}
      aria-label={buttonDescription ? buttonDescription : "button"}
      className={`button-hover inline-flex py-2 px-5 rounded-full font-medium ${typeClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
