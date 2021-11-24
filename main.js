const taskAdd = document.querySelector(".taskAddBtn");
const taskText = document.querySelector(".taskAdd");
const resetBtn = document.querySelector(".resetBtn");

const selectTask = () => {
    let taskInfo = taskText.value;
    console.log(taskInfo);
};

taskAdd.addEventListener("click", () => {
     selectTask();
});

