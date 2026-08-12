"use strict";

const courseForm = document.getElementById("course-form");
const courseCodeInput = document.getElementById("course-code");
const courseNameInput = document.getElementById("course-name");
const courseList = document.getElementById("course-list");
const courseCount = document.getElementById("course-count");

const courses = [];

function renderCourses() {
    courseList.innerHTML = "";
    courseCount.textContent = courses.length;

    if (courses.length === 0) {
        courseList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">C</div>
                <h3>No courses added yet</h3>
                <p>Add your first course using the form above.</p>
            </div>
        `;
        return;
    }

    courses.forEach((course, index) => {
        const courseItem = document.createElement("div");
        courseItem.className = "course-item";

        courseItem.innerHTML = `
            <div class="course-details">
                <div class="course-code">${course.code}</div>

                <div class="course-info">
                    <h3>${course.name}</h3>
                    <p>Active course</p>
                </div>
            </div>

            <button
                type="button"
                class="remove-button"
                data-course-index="${index}">
                Remove
            </button>
        `;

        courseList.appendChild(courseItem);
    });
}

courseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const course = {
        code: courseCodeInput.value.trim(),
        name: courseNameInput.value.trim()
    };

    courses.push(course);

    courseForm.reset();
    renderCourses();
});

courseList.addEventListener("click", function (event) {
    if (!event.target.matches(".remove-button")) {
        return;
    }

    const index = Number(event.target.dataset.courseIndex);

    courses.splice(index, 1);
    renderCourses();
});

renderCourses();