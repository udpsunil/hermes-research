# SSD Debug Architect — Detailed Weekend Study Plan (24 Weekends)
~6-8 hours per weekend (Sat 3-4h + Sun 3-4h). Weekdays: only 15-min optional reviews.
Companion to `ssd_debug_research.md`

**Start-date anchor:** Weekend 1 = Aug 21–22, 2026 (launched Fri Aug 21). All weekend numbering counts from here.

---

# PHASE 1: FOUNDATIONS (Weekends 1–4)

## Wknd 1 — NAND Flash Basics
**Goal:** Understand the physical medium every SSD debug problem ultimately traces back to.

**Saturday (3-4h):**
- 0:00-0:15 — Skim the ETH Zurich PDF's table of contents; note sections to cover
- 0:15-2:00 — Read first half: floating-gate cells, SLC/MLC/TLC/QLC trade-offs (speed, endurance, cost)
- 2:00-2:15 — Break
- 2:15-3:30 — Pages vs blocks: read/program/erase asymmetry, why program must be sequential within a block
- 3:30-4:00 — Notes: draw a die → plane → block → page hierarchy diagram

**Sunday (3-4h):**
- 0:00-1:30 — Finish PDF: P/E cycles & endurance, read disturb, retention errors, program/erase disturb
- 1:30-1:45 — Break
- 1:45-3:00 — Write 1-page summary: "Why NAND can't overwrite in place" (must mention: erase-before-write, block granularity, voltage thresholds)
- 3:00-3:30 — Self-quiz: list 4 NAND error sources from memory (disturb, retention, wear, read noise)
- 3:30-4:00 — Log deliverable in your notes folder

