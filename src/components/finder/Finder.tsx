import { useRef } from "react";
import styles from "./finder.module.css";
interface IProps {
  onSubmit: (value: string) => void;
}
const Finder = ({ onSubmit }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className={styles.finder}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(inputRef.current?.value.trim()!);
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Find person with same interests"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Finder;
