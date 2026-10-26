# eHospital: Discussion Board Moderation Enhancements

**Prototype:** eHospital (CUIMC) · **Audience for this doc:** designer/builder extending the existing prototype
**Scope:** Faculty-side moderation of discussion boards, plus the student-side counterparts needed to support it.

---

## 1. Context

Discussion boards are one of four media types attached to a rotation prompt (file, link, board, quiz). Interns post and reply to each other in a Reddit-style threaded view, and faculty can also comment and vote.

**Current behavior in the prototype**

- Faculty open a board from the faculty sidebar (Rotation → Boards) or from a feedback thread via "Open the original discussion board →". This is the `view` page for entity `board`.
- Faculty and students share the same discussion component. Faculty posts get a **Faculty** badge.
- Faculty can edit a board's starter question and open/close dates, and delete the whole board.
- Board status is derived from dates: **Scheduled / Open / Closed**. When not Open, commenting, replying and voting are disabled.
- **There is no comment-level moderation.** No remove, hide, flag, or pin.

**Why this matters:** interns will describe real patient scenarios. Moderation is mainly about (a) catching PHI, (b) correcting clinically wrong content before peers absorb it, and (c) keeping discussion professional.

---

## 2. Goals and non-goals

**Goals**
1. Let faculty act on individual comments without leaving the faculty view.
2. Reduce PHI risk with prevention, flagging, and fast takedown.
3. Give faculty a single place to see what needs attention.
4. Keep students informed when content is removed, without exposing faculty tools.

