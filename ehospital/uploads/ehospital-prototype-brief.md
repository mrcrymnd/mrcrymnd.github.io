# eHospital Platform: Prototype Brief

## 1. Purpose of this document

This brief describes the structure of the **eHospital** web platform so a clickable prototype can be built. It is derived from a FigJam structure map (`ehospital-structure-map`).

- **Sections 2-5 are confirmed**: they come directly from the structure map. Follow them exactly.
- **Section 6 is assumed**: fields, content and visuals were not in the map. Treat these as sensible defaults and keep them easy to change.

**Prototype goal:** a clickable, wireframe-to-mid-fidelity prototype where every screen below exists and navigation works as specified. Realistic placeholder data is fine. No real backend is needed.

---

## 2. Users and authentication (confirmed)

There are two roles. Both start at the Landing Page and authenticate separately:

| Role | Entry path | Lands on |
|------|-----------|----------|
| Student | Landing Page → "student auth" | **Hi, Student! (Home)** |
| Faculty | Landing Page → "faculty auth" | **Hi, Faculty! (Home)** |

Both home screens link to a shared **About** page.

**Scope note:** the Faculty side is fully mapped. The Student Home is only a placeholder in the source map (shown greyed out with a dashed connector). Build it as a simple placeholder screen (see Section 6.2).

---

## 3. Sitemap (confirmed)

```
Landing Page
├── [student auth] → Hi, Student! (Home)  [placeholder]
│                      └── About
└── [faculty auth] → Hi, Faculty! (Home)
                       ├── About
                       ├── Interns
                       │   ├── Teams
                       │   │   ├── Add Team
                       │   │   └── View Team → Edit Team → Delete Team?
                       │   └── Interns
                       │       ├── Add Intern
                       │       └── View Intern → Edit Intern → Delete Intern?
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
                       └── Feedback
                           ├── Threads → View Thread
                           ├── Interns → View Intern
                           └── Keywords → View Keyword
```

### Reading the arrows

- **Add X** is reached from the entity's list/section screen.
- **View X** is reached from the entity's list/section screen.
- **Edit X** is reached *from View X*.
- **Delete X?** is a confirmation step reached *from Edit X* (not directly from View).
- The **Interns** section contains two parallel sub-lists (Teams and Interns), each with the same CRUD pattern.
- The **Feedback** section is read-only: list → view only, with no add, edit or delete.

---

## 4. Screen inventory (confirmed)

### Global
1. Landing Page
2. Hi, Student! (Home)
3. Hi, Faculty! (Home)
4. About

### Interns section
5. Interns (section hub: shows Teams and Interns)
6. Add Team
7. View Team
8. Edit Team
9. Delete Team? (confirmation)
10. Add Intern
11. View Intern
12. Edit Intern
13. Delete Intern? (confirmation)

### Rotation section
14. Rotation (section hub)
15. Prompt Sequence (list)
16. Add Prompt
17. View Prompt
18. Edit Prompt
19. Delete Prompt? (confirmation)
20. Prompt Media (hub with four tabs/cards: Static Media, URLs, Discussion Boards, Quizzes)
21. Static Media (list), Add File, View File, Edit File, Delete File?
22. URLs (list), Add URL, View URL, Edit URL, Delete URL?
23. Discussion Boards (list), Add Discussion Board, View Discussion Board, Edit Discussion Board, Delete Discussion Board?
24. Quizzes (list), Add Quiz, View Quiz, Edit Quiz, Delete Quiz?

### Feedback section
25. Feedback (section hub with three sub-lists)
26. Threads (list) → View Thread
27. Interns (list) → View Intern
28. Keywords (list) → View Keyword

---

## 5. Interaction patterns (confirmed)

**Standard CRUD pattern.** Every entity (Team, Intern, Prompt, File, URL, Discussion Board, Quiz) follows the same flow:

1. **List screen:** shows existing items, with an "Add" button and clickable rows leading to View.
2. **Add screen:** a form. On save, return to the list.
3. **View screen:** read-only details with an "Edit" button.
4. **Edit screen:** same form as Add, pre-filled, with a "Delete" action.
5. **Delete? screen:** confirmation (modal or small dialog) with Cancel and Confirm. On confirm, return to the list.

Build this pattern once as a reusable template and reuse it across all entities. Only the fields change.

**Navigation.** Faculty Home exposes three primary destinations: **Interns**, **Rotation**, **Feedback**. Use a persistent sidebar or top nav so users can switch between them from any screen, plus a breadcrumb trail on deep screens (e.g., Rotation > Prompt Media > Quizzes > View Quiz).

---

## 6. Assumptions (NOT in the source map; adjust as needed)

### 6.1 Domain context (assumed)

- **eHospital** is an education platform for clinical training. **Faculty** manage medical **interns** (students) organized into **teams**.
- A **Rotation** is a clinical training placement. Faculty build it from a **Prompt Sequence** (an ordered series of prompts or questions for interns) supported by **Prompt Media** (attachments such as files, links, discussion boards and quizzes).
- **Feedback** aggregates intern responses. **Threads** are feedback or discussion conversations, **Interns** shows feedback grouped by intern, and **Keywords** shows feedback grouped by recurring terms.

### 6.2 Student Home (placeholder)

Simple screen: greeting ("Hi, Student!"), a short "Your rotations will appear here" empty state, and a link to About. No further student functionality is specified.

### 6.3 Landing Page and auth

- Hero area with the platform name and a one-line description.
- Two clear entry buttons: **"I'm a Student"** and **"I'm Faculty"**, each leading to a simple login form (email + password) that proceeds to the matching home. The prototype does not need to validate anything.

### 6.4 About

Short static page: platform description, mission and a contact line. Placeholder copy is fine.

### 6.5 Suggested fields per entity

| Entity | Suggested fields |
|--------|------------------|
| Team | Name, description, rotation (dropdown), members (multi-select of interns) |
| Intern | Full name, email, team (dropdown), year/level, status (active/inactive) |
| Prompt | Title, prompt text, order in sequence (number), due date |
| File (Static Media) | Title, file upload, description, linked prompt |
| URL | Title, URL, description, linked prompt |
| Discussion Board | Title, topic/description, linked prompt, open/closed toggle |
| Quiz | Title, description, number of questions, passing score, linked prompt |

**Feedback screens (read-only):**
- **Thread:** title, intern name, date, message list.
- **Intern:** name, summary of feedback count, list of related threads.
- **Keyword:** the keyword, number of mentions, list of related threads.

### 6.6 Visual direction

- Clean, professional, healthcare-appropriate: calm blues/teals on a white or light-grey background, with generous whitespace.
- Desktop-first (responsive is a bonus, not a requirement).
- Left sidebar navigation for the Faculty experience.
- Use realistic placeholder data (e.g., "Team Cardiology A", "Dr. Patel's Rotation", "Intern: Maria Gomez").

---

## 7. Prototype priorities

If scope needs to be cut, build in this order:

1. Landing Page → Faculty Home → the three section hubs
2. The full **Interns > Teams** CRUD flow (reference implementation of the pattern)
3. The **Rotation > Prompt Sequence** CRUD flow
4. The four **Prompt Media** types, reusing the same template
5. **Feedback** read-only screens
6. Student Home and About

## 8. Out of scope

Real authentication, a backend or database, actual file uploads, real quiz-taking logic, and notifications.
