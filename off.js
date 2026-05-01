const days = document.querySelectorAll(".day");

days.forEach(day => {
  day.addEventListener("click", () => {
    days.forEach(d => d.classList.remove("selected"));
    day.classList.add("selected");
    console.log("Selected day:", day.textContent);
  });
});