**Non-goals (for this prototype pass)**
- Real authentication or server-side permissions (role is a front-end flag today; note this in the UI hints, but don't build it).
- Automated PHI detection beyond simple pattern hints.
- Email/push notifications.

---

## 3. Priority order

| Priority | Feature | Why |
|---|---|---|
| P0 | Comment actions: Remove, Hide, Pin, with placeholder and audit log | Biggest current gap |
| P0 | PHI reminder and "Report" flag, with faculty hide-and-notify | Highest-risk content type |
| P1 | Moderation queue on faculty dashboard | Saves faculty from scanning every board |
| P2 | Faculty-only teaching tools (private notes, endorsed/needs-correction markers, vote visibility) | Quality of learning |
| P2 | Board lifecycle controls (lock thread, extend/reopen, closing summary) | Flexibility |
| P3 | Own-comment edit/delete window for students | Student-side polish |

---

## 4. Data model changes

Existing post shape:

```js
{ id, parent, author, role, ts, up, down, text }
```

Extend each post with:

```js
{
  // moderation
  status: 'visible' | 'hidden' | 'removed',   // default 'visible'
  pinned: false,
  facultyMark: null | 'endorsed' | 'needs_correction',
  moderation: null | {
    by: 'Dr. Trudi Cloyd',
    at: '2026-10-12T09:14:00',
    action: 'removed' | 'hidden',
    reason: 'phi' | 'inaccurate' | 'unprofessional' | 'off_topic' | 'other',
    note: ''                                   // optional, shown privately to author
  },
  // reporting
  reports: [ { by: 'Aisha Rahman', at: '...', reason: 'phi' | 'inaccurate' | 'unprofessional' | 'other', note: '' } ],
  // faculty-only
  privateNote: ''                              // never rendered in student views
}
```

Extend each board with:

```js
{
  locked: false,                 // faculty can lock the whole board early
  lockedThreads: [],             // ids of root comments whose threads are locked
  closingSummary: '',            // optional faculty wrap-up comment shown at the top when Closed
  showScores: true               // false hides vote scores from students
}
```

Add a top-level audit log:

```js
auditLog: [
  { id, at, actor, boardId, postId, action, reason, note }
]
```

---

## 5. Faculty UI

All faculty controls live **only** in the faculty view (the `view` page for a board) and the faculty dashboard. They must not render in the student rotation screen.

### 5.1 Comment action menu (P0)

Add a `⋯` menu to the right of each comment's header row, visible only to faculty.

| Action | Result |
|---|---|
| **Pin** / **Unpin** | Moves the comment to the top of the board with a 📌 "Pinned by faculty" label. Max 2 pinned per board. |
| **Hide** | Content collapses behind "Hidden by faculty pending review". Reversible. Replies stay visible. |
| **Remove** | Content replaced with "Removed by faculty". Replies stay visible. Prompts for a reason (required) and optional private note to the author. |
| **Mark endorsed** / **Mark needs correction** | Adds a badge (see 5.4). |
| **Add private note** | Faculty-only text; shows a small 🔒 icon on the comment. |
| **Restore** | Appears on hidden/removed comments. Returns to visible and logs the action. |

**Interaction notes**
- Remove opens a small confirmation modal with a reason dropdown (PHI / Inaccurate / Unprofessional / Off-topic / Other), an optional note, and Cancel / Remove buttons. Reuse the prototype's existing delete-confirmation modal pattern and toast ("Comment removed").
- Faculty always see the original text of hidden/removed comments, shown muted with a strikethrough-style treatment and a "Hidden/Removed by {name} · {reason}" line, so they can restore.
- Removing a root comment does not remove its replies.

### 5.2 Moderation queue on the faculty dashboard (P1)

Add a card to the existing Faculty Dashboard cards (alongside Members, Rotation progress, etc.):

- **Title:** "Moderation"
- **Stat:** "{n} flagged · {m} need reply"
- **Opens:** a Moderation page with three tabs:
  1. **Flagged** — comments with ≥1 report, newest first, PHI reports sorted to the top. Each row: board title, author, snippet, report count and reasons, and inline Hide / Remove / Dismiss flag buttons.
  2. **Unanswered** — root comments with no faculty reply, oldest first.
  3. **Closing soon** — boards closing within 7 days, with comment counts.
- Each row links to the comment in context (the board view, scrolled to and highlighting the comment).
- Add a red count badge on the sidebar's Feedback or Moderation item when anything is flagged.

### 5.3 PHI quick action (P0)

On any comment, the `⋯` menu includes **Hide as possible PHI**. This is a one-click path that:
1. Sets status to `hidden` with reason `phi`.
2. Sends the author a private notice (see 6.3).
3. Writes an audit log entry.

### 5.4 Faculty markers (P2)

Two optional badges, distinct from votes and from the existing blue "Faculty" author badge:
- ✅ **Faculty-endorsed** (green)
- ⚠️ **Needs correction** (amber), optionally with a one-line correction note that appears directly under the comment

Add a board-level toggle in the board edit form: **"Show vote scores to students"** (default on).

### 5.5 Board lifecycle controls (P2)

In the faculty board view header, add a controls row:
- **Lock board** (stops new comments and votes immediately, independent of dates)
- **Lock thread** (per root comment, in the `⋯` menu)
- **Extend close date** (quick +3 / +7 days, or reopen if Closed)
- **Closing summary** (rich textarea; appears as a highlighted card above the thread once the board is Closed or locked)

### 5.6 Audit log view (P0)

On the board view, add an **Activity** tab or drawer, faculty-only, listing every moderation action: time, faculty member, action, reason, and a link to the comment. Include a "Download CSV" button (prototype can stub it with a toast).

---

## 6. Student UI

### 6.1 Report action (P0)

Add a **Report** link next to Reply on every comment that isn't the student's own. Opens a small popover with reasons (Possible patient information / Medically inaccurate / Unprofessional / Other), an optional note, and a Submit button. Confirmation toast: "Thanks. Faculty will review this."

Students cannot see who else reported or how many reports exist.

### 6.2 PHI reminder (P0)

Above the comment box on every board, add a persistent, compact notice:

> **Protect patient privacy.** Don't include names, MRNs, dates of birth, exact dates of service, or anything that could identify a patient.

Optional: as the student types, if the text matches simple patterns (e.g., 7–10 digit numbers, `MRN`, date formats like `10/12/1984`), show an inline warning: "This looks like it may contain identifying information. Please review before posting." Don't block posting.

### 6.3 Removed and hidden states (P0)

- **Hidden:** show "This comment is hidden while faculty review it."
- **Removed:** show "This comment was removed by faculty." Do not show the reason publicly.
- **To the author only:** show a small banner on their own removed/hidden comment with the reason and any note, e.g. "Removed by faculty: possible patient identifier. Please repost without identifying details."
- Replies remain visible under placeholders so conversations still read coherently.

### 6.4 Pinned and marked comments (P0/P2)

- Pinned comments appear at the top with 📌 "Pinned by faculty".
- Endorsed and Needs-correction badges are visible to students. Private notes are never visible.
- If `showScores` is false, replace the score number with nothing and keep only a simple "helpful" toggle (or hide voting entirely), per board setting.

### 6.5 Own-comment edit/delete (P3)

For 10 minutes after posting, students can edit or delete their own comment. After that, only delete → "Deleted by author" placeholder. Edited comments show an "edited" label.

---

## 7. States to design

Please cover each of these for both roles where applicable:

1. Visible comment (default)
2. Pinned comment
3. Endorsed / Needs-correction comment
4. Hidden comment (faculty view vs. student view vs. author view)
5. Removed comment (faculty view vs. student view vs. author view)
6. Comment with active reports (faculty view shows a flag icon and count)
7. Locked thread and locked board
8. Closed board with closing summary
9. Empty moderation queue ("Nothing needs attention")
10. Remove-confirmation modal and Report popover

---

## 8. Seed data to add

Extend the existing sample boards so every state above is demonstrable:

- On board **b1** ("Overnight escalation"): pin one Faculty comment; add one student comment with 2 PHI reports (e.g., a comment that includes "Mr. J, MRN 4482913"); add one comment marked "Needs correction" with a short correction note.
- On board **b2** ("Progress note peer review"): add one hidden comment.
- On board **b3** ("Week 1 reflections", already Closed): add a closing summary.
- Add 3–4 audit log entries across the boards.
- Dashboard Moderation card should show a non-zero count out of the box.

---

## 9. Acceptance criteria

- [ ] Signed in as Faculty, I can remove, hide, restore, and pin any comment from the board view.
- [ ] Removing a comment requires a reason and writes an audit log entry.
- [ ] Replies under a removed or hidden comment remain visible.
- [ ] Signed in as Student, I never see the `⋯` menu, private notes, report counts, or the audit log.
- [ ] A student can report a comment, and it then appears in the faculty Flagged tab.
- [ ] The PHI reminder shows above the comment box for every board.
- [ ] The author of a removed comment sees the reason; other students do not.
- [ ] The faculty dashboard shows a Moderation card with live counts.
- [ ] Lock board / extend close date visibly change the board status and disable or enable commenting.
- [ ] All new faculty controls use the existing Bootstrap styling, spacing, and badge patterns of the prototype.

---

## 10. Prototype notes and caveats

- Roles are a front-end flag in the prototype. Add a visible prototype hint such as "Role enforcement happens on the server in production" where appropriate.
- Keep new copy consistent with the app's tone: short, plain, professional.
- Use the existing toast, confirmation modal, and badge patterns instead of introducing new component styles.
- For production, decide whether comments are attributed by name or anonymous to peers (faculty always see authorship). This prototype assumes named attribution.
