# Learning Record 0002 — Controller Block Diagram (Restarted Session)

**Date:** 2026-08-30 (today — restarted session after 08-15)
**Phase:** Phase 1 — Foundations
**Status:** Completed with user's own diagram and explanation.

## What was taught
Lesson 0002 (Controller Block Diagram): 7 controller blocks, 3 data paths (write, read, GC), DRAM contents, channel/way parallelism.

## Deliverable completed
User drew controller diagram with all 7 blocks, 8 channels × 4 dies, DRAM labeled "mapping table + write buffers," and traced the 3 paths. Verified by agent; no gaps.

## User's explanation (key insight, captured)
- Controller = ARM-based SoC; its job is making unreliable NAND act like a reliable disk.
- Power-loss protection (capacitors) flush DRAM on error — explains the 30-second startup delay after cold boot.
- GC competes for channels/dies with host I/O — explains full-drive slowdown.

## Next session
Lesson 0003 (FTL Part 1: Mapping) — next weekend slot. User confirmed they want to continue the study plan.

## Revisions / notes
- 2026-08-30: Restarted from Lesson 1. Completed Lesson 1 deliverable (journal entry) and Lesson 2 diagram.
- Previous session's retention-loss explanation (read disturb vs retention) was correct and retained.
