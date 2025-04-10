const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://adilsattar1.github.io/mywebsite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.27 0 6.03.68 4.22 1.78 2.42 2.88 1 4.7 1 7.24v9.53c0 2.53 1.42 4.35 3.22 5.45 1.8 1.1 4.05 1.78 7.78 1.78 3.73 0 5.98-.68 7.78-1.78 1.8-1.1 3.22-2.92 3.22-5.45V7.24c0-2.54-1.42-4.36-3.22-5.46C17.98.68 15.73 0 12 0zm0 2.85c2.9 0 4.69.5 5.9 1.24 1.21.74 1.9 1.87 1.9 3.15v9.53c0 1.29-.69 2.41-1.9 3.15-1.21.74-3 1.24-5.9 1.24-2.9 0-4.69-.5-5.9-1.24-1.21-.74-1.9-1.86-1.9-3.15V7.24c0-1.28.69-2.41 1.9-3.15 1.21-.74 3-1.24 5.9-1.24zM12 6a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/adil-s-6508a8223/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Developed with ❤️ by <span className="font-medium text-white">Adil Sahito</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;