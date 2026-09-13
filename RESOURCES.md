# SSD Debug Architect — Resource Collection

## Primary Learning Resources

### 1. Codingpirate.com — Understanding Computer Memory Architecture
**URL:** https://codingpirate.com/understanding-computer-memory-architecture-ac9320110787  
**Value:** Covers memory hierarchy, CPU cache, basic memory structure (width/depth model), read/write operations, interfaces (address bus, data bus, RW enable, clock).  
**Relevance:** Foundation for understanding how memory systems are organized before applying to SSD internals.  
**Cached:** `cache/web/codingpirate.com-39e0ff6df4.md` (11,067 chars head + 3,547 chars tail)

### 2. ETH Zürich — Basics of NAND Flash-Based SSDs (PDF)
**URL:** https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_2nd_before_  
**Value:** 72-page comprehensive PDF covering NAND organization, FTL, garbage collection, wear-leveling, SSD organization & request handling.  
**Note:** Previously inaccessible (workspace path restriction); now cached if available.

### 3. SPDK FTL Documentation
**URL:** https://github.com/spdk/spdk/blob/master/doc/ftl.md  
**Value:** Flash Translation Layer reference from SPDK — logical-to-physical address mapping, garbage collection, relocation, P2L rebuild after power failure, over-provisioning.  
**Key sections:** FTL mapping, garbage collection & relocation, metadata persistence, FTL bdev stack creation.

### 4. SPDK SSD Internals
**URL:** https://github.com/spdk/spdk/blob/master/doc/ssd_internals.md  
**Value:** NAND Flash SSD fundamentals — erase block asymmetry, logical-to-physical mapping, FTL, garbage collection, over-provisioning, benchmarking considerations.  
**Key concepts:** Block erase requirements, sequential write optimization, WAF (Write Amplification Factor), forcing known SSD state for benchmarks.

### 5. OpenFlash Controller Lab
**URL:** https://github.com/manishklach/openflash-controller-lab  
**Value:** Open-source NAND flash controller architecture lab with executable FTL, channel scheduler simulator, fio workloads.  
**Learning path:** FTL module (page mapping, striping, invalidation, live-page relocation), scheduler (FIFO and starvation-bounded read priority), queue transport, ECC, wear-leveling.

### 6. OpenNANDLab
**URL:** https://github.com/muditbhargava66/OpenNANDLab  
**Value:** 3D NAND research platform with defect handling, performance optimization, firmware integration, NAND characterization.

### 7. nandsight — From-Scratch NAND/SSD Firmware Simulator
**URL:** https://github.com/Atishay8192261/nandsight  
**Value:** C++ simulator with end-to-end instrumentation, Claude agent for trace explanation, Python workload generators (seq/zipfian/mixed), real Mac SSD captures via fio iolog.  
**Key features:** Page-level FTL with bidirectional L2P/OOB reverse map, greedy/cost-benefit GC, dynamic wear-leveling, bad-block management, timing simulation, TRIM support, interactive dashboard.

### 8. CMU SAFARI MQSim — FTL Reference Implementation
**URL:** https://github.com/CMU-SAFARI/MQSim/blob/master/src/ssd/FTL.cpp  
**Value:** Academic FTL implementation with steady-state analysis, greedy/RGA/RG policies, hot/cold traffic separation, block selection policies.

## Research Papers (Academic)

### 1. Modelling and Managing SSD Write-amplification
**URL:** https://arxiv.org/pdf/1504.00229  
**Value:** Mathematical modeling of write-amplification vs over-provisioning under uniform workloads. Derives expressions relating OP to WAF. Covers FTL block manager design for hot/cold page separation.

### 2. Write Amplification Analysis in Flash-based SSDs
**URL:** https://dl.acm.org/doi/10.1145/1534530.1534544  
**Value:** Probabilistic model of write amplification for log-structured flash-based SSDs.

