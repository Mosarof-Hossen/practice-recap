const loadeLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLesson(data.data));
};

// displayWord lesson function

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLesson = (lesson) => {
  const levelContainer = document.getElementById("catagory-lessons");
  levelContainer.innerHTML = "";
  for (let less of lesson) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        
        <button onclick="loadLevelWord(${less.level_no})" class="btn btn-outline btn-primary text-xl md:text-2xl"> <i class="fa-solid fa-book-open"></i>lesson-${less.level_no}</button>
        `;
    levelContainer.append(newDiv);
  }
};

// level word lesson display
const displayLevelWord = (words) => {
  //1| fast step: get the container
  const wordContainer = document.getElementById("word-container");
  //2| second step: get into every lesson ===> loop
  words.forEach(word => {
    const card= document.createElement("div");
    card.innerHTML=`
    <div class="bg-white p-8 space-y-4 rounded-xl">
      <h1 class="text-xl text-center md:text-3xl font-bold">${word.word}</h1>
      <p class="text-center">Meaning/Pronounciation</p>
      <p class="text-center">${word.meaning}/${word.pronunciation}</p>
      <div class="flex justify-between font-bold text-2xl">
        <span class="text-white p-2 rounded bg-cyan-600 hover:bg-amber-800"><i class="fa-solid fa-circle-info"></i></span>
        <span class= "text-white p-2 rounded bg-cyan-600 hover:bg-amber-800 "><i class="fa-solid fa-volume-high"></i></span>
      </div>
    </div>


    `
    wordContainer.append(card)
  });
};

loadeLessons();
