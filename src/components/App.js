import ButtonPannel from './ButtonPanel';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <div className="App__calculator">
        <div />
        <ButtonPannel>
          <Button num="AC" />
          <Button num="X²" />
          <Button num="%" />
          <Button num="/" />
          <Button num="9" />
          <Button num="8" />
          <Button num="7" />
          <Button num="*" />
          <Button num="6" />
          <Button num="5" />
          <Button num="4" />
          <Button num="+" />
          <Button num="3" />
          <Button num="2" />
          <Button num="1" />
          <Button num="-" />
          <Button num="0" />
          <Button num="." />
          <Button num="+/-" />
          <Button num="=" />
        </ButtonPannel>
      </div>
    </div>
  );
}

export default App;
