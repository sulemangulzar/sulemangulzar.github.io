export default function Footer() {
  return (
    <footer className="relative py-8 px-4 bg-gray-900 text-gray-400 text-center z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm">© 2025 Portfolio SG. All rights reserved.</div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}