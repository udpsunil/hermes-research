# Learning Record 0001 — Course Start: NAND Flash Basics

**Date:** 2026-08-30 (today's session)
**Phase:** Phase 1 — Foundations
**Status:** Completed

## What was taught
Lesson 0001 (NAND Flash Basics): page/block/cell hierarchy, erase-before-write constraint, cell types (SLC→QLC) and endurance trade-offs, four NAND error sources (wear, read disturb, retention, program disturb), ECC/RBER/UBER telemetry signals.

## Key insight targeted
The single physical constraint — erase-before-write at block granularity — explains the existence of the FTL, garbage collection, and write amplification. Everything in later phases traces back to it.

## Status
- Lesson delivered; quizzes embedded (3 retrieval-practice questions)
- Deliverable received: user's one-paragraph summary (start of debug journal) pasted below
- Sunday session (controller block diagram) ready to start

## User's one-paragraph summary (verbatim)
In NAND, write and read happens in 4KB pages or 16KB pages. However erase happens in block size which is in range of MBs. This is due to the way NAND cells are arranged. Only program can raise the voltage level and Erase can lower the voltage level. To lower the voltage level one of the voltage lines is used which is connected to all the cells in the block so erase always works on block level.

Due to this, we need to maintain NAND, this is done by garbage colleciton which performs several NAND algorithms related to wear levelling, read scrub etc. We also get write amplification due to relocation of the data and then we have FTL.

## Next session (ZPD)
Weekend 1 Sunday: controller block diagram lesson. User works in the field, so depth is appropriate; keep lessons ≤45 min with one tangible win each.

## Revisions
- 2026-08-30: Lesson completed, journal entry recorded.