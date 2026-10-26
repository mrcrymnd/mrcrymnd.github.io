# Threaded Discussion Design Principles

Design reference for a threaded discussion interface (posts, replies, and replies to replies), based on what makes Reddit's model work.

## Core idea

Threading is not just a layout choice. It shapes how conversations unfold. Nesting makes the structure of a conversation visible, and combined with voting it lets quality content surface without heavy moderation.

---

## Principles

### 1. Replies stay attached to what they respond to
- Every reply is visually and structurally linked to its parent comment.
- Users never need to restate context ("as I said above...", "@username").
- In flat feeds, replies to older comments float out of context and conversations become hard to follow.

**Design implications**
- Indent child comments under their parent.
- Use connecting lines or a left-border "thread line" to show lineage.
- Make the parent-child relationship obvious at a glance.

### 2. Many conversations happen in parallel
- A single post can host many separate sub-discussions, each exploring a different angle.
- A tree lets readers follow the branch they care about and ignore the rest.
- A flat feed interleaves everything into one confusing stream.

**Design implications**
- Treat each top-level comment as the root of its own mini-conversation.
- Give branches enough visual separation that they read as distinct discussions.

### 3. Collapsing gives readers control
- Hierarchy makes it possible to fold an entire branch with one action.
- Readers can skim top-level takes, then dive into only the discussions that interest them.
- This is what lets threads scale to thousands of comments.

**Design implications**
- Make the collapse target large and easy to hit (e.g., the thread line itself, plus a header toggle).
- Show a compact summary when collapsed (author, reply count, maybe a snippet).
- Remember collapse state during the session.

### 4. Voting plus threading surfaces quality
- Comments are sorted by votes within each level.
- The best top-level comment rises, and the best reply to each comment rises beneath it.
- Every branch has its own mini-leaderboard, so useful content floats up without direct moderation.

**Design implications**
- Sort siblings independently at every level.
- Offer multiple sort options (best, top, new, controversial).
- Keep vote controls lightweight and close to each comment.

### 5. Depth is rewarded
- Disagreements and follow-up questions play out as a chain the reader can follow in order.
- Some of the best content is a long back-and-forth or an expert explaining step by step to a skeptic.
- That only works when replies are visibly linked.

**Design implications**
- Support deep nesting, but handle it gracefully (see Pitfalls).
- Make it easy to read a single chain top to bottom.

### 6. Replying is low-cost
- Replying to a specific comment is lighter than composing a new top-level comment.
- Users don't need a grand take, just a response to the thing in front of them.

**Design implications**
- Inline reply box that opens directly beneath the comment being answered.
- Minimal friction: one tap to open, no modal or page change.
- Keep the parent comment visible while writing.

---

## Supporting context (not just threading)

Threading works especially well because it sits alongside other systems:

| System | Role |
| --- | --- |
| Communities (subreddits) | Define what's on-topic and set norms |
| Voting | Ranks content within each level of the tree |
| Pseudonymity | Lowers the barrier to participating honestly |
| Threading | Organizes what's said into followable conversations |

When designing a similar product, consider which of these you are adopting, since threading alone won't replicate the effect.

---

## Pitfalls to design around

- **Deep threads get narrow.** Indentation eats horizontal space, especially on mobile. Consider capping visual indent depth and offering a "continue this thread" view that re-roots the conversation.
- **Early-comment advantage.** Early comments accumulate votes and replies first, so they dominate visibility. Consider sort options or ranking tweaks that give newer comments a chance (e.g., time-decay, "new" sort, randomized exposure).
- **Hard to see the whole picture.** Heavy nesting can hide the overall shape of a discussion. Collapsing and clear summaries help.
- **Mobile constraints.** Small targets for collapse and reply, plus narrow columns, need deliberate treatment.

---

## Design checklist

- [ ] Parent-child relationships are visually obvious (indentation and/or thread lines)
- [ ] Any branch can be collapsed in one action, with a useful collapsed summary
- [ ] Siblings are sorted independently at every level
- [ ] Multiple sort options available
- [ ] Inline reply opens beneath the target comment, with parent still visible
- [ ] Deep nesting handled (indent cap, "continue thread" pattern)
- [ ] Mobile layout tested for narrow widths and tap targets
- [ ] Newer comments have a path to visibility, not just early ones

---

## Open questions for this project

- What is the community or topic structure (if any) that scopes discussions?
- Will users be pseudonymous, named, or both?
- What is the voting model (up/down, up only, reactions)?
- What is the maximum visual nesting depth before re-rooting?
- Is the primary platform desktop, mobile, or both?
