const loadeLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLesson(data.data));
};

const displayLesson = (lesson) => {
  const levelContainer = document.getElementById("catagory-lessons");
  levelContainer.innerHTML = "";
  for (let less of lesson) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        
        <button class="btn btn-outline btn-primary"> <i class="fa-solid fa-book-open"></i>lesson-${less.level_no}</button>
        `;
        levelContainer.append(newDiv)
  }
};
loadeLessons();
