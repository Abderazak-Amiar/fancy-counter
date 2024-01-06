function CounterButton({ setCount, type, disable }) {
  const handleButtonType = () => {
    switch (type) {
      case 'reset':
        return 'Reset';
      case 'increment':
        return '+';
      case 'decrement':
        return '-';
      default:
        break;
    }
  };
  const handleClick = () => {
    type === 'reset' && setCount(0);
    type === 'increment' && setCount((prev) => prev + 1);
    type === 'decrement' && setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <button
      className="count-btn count-btn-icon buttons"
      disabled={disable}
      onClick={handleClick}
    >
      {handleButtonType()}
    </button>
  );
}

export default CounterButton;
