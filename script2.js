// Add a task to the list
document.getElementById("add-task").addEventListener("click", function () {
    const taskName = document.getElementById("task-name").value;
    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;

    if (taskName && startTime && endTime) {
        const taskList = document.getElementById("task-list");
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskName} (Start: ${startTime}, End: ${endTime})
            <button class="complete-task">✔</button>
        `;
        taskList.appendChild(listItem);

        document.getElementById("task-name").value = "";
        document.getElementById("start-time").value = "";
        document.getElementById("end-time").value = "";

        listItem.querySelector(".complete-task").addEventListener("click", function () {
            listItem.style.textDecoration = "line-through";
        });
    } else {
        alert("Please fill in all fields.");
    }
});

// Apply gradient background
document.getElementById("apply-gradient").addEventListener("click", function () {
    const color1 = document.getElementById("color-picker1").value;
    const color2 = document.getElementById("color-picker2").value;
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.transition = "background 0.5s ease"; // Smooth transition
});
