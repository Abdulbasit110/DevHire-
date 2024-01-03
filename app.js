const sections = document.querySelectorAll(
  ".animation-from-right , .animation-from-left, .animation-from-top , .animation-from-bottom"
);
const image = document.getElementById("homeImage");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        image.classList.add("dropShadow");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

for (let i = 0; i < sections.length; i++) {
  const ele = sections[i];
  console.log(ele);
  observer.observe(ele);
}
