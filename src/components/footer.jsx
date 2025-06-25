import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-6 px-4 flex flex-col items-center text-center mt-10">
      <div className="flex flex-row items-center space-x-4 mb-2">
        {/* Email */}
        <a href="mailto:ldnam@selab.hcmus.edu.vn" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          <span className="text-sm">ldnam@selab.hcmus.edu.vn</span>
        </a>
      </div>
      <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Duy-Nam Ly. All rights reserved.</div>
    </footer>
  );
};

export default Footer;