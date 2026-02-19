export function WavyText({ text }: { text: string }) {
  return (
    <span className="wave-wrap">
      <span className="wave-base wave-underline">{text}</span>
      <span className="wave-overlay" aria-hidden>
        {text}
      </span>
    </span>
  );
}
