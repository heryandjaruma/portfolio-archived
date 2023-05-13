const handleScrollDown = (target: string) => {
  const element = document.getElementById(target);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};
