import { useRef, useEffect } from "react";

const useChangeTitle = (title, prevailOnUnmount = false) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
};

export default useChangeTitle;
