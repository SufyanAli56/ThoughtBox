import Logo from "./Logo";

export default function Header({ onLogout, simple }) {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
      <Logo />
      {!simple && (
        <button
          onClick={onLogout}
          className="text-sm text-gray-500 hover:text-red-500"
        >
          Logout
        </button>
      )}
    </header>
  );
}