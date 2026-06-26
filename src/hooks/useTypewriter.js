import { useEffect, useState } from 'react';

export function useTypewriter(words, speed = 85, pause = 1200) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const doneTyping = !deleting && text === current;
    const doneDeleting = deleting && text === '';

    const timer = setTimeout(() => {
      if (doneTyping) return setDeleting(true);
      if (doneDeleting) {
        setDeleting(false);
        setWordIndex((i) => i + 1);
        return;
      }
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, doneTyping ? pause : deleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}
