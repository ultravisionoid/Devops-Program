const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="ml-2 text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              DevOps Job Ready
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 DevOps Job Ready. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
