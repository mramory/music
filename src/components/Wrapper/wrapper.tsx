import { Navbar } from "../Navbar/navbar";
import s from "./wrapper.module.scss";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={s.wrapper}>
      <Navbar />
      <div className={s.content}>{children}</div>
    </main>
  );
};
