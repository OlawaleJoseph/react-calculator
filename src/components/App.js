import ButtonPannel from './ButtonPanel';
import Display from './Display';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <div className="App__calculator">
        <Display />
        <ButtonPannel>
          <Button name="AC" />
          <Button name="X²" />
          <Button name="%" />
          <Button name="/" />
          <Button name="9" />
          <Button name="8" />
          <Button name="7" />
          <Button name="*" />
          <Button name="6" />
          <Button name="5" />
          <Button name="4" />
          <Button name="+" />
          <Button name="3" />
          <Button name="2" />
          <Button name="1" />
          <Button name="-" />
          <Button name="0" />
          <Button name="." />
          <Button name="+/-" />
          <Button name="=" />
        </ButtonPannel>
      </div>
    </div>
  );
}

export default App;
