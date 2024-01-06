import { useEffect, useState } from 'react';
import ButtonsContainer from './ButtonsContainer';
import CounterButton from './CounterButton';

function FancyCounter() {
  const [count, setCount] = useState(0);
  const disable = count < 0 ? true : false;
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === 'ArrowUp') {
        setCount(count + 1);
      } else if (e.code === 'ArrowDown') {
        setCount(count > 0 ? count - 1 : 0);
      } else if (e.code === 'NumpadDecimal' || e.code === 'Delete') {
        setCount(0);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [count]);

  return (
    <div className="card">
      <h1 className="title">Fancy Counter</h1>
      <p className="count">{count}</p>
      <ButtonsContainer>
        <CounterButton setCount={setCount} type="reset" />
        <CounterButton setCount={setCount} type="decrement" disable={disable} />
        <CounterButton setCount={setCount} type="increment" disable={disable} />
      </ButtonsContainer>
    </div>
  );
}

export default FancyCounter;
