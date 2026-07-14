const characters = [
  { type: "cloud", className: "cloud-one" },
  { type: "cloud", className: "cloud-two" },
  { type: "cloud", className: "cloud-three" },
  { type: "cloud", className: "cloud-four" },
  { type: "fish", className: "fish-one" },
  { type: "fish", className: "fish-two" },
  { type: "fish", className: "fish-three" },
  { type: "fish", className: "fish-four" },
  { type: "palm", className: "palm-one" },
  { type: "palm", className: "palm-two" },
  { type: "palm", className: "palm-three" },
  { type: "palm", className: "palm-four" },
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

          {character.type === "fish" && (
            <>
              <span className="fish-tail" />
              <span className="fish-fin top" />
              <span className="fish-fin bottom" />
              <span className="fish-body" />
              <span className="fish-gill" />
              <span className="fish-eye" />
            </>
          )}

          {character.type === "palm" && (
            <>
              <span className="coconut coconut-one" />
              <span className="coconut coconut-two" />
              <span className="palm-leaf leaf-one" />
              <span className="palm-leaf leaf-two" />
              <span className="palm-leaf leaf-three" />
              <span className="palm-leaf leaf-four" />
              <span className="palm-leaf leaf-five" />
              <span className="palm-trunk" />
            </>
          )}
        </span>
      ))}
    </div>
  );
};

export default AnimatedCharacters;
