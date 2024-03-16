import * as RadixSwitch from "@radix-ui/react-switch";
import styles from "./Switch.module.css";

export const Switch = () => {
  return (
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label className={styles.Label} htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
          Airplane mode
        </label>
        <RadixSwitch.Root className={styles.SwitchRoot} id="airplane-mode">
          <RadixSwitch.Thumb className={styles.SwitchThumb} />
        </RadixSwitch.Root>
      </div>
    </form>
  );
};