**Deliverable:** 1-page summary + hierarchy diagram
**Resources:** ETH Zurich "Basics of NAND Flash-Based SSDs" PDF (in ssd_debug_research.md #17)

## Wknd 2 — Controller Architecture
**Goal:** Know every major block inside an SSD controller and what it does.

**Saturday (3-4h):**
- 0:00-1:30 — Cactus Tech primer: channels & banks, why parallelism matters for bandwidth
- 1:30-1:45 — Break
- 1:45-3:00 — alvinrolling.github.io/ssd/SSD-Controller: CPU cores, ECC engine (BCH/LDPC), DRAM cache, host interface (PCIe/NVMe)
- 3:00-4:00 — Notes on each block's failure modes (e.g., ECC uncorrectable → data error; DRAM corruption → mapping loss)

**Sunday (3-4h):**
- 0:00-2:00 — Draw your own controller block diagram: host I/F → CPU → ECC → channel/way fans → NAND dies; DRAM + power (capacitor for power loss) attached
- 2:00-2:15 — Break
- 2:15-3:30 — Annotate the diagram with data paths: host write path vs host read path vs GC internal path
- 3:30-4:00 — Self-quiz: trace a 4KB host write through your diagram aloud

**Deliverable:** Annotated controller block diagram
**Resources:** Cactus Tech primer (#18), alvinrolling SSD-Controller (#13)

## Wknd 3 — FTL Part 1: Mapping & Maintenance
**Goal:** Understand the layer that makes NAND look like a block device.

**Saturday (3-4h):**
- 0:00-1:30 — Logical→physical mapping concept; page-level vs block-level vs hybrid mapping (pros/cons: granularity vs RAM cost)
- 1:30-1:45 — Break
- 1:45-3:00 — SSD-Guide (GitHub #16) FTL section: mapping table size math — why page mapping needs DRAM
- 3:00-4:00 — Notes: worked example — 1TB drive, 4KB pages → 256M entries → 512MB-1GB mapping table

**Sunday (3-4h):**
- 0:00-1:30 — Wear leveling: static vs dynamic; why without it some blocks die 100x sooner
- 1:30-1:45 — Break
- 1:45-3:00 — Bad-block management: factory vs grown bad blocks, PSL (primary/supplementary replacement)
- 3:00-3:45 — Self-quiz: given a 2TB TLC drive, estimate mapping table size and explain wear-leveling strategy
- 3:45-4:00 — Update notes

**Deliverable:** FTL notes + mapping table size worked example
**Resources:** SSD-Guide (#16), LeaFTL paper intro (#15)

## Wknd 4 — FTL Part 2: Garbage Collection & Write Amplification
**Goal:** Master the #1 source of SSD performance anomalies you'll debug in the field.

**Saturday (3-4h):**
- 0:00-1:30 — Garbage collection: valid-page migration, victim block selection (greedy, cost-benefit), free-block watermarks
- 1:30-1:45 — Break
- 1:45-3:00 — Write amplification: WA = NAND writes / host writes; why WA can hit 3-10x on full drives
- 3:00-4:00 — Over-provisioning: 7%/28% OP trade-offs; OP vs steady-state performance

**Sunday (3-4h):**
- 0:00-1:00 — TRIM/discard: how host hints prevent GC cost; queued TRIM
- 1:00-1:15 — Break
- 1:15-2:30 — Read LeaFTL intro + background sections for a research view of FTL
- 2:30-3:30 — **Milestone self-test (no notes, aloud):** explain GC → WA → OP → TRIM chain; record yourself, listen back, note gaps
- 3:30-4:00 — Fill identified gaps from notes

**Deliverable:** GC/WA explainer (voice memo or 1-pager); Phase 1 complete ✅
**Milestone check:** You should now be able to answer "why is my SSD slow when nearly full?" without notes.

---

# PHASE 2: PROTOCOLS & FIRMWARE (Weekends 5–8)

## Wknd 5 — NVMe Specification
**Goal:** Speak the host-controller language fluently; know the debug-relevant commands.

**Saturday (3-4h):**
- 0:00-2:00 — NVMe 2.0 base spec (nvmexpress.org/developers, free download) ch.1-3: queue model — submission queues (SQ), completion queues (CQ), doorbell registers, MSI-X interrupts
- 2:00-2:15 — Break
- 2:15-3:30 — Admin queue vs I/O queues; namespace concept; command flow diagram (host writes SQE → rings doorbell → controller fetches → posts CQE → interrupts)
- 3:30-4:00 — Notes: draw the SQ/CQ/doorbell diagram yourself

**Sunday (3-4h):**
- 0:00-1:30 — Spec ch.4-5: key admin commands (Identify, Get Features/Log Page, Format, Firmware Download/Commit) — these are your debug levers
- 1:30-1:45 — Break
- 1:45-3:00 — Install nvme-cli (Linux or WSL2): `nvme list`, `nvme id-ctrl`, `nvme smart-log`, `nvme error-log`, `nvme get-feature`
- 3:00-3:45 — Decode YOUR drive's SMART log: temperature, percentage_used, media_errors, unsafe_shutdowns
- 3:45-4:00 — Save outputs to notes for later comparison

**Deliverable:** SQ/CQ diagram + your drive's SMART baseline snapshot
**Resources:** NVMe spec (nvmexpress.org), nvme-cli (GitHub)

## Wknd 6 — Firmware Structure
**Goal:** Understand how SSD firmware is organized — the code you'll debug.

**Saturday (3-4h):**
- 0:00-2:00 — *Beginner's Guide to SSD Firmware* (Thirumalai, Springer/Apress): boot flow — boot ROM → boot loader → firmware image; why dual-bank firmware (A/B) enables safe updates
- 2:00-2:15 — Break
- 2:15-3:30 — ISR architecture: NAND controller interrupts, PCIe interrupts; top-half/bottom-half handling; why ISR latency = I/O latency
- 3:30-4:00 — Notes: firmware boot sequence diagram

**Sunday (3-4h):**
- 0:00-1:30 — Queue management inside firmware: host queue → internal command queue → NAND scheduler; command interleaving across channels
- 1:30-1:45 — Break
- 1:45-3:00 — Power-loss handling: capacitor hold-up, flush-on-fail, FTL journaling; what happens to in-flight writes
- 3:00-4:00 — Update your Wknd 2 controller diagram with firmware components (tasks, queues, ISRs)

**Deliverable:** Firmware-annotated architecture diagram
**Resources:** Beginner's Guide to SSD Firmware (#14/#9)

## Wknd 7 — Linux NVMe Driver + fio
**Goal:** See the host side of the stack; establish your personal performance baseline.

**Saturday (3-4h):**
- 0:00-2:00 — Linux kernel source `drivers/nvme/host/`: core.c (main state machine), nvme.h (key structs: nvme_ctrl, nvme_ns, nvme_queue), pci.c (queue allocation)
- 2:00-2:15 — Break
- 2:15-3:30 — Trace one I/O: bio → nvme queue → SQE → doorbell → CQE → bio completion. Use lwn.net articles on NVMe if source is dense
- 3:30-4:00 — Notes: host-side I/O path diagram

**Sunday (3-4h):**
- 0:00-0:30 — Install fio; read `fio --cmdhelp` basics
- 0:30-2:00 — Run baseline suite on your drive:
  - `fio --name=seqread --rw=read --bs=1M --iodepth=32 --runtime=30 --time_based`
  - `fio --name=seqwrite --rw=write --bs=1M --iodepth=32 --runtime=30 --time_based`
  - `fio --name=randread --rw=randread --bs=4k --iodepth=32 --runtime=30 --time_based`
  - `fio --name=randwrite --rw=randwrite --bs=4k --iodepth=32 --runtime=30 --time_based`
- 2:00-2:15 — Break
- 2:15-3:30 — Record IOPS/latency (avg + p99) in a spreadsheet — this is your baseline
- 3:30-4:00 — Re-run one test with iodepth=1; note the latency difference (queue depth effect)

**Deliverable:** Host I/O path diagram + fio baseline spreadsheet
**Resources:** Linux NVMe driver source, fio (GitHub)

## Wknd 8 — Buffer + Mini-Project
**Goal:** Consolidate Phase 2; build your first automation tool.

**Saturday (3-4h):**
- 0:00-3:00 — Catch-up: anything unfinished from Wknd 5-7
- 3:00-4:00 — Re-read your Phase 2 diagrams; fix errors you now spot (sign of real learning)

**Sunday (3-4h):**
- 0:00-2:30 — **Mini-project:** Python/bash script `smart_fio_check.sh` that: dumps `nvme smart-log` + `error-log` → runs one fio profile → dumps SMART again → diffs the two snapshots
- 2:30-3:30 — Run it; save output as your "drive health report" template
- 3:30-4:00 — Phase 2 review quiz: 10 questions self-written from notes

**Deliverable:** Working smart+fio check script; Phase 2 complete ✅
**Milestone check:** You can now explain the full host→firmware→NAND path end to end.

---

# PHASE 3: DEBUG & VALIDATION (Weekends 9–13)

## Wknd 9 — Debug Frameworks & Root Cause Analysis ⭐ CORE WEEKEND
**Goal:** Learn how professionals find firmware root causes — the heart of your architect goal.

**Saturday (3-4h):**
- 0:00-2:00 — Read "Data-Driven Debugging and Root Cause Analysis for Firmware Issues in SSDs" (IEEE #9): telemetry collection pipeline, failure signature clustering, RCA workflow
- 2:00-2:15 — Break
- 2:15-3:30 — Re-read the case studies in the paper; for each: symptom → data collected → hypothesis → root cause
- 3:30-4:00 — Notes: the paper's debug workflow as a flowchart

**Sunday (3-4h):**
- 0:00-1:30 — Read "Debug and Diagnostics Framework for SSD Program" (Thapar PDF): on-target debug hooks, trace buffers, assertion frameworks
- 1:30-1:45 — Break
- 1:45-3:00 — Compare both papers' approaches: field telemetry vs on-target instrumentation. Table: what each catches, what each misses
- 3:00-3:45 — Write notes: failure classification taxonomy (HW vs FW vs config; reproducible vs Heisenbug)
- 3:45-4:00 — Start your **debug journal**: a running doc with columns [Date | Anomaly | Hypothesis | Test | Conclusion]

**Deliverable:** RCA flowchart + debug journal (started)
**Resources:** IEEE papers #7, #3 in ssd_debug_research.md

## Wknd 10 — Stress Testing & Validation
**Goal:** Learn to break SSDs systematically before customers do.

**Saturday (3-4h):**
- 0:00-2:00 — VST paper (IEEE #11): virtual stress testing of FTL — how it injects corner-case I/O sequences to find FTL bugs
- 2:00-2:15 — Break
- 2:15-3:30 — List the corner cases VST covers: power-cut timing, queue overflow, mapping table races, TRIM during GC
- 3:30-4:00 — Notes: corner-case taxonomy for your own testing

**Sunday (3-4h):**
- 0:00-1:30 — "Accelerating SSD System Validation" (IEEE #1): post-silicon validation, test coverage metrics
- 1:30-1:45 — Break
- 1:45-3:00 — Build YOUR stress profile in fio: mixed random read/write with varying iodepth + occasional TRIM (`--rw=randrw --rwmixread=70 --trim_percentage=10`)
- 3:00-3:45 — Run it 30 min; capture SMART before/after with your Wknd 8 script
- 3:45-4:00 — Journal entry: what drifted in SMART? Any latency spikes in fio output?

**Deliverable:** Personal stress-test profile + first journal data
**Resources:** VST (#11), Validation paper (#1)

## Wknd 11 — Simulation & Prototyping
**Goal:** Know the tools that let you debug FTL logic without hardware.

**Saturday (3-4h):**
- 0:00-2:00 — Amber paper (IEEE #6): full-system SSD simulation, resource modeling (channels, dies, DRAM), timing fidelity
- 2:00-2:15 — Break
- 2:15-3:30 — Why simulate: reproduce rare races deterministically, test FTL changes pre-silicon
- 3:30-4:00 — Notes: what Amber models vs what it abstracts away

**Sunday (3-4h):**
- 0:00-1:30 — Simulator survey (Springer #5): skim for the landscape — Amber, MQSim, SSDSim, DiskSim+SSD extension, SoftSSD
- 1:30-1:45 — Break
- 1:45-3:15 — Build comparison table: [Simulator | Type (trace/exec) | Fidelity | Speed | FTL modifiable? | Best for]
- 3:15-4:00 — Optional: clone MQSim, build it, run the sample workload (proof of life)

**Deliverable:** Simulator comparison table
**Resources:** Amber (#6), survey (#5), SoftSSD (#4), MQSim (GitHub)

## Wknd 12 — Hands-On Debug Practice
**Goal:** Apply the Phase 3 methodology to your own hardware.

**Saturday (3-4h):**
- 0:00-1:00 — Design an experiment: hypothesis-driven. E.g., "H1: sustained random writes trigger GC → latency spikes at p99"
- 1:00-3:00 — Run 2h sustained mixed workload with your stress profile; log fio output every 10 min
- 3:00-3:30 — Plot/inspect latency-over-time (fio's `--write_bw_log`, then graph)
- 3:30-4:00 — SMART delta analysis with your script

**Sunday (3-4h):**
- 0:00-1:00 — Analyze: did H1 hold? What's the evidence? What alternative explanations exist?
- 1:00-2:30 — Write full journal entries: [Anomaly | Data | Hypotheses (≥2) | Test design | Result | Conclusion]
- 2:30-3:30 — Second experiment if time: "H2: iodepth=1 latency floor is set by NVMe command overhead" (compare vs Wknd 7 data)
- 3:30-4:00 — Update debug journal; note which paper techniques you actually used

**Deliverable:** Two completed RCA journal entries with real data
**Milestone check:** You've done a real root-cause analysis end to end.

## Wknd 13 — Phase 3 Consolidation
**Goal:** Turn 5 weekends of material into YOUR methodology.

**Saturday+Sunday (6-8h):**
- Write a 2-3 page document: "My SSD Debug Methodology" containing:
  1. Your failure classification taxonomy
  2. Your data collection checklist (SMART, error-log, fio, traces)
  3. Your RCA workflow flowchart (from Wknd 9, refined)
  4. Your stress-test corner-case list (from Wknd 10)
  5. Tool decision table: when to use nvme-cli vs fio vs simulator vs hardware
- Peer-review trick: explain it to a colleague/friend; note every question you can't answer

**Deliverable:** Personal debug methodology doc; Phase 3 complete ✅

---

# PHASE 4: PROJECT (Weekends 14–24)

## Wknd 14 — OpenSSD Environment Setup
- Sat: Order/locate Cosmos+ board OR install the OpenSSD emulator (openssd.io); install toolchain (Vivado if hardware, or just GCC for emulator)
- Sun: Build the reference firmware from source — unmodified. Document every setup snag (these are your first debug journal entries!)

**Wknd 15 — Cosmos Firmware Walkthrough I**
- Sat: Repo structure: simple SSD firmware (bare-metal) vs Cosmos+ (FreeRTOS). Read main loop, host interface task
- Sun: NAND layer: channel/way abstraction, NAND command flow. Diagram the call graph

## Wknd 16 — Cosmos Firmware Walkthrough II
- Sat: FTL in Cosmos: mapping table, GC, wear leveling — compare against your Phase 1 notes (theory vs real code)
- Sun: Build & flash/run on board or emulator; run a host I/O test against it; verify with fio

## Wknd 17 — Debug Hook Design
- Sat: Design your logging framework: ring buffer in SRAM/DRAM, event types (I/O start/finish, GC start/stop, mapping miss), timestamp source
- Sun: Implement event-logging API (log_event(type, data)); keep overhead <1% — measure it

## Wknd 18 — Debug Hook Integration
- Sat: Instrument key FTL paths: GC invocation, victim selection, mapping updates, error paths
- Sun: Run workload; dump log via debug UART/console; decode it into human-readable timeline

## Wknd 19 — FTL Modification I
- Sat: Pick ONE change: e.g., different GC victim-selection policy (greedy → cost-benefit) or page-mapping granularity change
- Sun: Implement it behind a compile flag (old behavior preserved)

## Wknd 20 — FTL Modification II
- Sat: A/B test: run identical fio workloads on old vs new FTL; collect IOPS/latency + your debug logs
- Sun: Analyze: performance delta, WA change (compute NAND writes from your logs!), side effects

## Wknd 21 — Stress Testing Your Change
- Sat: Apply Wknd 10 corner cases to your modified FTL; hunt for bugs your change introduced
- Sun: Any bug found → full RCA with your debug hooks (this is the real payoff — your own instrumentation catching a real FTL bug)

## Wknd 22 — Bug Fixing & Hardening
- Sat: Fix bugs found; add regression tests (replay the failing I/O sequence)
- Sun: Re-run full stress suite clean; document before/after

## Wknd 23 — Final Report
- Write project report: [Objective | Architecture overview | Debug framework built | Modification made | A/B results | Bugs found & RCA | Lessons learned]
- This document is your portfolio piece for "debug architect" credibility

## Wknd 24 — Buffer / Publication
- Catch-up, or polish and publish: GitHub repo with code + report, blog post, or internal tech-talk slides

---

# WEEKDAY MICRO-HABITS (15 min/day, optional)
- **Mon:** Review weekend notes (spaced repetition — 15 min)
- **Wed:** Skim 1 paper abstract (from survey's citation list)
- **Fri:** Read your plan's goals for the coming weekend (2 min) + prep any downloads

# RULES OF THUMB
1. **Slippage:** If a weekend is lost to office/family, shift everything by one weekend — buffers at Wknd 8, 13, 24 absorb this. Never compress two weekends into one.
2. **Hands-on > reading:** Never swap a hands-on Sunday for extra reading. Reading fits weekday 15-min slots; hardware time doesn't.
3. **Journal always:** Every anomaly → journal entry, even trivial ones. The habit IS the skill.
4. **Depth check:** If you can't explain a concept aloud without notes, you haven't learned it — schedule a 30-min review before moving on.
5. **Progress tracking:** Tell Hermes when you finish a weekend so the Saturday reminder stays in sync.
