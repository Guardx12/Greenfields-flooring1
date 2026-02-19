function splitGraphemes(input: string) {
  // Simple splitter suitable for English headings; keeps spaces.
  return Array.from(input);
}

export function WavyText({ text }: { text: string }) {
  const chars = splitGraphemes(text);

  return (
    <span className="wave-wrap">
      <span className="wave-base wave-underline">
        {chars.map((ch, i) => (
          <span
            key={i}
            className="wave-letter"
            style={{ ["--delay" as any]: `${i * 70}ms` }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>

      <span className="wave-overlay" aria-hidden>
        {chars.map((ch, i) => (
          <span
            key={i}
            className="wave-letter"
            style={{ ["--delay" as any]: `${i * 70}ms` }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
    </span>
  );
}
