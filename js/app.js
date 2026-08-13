"use strict";

const courseForm = document.getElementById("course-form");
const courseCodeInput = document.getElementById("course-code");
const courseNameInput = document.getElementById("course-name");
const courseList = document.getElementById("course-list");
const courseCount = document.getElementById("course-count");

const assessmentForm = document.getElementById("assessment-form");
const assessmentTitleInput = document.getElementById("assessment-title");
const assessmentCourseInput = document.getElementById("assessment-course");
const assessmentDateInput = document.getElementById("assessment-date");
const assessmentWeightInput = document.getElementById("assessment-weight");
const assessmentStatusInput = document.getElementById("assessment-status");
const assessmentList = document.getElementById("assessment-list");
const assessmentCount = document.getElementById("assessment-count");
const assessmentGradeInput = document.getElementById("assessment-grade");
const completedCount = document.getElementById("completed-count");
const averageGrade = document.getElementById("average-grade");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");
const progressMessage = document.getElementById("progress-message");

const courses =
    JSON.parse(
        localStorage.getItem("academicTrackerCourses")
    ) || [];

const assessments =
    JSON.parse(
        localStorage.getItem("academicTrackerAssessments")
    ) || [];

function saveData() {
    localStorage.setItem(
        "academicTrackerCourses",
        JSON.stringify(courses)
    );

    localStorage.setItem(
        "academicTrackerAssessments",
        JSON.stringify(assessments)
    );
}

function updateCourseOptions() {
    assessmentCourseInput.innerHTML =
        '<option value="">Select course</option>';

    courses.forEach((course) => {
        const option = document.createElement("option");

        option.value = course.code;
        option.textContent = `${course.code} - ${course.name}`;

        assessmentCourseInput.appendChild(option);
    });
}

function renderCourses() {
    courseList.innerHTML = "";
    courseCount.textContent = courses.length;

    updateCourseOptions();

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
                <div class="course-code">
                    ${course.code}
                </div>

                <div class="course-info">
                    <h3>${course.name}</h3>
                    <p>Active course</p>
                </div>
            </div>

            <button
                type="button"
                class="remove-button course-remove"
                data-course-index="${index}">
                Remove
            </button>
        `;

        courseList.appendChild(courseItem);
    });
}

courseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newCourse = {
        code: courseCodeInput.value.trim(),
        name: courseNameInput.value.trim()
    };

    courses.push(newCourse);

    saveData();

    courseForm.reset();
    renderCourses();
});

courseList.addEventListener("click", function (event) {
    if (!event.target.matches(".course-remove")) {
        return;
    }

    const courseIndex = Number(
        event.target.dataset.courseIndex
    );

    courses.splice(courseIndex, 1);

    saveData();
    renderCourses();
});

function updateAcademicSummary() {
    const completedAssessments = assessments.filter(
        (assessment) => assessment.status === "Completed"
    );

    completedCount.textContent =
        completedAssessments.length;

    const gradedAssessments = assessments.filter(
        (assessment) =>
            assessment.grade !== "" &&
            !Number.isNaN(Number(assessment.grade))
    );

    if (gradedAssessments.length === 0) {
        averageGrade.textContent = "--";
    } else {
        const totalWeight = gradedAssessments.reduce(
            (total, assessment) =>
                total + Number(assessment.weight),
            0
        );

        const weightedTotal = gradedAssessments.reduce(
            (total, assessment) =>
                total +
                Number(assessment.grade) *
                Number(assessment.weight),
            0
        );

        const calculatedAverage =
            weightedTotal / totalWeight;

        averageGrade.textContent =
            `${calculatedAverage.toFixed(1)}%`;
    }

    const completionRate =
        assessments.length === 0
            ? 0
            : Math.round(
                (
                    completedAssessments.length /
                    assessments.length
                ) * 100
            );

    progressPercent.textContent =
        `${completionRate}%`;

    progressFill.style.width =
        `${completionRate}%`;

    if (assessments.length === 0) {
        progressMessage.textContent =
            "Complete assessments to build your progress summary.";
    } else {
        progressMessage.textContent =
            `${completedAssessments.length} of ${assessments.length} assessments completed.`;
    }
}

function renderAssessments() {
    assessmentList.innerHTML = "";
    assessmentCount.textContent = assessments.length;

    updateAcademicSummary();

    if (assessments.length === 0) {
        assessmentList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">A</div>
                <h3>No assessments added yet</h3>
                <p>Add a course and create your first assessment.</p>
            </div>
        `;

        return;
    }

    assessments.forEach((assessment, index) => {
        const assessmentItem = document.createElement("div");
        assessmentItem.className = "assessment-item";

        const gradeText =
            assessment.grade === ""
                ? "Not graded"
                : `Grade ${assessment.grade}%`;

        assessmentItem.innerHTML = `
            <div class="assessment-top">
                <div>
                    <h3>${assessment.title}</h3>

                    <p class="assessment-meta">
                        ${assessment.course}
                        · Due ${assessment.date}
                        · Weight ${assessment.weight}%
                        · ${gradeText}
                    </p>
                </div>

                <span class="status-badge">
                    ${assessment.status}
                </span>
            </div>

            <div class="assessment-actions">
                <select
                    class="assessment-status-select"
                    data-assessment-index="${index}">

                    <option
                        value="Not Started"
                        ${assessment.status === "Not Started" ? "selected" : ""}>
                        Not Started
                    </option>

                    <option
                        value="In Progress"
                        ${assessment.status === "In Progress" ? "selected" : ""}>
                        In Progress
                    </option>

                    <option
                        value="Completed"
                        ${assessment.status === "Completed" ? "selected" : ""}>
                        Completed
                    </option>
                </select>

                <button
                    type="button"
                    class="remove-button assessment-remove"
                    data-assessment-index="${index}">
                    Remove
                </button>
            </div>
        `;

        assessmentList.appendChild(assessmentItem);
    });
}

assessmentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newAssessment = {
        title: assessmentTitleInput.value.trim(),
        course: assessmentCourseInput.value,
        date: assessmentDateInput.value,
        weight: assessmentWeightInput.value,
        grade: assessmentGradeInput.value,
        status: assessmentStatusInput.value
    };

    assessments.push(newAssessment);

    saveData();

    assessmentForm.reset();
    renderAssessments();
});

assessmentList.addEventListener("change", function (event) {
    if (!event.target.matches(".assessment-status-select")) {
        return;
    }

    const assessmentIndex = Number(
        event.target.dataset.assessmentIndex
    );

    assessments[assessmentIndex].status =
        event.target.value;

    saveData();
    renderAssessments();
});

assessmentList.addEventListener("click", function (event) {
    if (!event.target.matches(".assessment-remove")) {
        return;
    }

    const assessmentIndex = Number(
        event.target.dataset.assessmentIndex
    );

    assessments.splice(assessmentIndex, 1);

    saveData();
    renderAssessments();
});

renderCourses();
renderAssessments();