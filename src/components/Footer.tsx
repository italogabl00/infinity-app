import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center text-sm sticky top-[100vh] w-[100vw] bg-inallblack text-inwhite">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex-grow text-center">
          <p>&copy; 2024 - Infinity School, todos os direitos reservados.</p>
        </div>
        <div className="flex mr-1 space-x-4">
          <a
            href="https://www.instagram.com/infinity.school/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={24}
              className="text-white hover:text-inred transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/infinityschool/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={24}
              className="text-white hover:text-inred transition-colors duration-300"
            />
          </a>
          <a
            href="https://wa.me/71992040134"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              size={24}
              className="text-white hover:text-inred transition-colors duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
