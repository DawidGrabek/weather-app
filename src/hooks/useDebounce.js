import { useState } from 'react';

const useDebounce = () => {
  const [typingTimeout, setTypingTimeout] = useState('');

  const debounce = (func, delay = 1000) => {
    clearTimeout(typingTimeout);

    const timeout = setTimeout(() => func(), delay);

    setTypingTimeout(timeout);
  };
  return debounce;
};

export default useDebounce;
