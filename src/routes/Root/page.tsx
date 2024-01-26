import s from "./styles.module.scss";
import { Wrapper } from "@/components/Wrapper/wrapper";

function App() {
  

  return (
    <Wrapper>
      <div className={s.text}>{'<- '}Выберите категорию</div>
    </Wrapper>
  );
}

export default App;
