# eHospital: Prototype Spec

**Source:** FigJam board "ehospital-structure-map" (site map / structure map)
**Purpose:** Brief for building a clickable prototype in Claude Design.

## How to read this document

- Content marked **[FROM MAP]** comes directly from the FigJam structure map. Treat it as authoritative.
- Content marked **[ASSUMPTION]** is inferred to make the prototype usable. Replace it as soon as real requirements exist.
- Content marked **[OPEN]** is unresolved and needs a decision.

---

## 1. Product overview

**[ASSUMPTION]** eHospital is a web app for medical education. Faculty manage interns, organize them into teams, build rotations out of sequenced prompts (with attached media, discussion boards or quizzes), and review feedback. Students move through those rotation prompts.

**Prototype goal:** Demonstrate every screen and navigation path in the map, using realistic placeholder data, so the structure can be reviewed with stakeholders.

---

## 2. Roles

| Role | Entry | Home screen |
|---|---|---|
| Student | Landing Page → "student auth" | Hi, Student! (Home) **[FROM MAP]** |
| Faculty | Landing Page → "faculty auth" | Hi, Faculty! (Home) **[FROM MAP]** |

Both roles can reach the **About** page from their Home screen. **[FROM MAP]**

---

## 3. Navigation tree **[FROM MAP]**

```
Landing Page
├── (student auth) → Hi, Student! (Home)
│   ├── About
│   └── Student Rotation sequence
│       Prompt (Static Media)
│       → Prompt (Discussion Board)
│       → Prompt (Quiz)
│       → Prompt (Static Media)
│
└── (faculty auth) → Hi, Faculty! (Home)
    ├── About
    │
    ├── Interns
    │   ├── Add Team
    │   ├── View Team → Edit Team → Delete Team?
    │   ├── Add Intern
    │   └── View Intern → Edit Intern → Delete Intern?
    │
    ├── Rotation
    │   ├── Prompt Sequence
    │   │   ├── Add Prompt
    │   │   └── View Prompt → Edit Prompt → Delete Prompt?
    │   └── Prompt Media
    │       ├── Static Media
    │       │   ├── Add File
    │       │   └── View File → Edit File → Delete File?
    │       ├── URLs
    │       │   ├── Add URL
    │       │   └── View URL → Edit URL → Delete URL?
    │       ├── Discussion Boards
    │       │   ├── Add Discussion Board
    │       │   └── View Discussion Board → Edit Discussion Board → Delete Discussion Board?
    │       └── Quizzes
    │           ├── Add Quiz
    │           └── View Quiz → Edit Quiz → Delete Quiz?
    │
    └── Feedback
        ├── Threads  → View Thread
        ├── Interns  → View Intern
        └── Keywords → View Keyword
```

---

## 4. Reusable pattern: Add / View / Edit / Delete?

Most content types in the map follow one pattern. Build it once as a reusable template and apply it to each type.

**[FROM MAP]** The flow:

1. **Add [Item]** is reachable from the item's list screen.
2. **View [Item]** is reachable from the item's list screen.
3. **Edit [Item]** is reachable only from View.
4. **Delete [Item]?** is reachable only from Edit, and is a confirmation step.

**[ASSUMPTION]** Template behavior:

- **List screen:** a table or card list of existing items, with an "Add" button and clickable rows leading to View.
- **Add screen:** a form with Save and Cancel. Save returns to the list and shows the new item.
- **View screen:** a read-only detail page with an "Edit" button and a back link.
- **Edit screen:** the same form as Add, pre-filled, with Save, Cancel and a "Delete" button.
- **Delete? screen:** a confirmation dialog ("Delete [name]? This cannot be undone.") with Confirm and Cancel. Confirm returns to the list.

Types using this pattern: Team, Intern, Prompt, File, URL, Discussion Board, Quiz.

---

## 5. Screen specifications

### 5.1 Landing Page **[FROM MAP]**
- Two entry paths: **Student** and **Faculty**, labeled "student auth" and "faculty auth" on the map.
- **[ASSUMPTION]** Layout: product name and tagline, a short description, and two clearly separated sign-in buttons ("I'm a Student", "I'm Faculty"). Each leads to a simple sign-in form (email and password). For the prototype, "Sign in" goes directly to the matching Home.
- **[OPEN]** Auth method (email and password, SSO, institutional login).

### 5.2 Hi, Student! (Home) **[FROM MAP]**
- Links to: **About**, and the **student Rotation sequence**.
- **[ASSUMPTION]** Greeting, "Continue your rotation" card showing the current prompt and progress, and a nav bar with Home, Rotation and About.

### 5.3 Student Rotation sequence **[FROM MAP]**
A linear sequence of four prompts, in order:

1. Prompt (with Static Media)
2. Prompt (with Discussion Board)
3. Prompt (with Quiz)
4. Prompt (with Static Media)

**[ASSUMPTION]** Each prompt screen shows the prompt text, then the attached media:
- *Static Media:* an embedded file viewer or download card.
- *Discussion Board:* a threaded post list with a "Post reply" box.
- *Quiz:* a few multiple-choice questions with a Submit button.
- Footer: "Previous" and "Next" buttons, with a step indicator (e.g., "Prompt 2 of 4").

**[OPEN]** Whether the student sequence is the same as the faculty-built sequence, or a snapshot of it. See also Open Questions.

### 5.4 About **[FROM MAP]**
- Reachable from both Home screens.
- **[ASSUMPTION]** Static page: mission, how the app works, contact info.

### 5.5 Hi, Faculty! (Home) **[FROM MAP]**
- Links to: **Interns**, **Rotation**, **Feedback**, and **About**.
- **[ASSUMPTION]** Greeting, three large navigation cards (Interns, Rotation, Feedback) with a one-line description and a count (e.g., "12 interns across 3 teams"), and a recent activity list.

