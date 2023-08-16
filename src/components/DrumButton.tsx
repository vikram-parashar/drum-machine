function DrumButton({ but, tone }: any) {
  /* eslint-disable */
  const audio = new Audio(require(`../sounds/${tone}.mp3`));
  /* eslint-enable */
  return (
    <button
      type="button"
      onClick={() => {
        audio.play();
      }}
      className="bg-dawn-rose w-20 h-20 p-1 rounded-lg grid place-items-center relative "
    >
      <span className="absolute top-0 left-1 text-dawn-highlight-med">
        {but}
      </span>
      <span className="font-bold text-dawn-highlight-low">{tone}</span>
    </button>
  );
}
export default DrumButton;
