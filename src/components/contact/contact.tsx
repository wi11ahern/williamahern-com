import Card from "../ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  return (
    <Card
      className="flex items-center flex-col min-w-[600px] max-w-[600px] mx-auto mb-40"
      id="contact"
    >
      <h2 className="text-xl font-bold underline underline-offset-4 pb-4 text-yellow-500">
        03. Contact
      </h2>
      <p className="max-w-[50%] text-center">
        Have a question? Just want to say hi? No problem! My inbox is always
        open.
      </p>
      <a
        className="mx-auto mt-4"
        href="mailto:williamahern.com@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="w-[50px] h-[50px] text-blue-400 hover:text-emerald-500 hover:animate-wiggle"
        />
      </a>
    </Card>
  );
};

export default Contact;
