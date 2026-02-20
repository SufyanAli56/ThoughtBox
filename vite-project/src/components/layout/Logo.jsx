export default function Logo() {
    return (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 256 256" className="w-10 h-10">
          <defs>
            <linearGradient id="tbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6C63FF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
  
          <rect x="28" y="28" width="200" height="200" rx="48" fill="url(#tbGradient)" />
          <circle cx="128" cy="120" r="50" fill="white" />
          <circle cx="168" cy="170" r="12" fill="white" />
          <circle cx="150" cy="155" r="8" fill="white" />
          <path
            d="M95 120 Q110 100 128 120 T161 120"
            fill="none"
            stroke="#6C63FF"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
  
        <span className="text-xl font-semibold text-gray-800">
          ThoughtBox
        </span>
      </div>
    );
  }