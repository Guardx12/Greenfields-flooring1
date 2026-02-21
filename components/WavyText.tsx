function splitWords(input: string) {
  // Splits into words and spaces, preserving spaces tokens.
  return input.split(/(\s+)/).filter(Boolean);
}

function chars(input: string) {
  return Array.from(input);
}

export function WavyText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const tokens = splitWords(text);

  // global index for staggered delay across whole string
  let k = 0;

  const renderToken = (token: string, idx: number, ariaHidden = false) => {
    if (/^\s+$/.test(token)) {
      // preserve spaces, allow wrapping at word boundaries
      return (
        <span key={`sp-${idx}`} aria-hidden={ariaHidden}>
          {" "}
        </span>
      );
    }

    const letters = chars(token);
    return (
      <span key={`w-${idx}`} className="inline-block" aria-hidden={ariaHidden}>
        {letters.map((ch, i) => {
          const delay = k * 90;
          k += 1;
          return (
            <span
              key={`${idx}-${i}`}
              className="wave-letter"
              style={{ ["--delay" as any]: `${delay}ms` }}
            >
              {ch}
            </span>
          );
        })}
      </span>
    );
  };

  // Reset counter for overlay to match delays
  k = 0;

  return (
    <span className={`wave-wrap ${className}`}>
      <span className="wave-base wave-underline">
        {tokens.map((t, i) => renderToken(t, i, false))}
      </span>

      <span className="wave-overlay" aria-hidden>
        {tokens.map((t, i) => renderToken(t, i, true))}
      </span>
    </span>
  );
}
