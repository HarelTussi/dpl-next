const useScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  return scrollToTop;
};

export default useScrollToTop;
