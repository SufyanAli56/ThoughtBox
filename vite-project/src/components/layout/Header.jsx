import Logo from "./Logo";
import { FiLogOut } from "react-icons/fi";

export default function Header({ onLogout, simple = false }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200/60 px-6 sm:px-10 py-4 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Logo className="h-9 w-auto transition-transform duration-300 hover:scale-105" />
      </div>

      {/* Logout Button */}
      {!simple && (
        <button
          onClick={onLogout}
          className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 hover:bg-blue-50 text-gray-700 hover:text-red-600 transition-all duration-300 text-sm font-semibold shadow-sm hover:shadow-md"
        >
          <FiLogOut className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Logout
        </button>
      )}
    </header>
  );
}