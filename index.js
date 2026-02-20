const loadeLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLesson(data.data));
};

// remove-active class
const removeActiveBtn = () => {
  const removeButton = document.querySelectorAll(".active");
  removeButton.forEach(btn=>{
    btn.classList.remove("active")
  })
};

// displayWord lesson function

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActiveBtn()
      const lessonBtn = document.getElementById(`lesson-btn-${id}`);
      lessonBtn.classList.add("active");

      displayLevelWord(data.data);
    });
};

const displayLesson = (lesson) => {
  const levelContainer = document.getElementById("catagory-lessons");
  levelContainer.innerHTML = "";
  for (let less of lesson) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        
        <button id="lesson-btn-${less.level_no}" onclick="loadLevelWord(${less.level_no})" class="btn btn-outline btn-primary text-xl md:text-xl"> <i class="fa-solid fa-book-open"></i>lesson-${less.level_no}</button>
        `;
    levelContainer.append(newDiv);
  }
};

// level word lesson display
const displayLevelWord = (words) => {
  //1| fast step: get the container
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  if (words.length == 0) {
    wordContainer.innerHTML = `

    <div class="text-center col-span-full space-y-8 ">
        <img class="w-20 mx-auto" src="./image/alert-error.png" alt="">
        <p class="font-bangla md:text-2xl text-gray-500">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h2 class="text-gray-800 md:text-5xl">নেক্সট Lesson এ যান।</h2>
      </div>
    
    `;
  }
  //2| second step: get into every lesson ===> loop
  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white p-8 space-y-4 rounded-xl">
      <h1 class="text-xl text-center md:text-3xl font-bold">${word.word ? word.word : "শব্দ পাওয়া যাইনি "}</h1>
      <p class="text-center">Meaning/Pronounciation</p>
      <p class="text-center">${word.meaning ? word.meaning : "শব্দ পাওয়া যাইনি "}/${word.pronunciation ? word.pronunciation : "শব্দ পাওয়া যাইনি "}</p>
      <div class="flex justify-between font-bold text-2xl">
        <span class="text-white p-2 rounded bg-cyan-600 hover:bg-amber-800"><i class="fa-solid fa-circle-info"></i></span>
        <span class= "text-white p-2 rounded bg-cyan-600 hover:bg-amber-800 "><i class="fa-solid fa-volume-high"></i></span>
      </div>
    </div>


    `;
    wordContainer.append(card);
  });
};

loadeLessons();
