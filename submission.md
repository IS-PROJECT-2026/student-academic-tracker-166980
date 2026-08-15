# Project Submission Report

## 1. Student Details

- **Full Name:** Krishna Mahendra Madhaparia
- **GitHub Username:** Madhaparia-Krishna
- **Email:** krishina.madhaparia@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/student-academic-tracker-166980/

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/student-academic-tracker-166980/commit/50741c1
- **Why this one?** I chose this commit because it follows the Conventional Commit format with a clear type and scope. It also includes a body explaining the change and a footer linking it to Issue #9.
  
### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/student-academic-tracker-166980/commit/0e7341b
- **What happened and how did you recover?** I made a commit with the message `rename css file`, which did not follow the Conventional Commit format required for the project. I recovered by keeping the history transparent and using proper structured commit messages such as `feat`, `fix`, `style`, and `chore` for the rest of the project.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** https://github.com/IS-PROJECT-2026/student-academic-tracker-166980/pull/14
- **What did you check before merging?** I checked that the changes were limited to the academic summary feature, including grade input, completed assessment count, weighted average, and progress calculations. I also confirmed that the PR correctly closed Issue #5 and was linked to the appropriate milestone.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would separate final testing, documentation, and deployment into different issues instead of combining them into one final issue. This would make the workflow more granular and improve traceability between tasks, commits, and pull requests.
- **Link to the evidence of the original decision:** (https://github.com/IS-PROJECT-2026/student-academic-tracker-166980/issues/9)

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

<img width="1919" height="837" alt="4A" src="https://github.com/user-attachments/assets/f725c1ca-b94f-414f-bf51-77e1b9388bc5" />

* **Caption:** Milestone 3 tracks the final testing, responsive design, conflict resolution, and deployment tasks through linked development issues, showing the project progressing toward completion.

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

<img width="1342" height="825" alt="4b" src="https://github.com/user-attachments/assets/2a4c4889-a6c3-4daf-a692-eeea68e5a734" />

* **Caption:** The project board tracks issues through To Do, In Progress, and Done, with Issue #9 currently in progress while the completed development tasks remain in Done.

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

<img width="1614" height="828" alt="4c" src="https://github.com/user-attachments/assets/c81369ac-0bcb-4b5e-833f-737b78840183" />

* **Caption:** Development was separated into issue-linked feature, style, and chore branches such as `feat/`, `style/`, and `chore/`, keeping work isolated from `main` until it was reviewed and merged through pull requests.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

<img width="1631" height="832" alt="4D" src="https://github.com/user-attachments/assets/e7d26596-72bc-4d6e-a462-ad7c49444b77" />

* **Caption:** Pull Request #14 implemented the academic progress summary feature, linked directly to Issue #5 and Milestone 2, and was reviewed before being merged into `main`.
---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Edit/Edit conflict — both branches changed the same line in `index.html`.

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

<img width="1359" height="370" alt="5a step 1" src="https://github.com/user-attachments/assets/83269f6e-af9c-447f-a46b-075186b735f7" />

* **Caption:**  I merged `branch-A` into `branch-B` and Git showed a conflict because both branches changed the same line in `index.html`.

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

<img width="1288" height="502" alt="5a step 2" src="https://github.com/user-attachments/assets/f5a81447-7fd2-4914-9d70-aebb87c1f7f7" />

* **Caption:** Both branches changed the same line in `index.html`, so Git showed the conflict markers. I kept the final text as `Current Semester Overview`.

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

<img width="1915" height="797" alt="5a step 3" src="https://github.com/user-attachments/assets/1f2db161-939c-434b-9248-0b33a2d5b4d7" />

* **Caption:** The conflict in `index.html` was resolved, committed, and successfully merged into `main` through Pull Request #18.

---

### Conflict 2 — Different Cause

**What cause did you use?** Add/Add conflict — both branches created the same JavaScript file with different code.

**Why does this cause trigger a conflict?**  Git could not decide which version of the new file should be kept because both branches added the same file differently.

<img width="1400" height="917" alt="5 conflict 2" src="https://github.com/user-attachments/assets/9c456320-93fd-45fd-8a14-22e458cd751f" />

* **Caption:** `conflict-2-a` and `conflict-2-b` both created `js/grade-utils.js` with different grade calculation code, causing an Add/Add conflict.

---

### Conflict 3 — Different Cause

**What cause did you use?**  Delete/Edit conflict — one branch deleted a CSS block while the other branch changed it.

**Why does this cause trigger a conflict?**  Git could not decide whether the CSS block should be deleted or kept with the new changes.

<img width="1395" height="923" alt="5 conflict 3" src="https://github.com/user-attachments/assets/af1704d9-c283-46ae-8422-0f6c4c3675ae" />

* **Caption:** `conflict-3-a` deleted the `.demo-status` block while `conflict-3-b` changed the same block in `styles.css`, causing a Delete/Edit conflict.

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
