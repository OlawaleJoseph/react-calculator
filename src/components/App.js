import ButtonPannel from './ButtonPanel';
import Display from './Display';
import Button from './Button';

function App() {
  const buttons = [
    'AC', 'X²', '%', '/',
    '9', '8', '7', '*',
    '6', '5', '4', '+',
    '3', '2', '1', '-',
    '0', '.', '+/-', '=',
  ];

  return (
    <>
      <div className="App">
        <div className="App__calculator">
          <Display />
          <ButtonPannel>
            {buttons.map(button => {
              const operators = ['+', '-', '*', '/', '%', 'X²'];
              const isOperator = operators.includes(button);
              const isAcBtn = button === 'AC';
              return <Button key={button} name={button} operator={isOperator} acBtn={isAcBtn} />;
            })}
          </ButtonPannel>
        </div>
      </div>
    </>
  );
}

export default App;
