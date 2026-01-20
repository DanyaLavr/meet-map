import { useRef } from "react";
import styles from "./finder.module.css";
interface IProps {
  onSubmit: (value: string) => void;
}
const Finder = ({ onSubmit }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.finder}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Find person with same interests"
      />
      <button onClick={() => onSubmit(inputRef.current?.value!)}>Search</button>
    </div>
  );
};

export default Finder;
