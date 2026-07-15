const characters = [
  { type: "cloud", className: "cloud-one" },
  { type: "cloud", className: "cloud-two" },
  { type: "cloud", className: "cloud-three" },
  { type: "cloud", className: "cloud-four" },
  { type: "bulb", className: "bulb-one" },
  { type: "bulb", className: "bulb-two" },
  { type: "code", className: "code-one" },
  { type: "code", className: "code-two" },
  { type: "terminal", className: "terminal-one" },
  { type: "terminal", className: "terminal-two" },
];

const AnimatedCharacters = () => {
  return (
    <div className="animated-characters" aria-hidden="true">
      {characters.map((character) => (
        <span
          key={`${character.type}-${character.className}`}
          className={`character ${character.type} ${character.className}`}
        >
          {character.type === "cloud" && (
            <>
              <span className="cloud-puff main" />
              <span className="cloud-puff left" />
              <span className="cloud-puff right" />
              <span className="cloud-puff crown" />
              <span className="cloud-shadow" />
            </>
          )}

          {character.type === "bulb" && (
            <>
              <span className="bulb-glow" />
              <span className="bulb-rays" />
              <span className="bulb-dome" />
              <span className="bulb-base" />
            </>
          )}

          {character.type === "code" && (
            <>
              <span className="code-mark left" />
              <span className="code-slash" />
              <span className="code-mark right" />
            </>
          )}

          {character.type === "terminal" && (
            <>
              <span className="terminal-bar" />
              <span className="terminal-dot dot-one" />
              <span className="terminal-dot dot-two" />
              <span className="terminal-dot dot-three" />
              <span className="terminal-prompt" />
              <span className="terminal-line line-one" />
              <span className="terminal-line line-two" />
            </>
          )}
        </span>
      ))}
    </div>
  );
};

export default AnimatedCharacters;