### 5.6 Faculty: Interns **[FROM MAP]**
Two sub-areas, each using the CRUD pattern in Section 4:

- **Teams:** Add Team, View Team, Edit Team, Delete Team?
- **Interns:** Add Intern, View Intern, Edit Intern, Delete Intern?

**[ASSUMPTION]** Layout: a screen with two tabs or sections (Teams, Interns).
- *Team fields:* Name, Description, Members (multi-select of interns).
- *Intern fields:* Name, Email, Team (dropdown), Start date, Status.
- *View Team:* team details plus a member list.
- *View Intern:* intern profile, team, and progress through the rotation.

### 5.7 Faculty: Rotation **[FROM MAP]**
Two sub-areas:

**Prompt Sequence** (CRUD pattern for Prompt)
- **[ASSUMPTION]** Prompt fields: Title, Prompt text, Order (position in sequence), Attached media (type + item).
- **[ASSUMPTION]** The list view is an ordered list showing each prompt's position and attached media type.

**Prompt Media** (four types, each with the CRUD pattern)

| Type | Screens | Assumed fields |
|---|---|---|
| Static Media | Add File, View File, Edit File, Delete File? | Title, File upload, Description |
| URLs | Add URL, View URL, Edit URL, Delete URL? | Title, URL, Description |
| Discussion Boards | Add / View / Edit / Delete Discussion Board | Title, Starter question, Open/close dates |
| Quizzes | Add / View / Edit / Delete Quiz | Title, Questions (text, options, correct answer), Passing score |

### 5.8 Faculty: Feedback **[FROM MAP]**
Three view-only lists, each opening a detail view:

| List | Detail | Assumed content |
|---|---|---|
| Threads | View Thread | Conversation thread tied to a prompt or intern |
| Interns | View Intern | Feedback summary for one intern |
| Keywords | View Keyword | A keyword with the feedback items that mention it |

**[ASSUMPTION]** No create, edit or delete actions here, because the map shows none.
**[OPEN]** Where feedback originates (student submissions, faculty notes, automated analysis). See Open Questions.

---

## 6. Screen index

| ID | Screen | Role | Reached from |
|---|---|---|---|
| S01 | Landing Page | Public | Entry |
| S02 | Student Home | Student | S01 |
| S03 | Faculty Home | Faculty | S01 |
| S04 | About | Both | S02, S03 |
| S05 | Student Rotation (4 prompts) | Student | S02 |
| F01 | Interns (Teams and Interns lists) | Faculty | S03 |
| F02 | Add / View / Edit / Delete Team | Faculty | F01 |
| F03 | Add / View / Edit / Delete Intern | Faculty | F01 |
| F04 | Rotation (Prompt Sequence, Prompt Media) | Faculty | S03 |
| F05 | Add / View / Edit / Delete Prompt | Faculty | F04 |
| F06 | Static Media: Add / View / Edit / Delete File | Faculty | F04 |
| F07 | URLs: Add / View / Edit / Delete URL | Faculty | F04 |
| F08 | Discussion Boards: Add / View / Edit / Delete | Faculty | F04 |
| F09 | Quizzes: Add / View / Edit / Delete | Faculty | F04 |
| F10 | Feedback (Threads, Interns, Keywords) | Faculty | S03 |
| F11 | View Thread / View Intern / View Keyword | Faculty | F10 |

---

## 7. Prototype instructions

- **Fidelity:** Mid-fidelity, clickable. Every navigation path in Section 3 must work.
- **Platform:** **[ASSUMPTION]** Desktop-first responsive web.
- **Data:** Use realistic placeholder content, including a few teams, around 8 interns, 4 prompts, and sample quiz questions. Keep it consistent across screens (the same intern appears in Interns and Feedback).
- **Navigation:** A persistent top or side nav per role. The student nav has Home, Rotation, About. The faculty nav has Home, Interns, Rotation, Feedback, About. Include a visible role indicator and a sign-out control.
- **Reuse:** Build the CRUD pattern (Section 4) once and apply it everywhere.
- **Visual direction:** **[OPEN]** No brand, palette or tone is specified. Suggested default: clean, calm, healthcare-appropriate styling with accessible contrast, until a brand direction is provided.

---

## 8. Assumptions summary

1. The product is a medical-education platform for interns, students and faculty.
2. The CRUD template behavior in Section 4 (what list, add, view, edit and delete screens look like).
3. All form fields and example content in Section 5.
4. The student rotation is a linear, step-by-step experience with Previous and Next controls.
5. Feedback is read-only.
6. Desktop-first responsive design.

## 9. Open questions

1. **Auth:** How do users sign in, and can one person hold both roles?
2. **Student interactions:** How do students submit quizzes, post to discussion boards and see results? The map shows only the prompt sequence for students.
3. **Student vs. faculty "Rotation":** Is the student sequence generated from the faculty's Prompt Sequence? Are rotations assigned per team or per intern?
4. **Teams and interns:** Can an intern belong to more than one team? Is a team required when adding an intern?
5. **Add actions:** After saving, does the user return to the list or land on the new item's View screen? The map shows no outgoing connectors from any Add screen.
6. **Delete access:** The map shows Delete only after Edit. Is that intentional?
7. **Feedback origin:** Who or what creates Threads and Keywords? Are keywords extracted automatically or tagged manually?
8. **Prompt to media relationship:** Can a prompt have more than one media item? Can a URL or file be reused across prompts?
9. **Branding:** Is there a brand, palette or tone to follow?
10. **Student Home depth:** Should it show more than the rotation (e.g., progress, grades, notifications)? The map shows only About and the rotation.
