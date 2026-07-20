type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

/**
 * Mark: capas de datos — limpio para chrome claro corporativo.
 */
export default function Logo({
  className = "",
  showWordmark = true,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 shrink-0"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="30" height="30" rx="8" fill="#0A66FF" />
        <rect x="8" y="9" width="16" height="3" rx="1.5" fill="white" opacity="0.45" />
        <rect x="8" y="14.5" width="12" height="3" rx="1.5" fill="white" opacity="0.7" />
        <rect x="8" y="20" width="8" height="3" rx="1.5" fill="white" />
      </svg>

      {showWordmark && (
        <span className="text-[1.1rem] font-semibold tracking-[-0.04em] text-[#1c1e21]">
          busquedas
          <span className="text-[#0A66FF]">.net</span>
        </span>
      )}
    </span>
  );
}
