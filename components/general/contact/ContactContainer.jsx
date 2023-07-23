// import {} from "react-hook-form";

import { contactDetailsList } from "@/utils/general";
import Button from "../Button";
import InputField from "../form/InputField";
import FooterSocials from "../footer/FooterSocials";
import { BiMailSend } from "react-icons/bi";

const ContactContainer = () => {
  //   const {} = useForm();
  return (
    <div className="flex flex-wrap justify-between gap-10">
      <div className="w-full sm:w-[40%] flex flex-col gap-4">
        <h1 className="font-medium">Send me message</h1>

        <form className="flex flex-col gap-2">
          <InputField placeholder="Your Name" />
          <InputField placeholder="Your email" />
          <InputField placeholder="Reason for message" />
          <InputField
            type="textarea"
            placeholder="Message..."
            inputClassName="h-[100px]"
          />
          <Button
            type="primary"
            className="items-center justify-center gap-2 text-center"
          >
            <span>Send</span>
            <span className="text-lg">
              <BiMailSend />
            </span>
          </Button>
        </form>
      </div>

      <div className="relative flex items-center justify-center w-full overflow-hidden sm:w-auto">
        <p className="font-bold after:absolute before:absolute after:bg-slate-700 before:bg-slate-700 after:h-[2px] after:w-full before:h-[2px] before:w-full after:top-1/2 after:-translate-y-1/2 before:bottom-1/2 before:-translate-y-1/2 after:-left-[60%] before:-right-[60%] sm:after:translate-y-[unset] sm:before:translate-y-[unset] sm:after:h-full sm:after:-top-[55%] sm:after:left-1/2 sm:after:-translate-x-1/2 sm:after:w-[2px] sm:before:h-full sm:before:-bottom-[55%] sm:before:left-1/2 sm:before:-translate-x-1/2 sm:before:w-[2px] ">
          OR
        </p>
      </div>

      <div className="w-full sm:w-[40%] flex flex-col gap-10">
        <h1 className="font-medium">Contact Me</h1>

        <ul className="flex flex-col gap-4">
          {contactDetailsList.map(({ link, name, Icon }, index) => (
            <li key={index}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 duration-300 hover:pl-2"
              >
                <span className="text-primary">
                  <Icon set="bold" />
                </span>
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>

        <FooterSocials className="gap-x-4" />
      </div>
    </div>
  );
};

export default ContactContainer;