### 3. SSDFS: Towards LFS Flash-Friendly File System without GC
**URL:** https://arxiv.org/pdf/1907.11825  
**Value:** Proposes a file system that co-designs with flash memory to reduce write amplification and GC overhead. Covers FTL internals, GC, wear leveling in detail.

### 4. Garbage Collection Techniques in SSDs (Survey 2026)
**URL:** https://dl.acm.org/doi/10.1145/3816041  
**Value:** Jun 2026 survey — comprehensive GC techniques review, write amplification reduction, buffer cache integration (GCaR).

### 5. Extending Flash Storage Lifetime through Reducing Write Amplification (FAST '13)
**URL:** https://www.usenix.org/system/files/conference/fast13/fast13-final110.pdf  
**Value:** OFTL design — object-based flash translation layer. Demonstrated 47-89% WAF reduction. Covers FTL architectures (block-level, log-structured, object-based).

### 6. MiDAS: Minimizing Write Amplification in Log-Structured Systems (FAST '24)
**URL:** https://www.usenix.org/system/files/fast24-oh.pdf  
**Value:** Data placement optimization for flash-based SSDs. 24 citations. Focuses on hot/cold data separation for WAF reduction.

### 7. Garbage Collection Optimization with Data Separation (2025)
**URL:** https://www.sciencedirect.com/science/article/pii/S1879239125000694  
**Value:** GC overhead, WAF, and software stack inefficiencies in NAND flash storage.

### 8. Learning-Based Data Separation for WAF Reduction (DAC '23)
**URL:** https://dl.acm.org/doi/epdf/10.1109/DAC56929.2023.10247795  
**Value:** ML-based data lifetime prediction for hot/cold separation — reduces host-side burden compared to prior approaches.

## Supplementary Resources

## Reference & Study Materials (downloaded locally)

- `materials/PAID_MATERIALS_SHOPPING_LIST.md` — Paid learning materials list
- `materials/MATERIALS_INDEX.md` — Index of all materials
- `RESOURCES.md` — This resource collection (current file)
- `learning-records/0001-nand-flash-basics.md` — NAND Flash Basics lesson (completed)
- `learning-records/0002-controller-block-diagram.md` — Controller Block Diagram lesson (completed)
- `lessons/0001-nand-flash-basics.html` — HTML Lesson 1
- `lessons/0002-controller-block-diagram.html` — HTML Lesson 2

## Study Path Recommendation (Weekend-Only, ~6-8h/weekend)

**Phase 1 (Weekend 1-2):** Memory Hierarchy & NAND Basics
- codingpirate.com memory architecture article
- ETH Zürich PDF (NAND Flash Organization)
- OpenNANDLab overview (architecture tour)

**Phase 2 (Weekend 3-4):** FTL & Channel Architecture
- SPDK FTL documentation (mapping, GC, relocation)
- SPDK SSD Internals (asymmetry, over-provisioning, WAF)
- OpenFlash Controller Lab — FTL module reading

**Phase 3 (Weekend 5-6):** Simulation & Debug Skills
- nandsight simulator — run built-in workloads, observe GC events, WAF, wear heatmap
- MQSim FTL source code review (steady-state block status probability)
- Practice: trace a write workload from LBA → GC → new physical location

**Phase 4 (Weekend 7+):** Advanced Debug Topics
- Write amplification formulas and calculations
- Garbage collection victim selection strategies
- Power-loss recovery & P2L rebuild
- Wear leveling metrics and endurance modeling

## Action Items

1. **Download nandsight** — clone the repo, build, and run the default workload to observe FTL + GC behavior in real time.
2. **Read SPDK FTL doc** — focus on mapping, GC & relocation, and metadata persistence sections.
3. **Update RESOURCES.md** — add any new resources found during research.
4. **Plan Lesson 3** — FTL Part 1: Page-level mapping schemes (flat vs. striped vs. multi-channel), LBA-to-VBLK/PBLK math.

---
*Last updated: 2026-09-09*  
*Generated from browser search: SPDK docs, OpenFlash Lab, nandsight, MQSim, OpenNANDLab*