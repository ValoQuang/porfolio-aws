import { LOFI_AMBIENT } from "../../../../../types";
import { useLofiStore } from "../../../../../store/lofiStore";

interface SliderProp {
  config: {
    label: LOFI_AMBIENT;
    volume: number;
    src: string;
  };
}

const LofiVolumeSlider = (props: SliderProp) => {
  const [setVolume] = useLofiStore((state) => [state.setVolume]);

  const ambientVolumeHandler = (name: LOFI_AMBIENT, value: string) => {
    const convertedVolume = parseFloat(value);
    setVolume(name, convertedVolume);
  };

  return (
    <div className="flex justify-between w-full">
      <label htmlFor={props.config.label}>{props.config.label.toUpperCase()}</label>
      <input
        id={props.config.label}
        type="range"
        min={0}
        max="100"
        value={props.config.volume}
        onChange={(value) =>
          ambientVolumeHandler(props.config.label, value.target.value)
        }
        className="accent-orange-500 w-40 appearance-none h-4 rounded-full bg-[#42424e]"
      />
    </div>
  );
};

export default LofiVolumeSlider;
