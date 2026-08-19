import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-12 text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex gap-6 mb-8 md:hidden">
          <a href="#" className="hover:text-white transition-colors p-2">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors p-2">
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-lg font-medium mb-2 text-gray-400 transition-colors cursor-default">
          Designed & Built by Mwansa Kunda
        </p>
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
