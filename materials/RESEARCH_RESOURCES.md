# SSD Debug Architect — Research Resource Pack

**Purpose:** Curated list of additional research papers, technical docs, and reference materials for the SSD Debug Architect study plan.
**Generated:** 2026-09-09

## Research Papers (Academic)

### Write Amplification & Garbage Collection
1. **"Modelling and Managing SSD Write-amplification"** — arxiv 1504.00229
   https://arxiv.org/pdf/1504.00229
   Mathematical model relating over-provisioning to WAF; hot/cold page separation in FTL block manager.

2. **"Write Amplification Analysis in Flash-based SSDs"** — ACM 10.1145/1534530.1534544
   https://dl.acm.org/doi/10.1145/1534530.1534544
   Probabilistic model of WAF for log-structured flash SSDs.

3. **"SSDFS: Towards LFS Flash-Friendly File System without GC"** — arxiv 1907.11825
   https://arxiv.org/pdf/1907.11825
   Co-designed file system + flash memory to reduce GC overhead and WAF; covers FTL internals in detail.

4. **"Garbage Collection Techniques in Solid-State Drives (SSDs)"** — ACM 10.1145/3816041 (Jun 2026 survey)
   https://dl.acm.org/doi/10.1145/3816041
   Comprehensive GC survey; covers conventional and emerging architectures; GCaR buffer cache integration.

5. **"On the Impact of Garbage Collection on Flash-Based SSD Endurance"** — USENIX InFlow 2016
   https://www.usenix.org/conference/inflow16/workshop-program/presentation/verschoren
   Mean-field model of GC impact on endurance and PE fairness; shows uniform random writes don't need wear leveling.

### FTL Architectures
6. **"A Survey of Flash Translation Layer"** — Journal of Systems Architecture (2009)
   https://dl.acm.org/doi/10.1016/j.sysarc.2009.03.005
   Taxonomy of FTL algorithms: sector/block/hybrid mapping; performance results for each.

7. **"LeaFTL: A Learning-based Flash Translation Layer"** — arxiv
   https://nvmw.ucsd.edu/nvmw2023-program/nvmw2023-final10.pdf
   Linear regression-based FTL that reduces mapping table memory footprint; conflict resolution buffer; out-of-band metadata verification.

8. **"A Low-cost Adaptive Data Separation Method for the FTL of SSDs"** — OSTI
   https://www.osti.gov/servlets/purl/1266014
   ASA-FTL: clustering, sampling, recency caching for hot/cold data separation; 28% GC overhead reduction, 15% latency improvement.

### SSD Validation & Debug
9. **"VST: A Virtual Stress Testing Framework for Discovering Bugs in SSD Flash-Translation Layers"** — IEEE (FAST '18)
   Corner-case injection: power-cut timing, queue overflow, mapping table races, TRIM during GC.

10. **"Amber: Enabling Precise Full-System Simulation with Detailed Modeling of All SSD Resources"** — IEEE (FAST '20)
    Full-system SSD simulation with resource modeling (channels, dies, DRAM), timing fidelity; why simulate.

11. **"Accelerating SSD System Validation for First Silicon Success"** — IEEE
    Post-silicon validation methodology, test coverage metrics.

12. **"SoftSSD: Enabling Rapid Flash Firmware Prototyping for Solid-State Drives"** — IEEE (FAST '22)
    Rapid firmware prototyping; open-source implementation.

### Object-Based FTL
13. **"Extending the Lifetime of Flash-based Storage through Reducing Write Amplification from File Systems"** — USENIX FAST '13
    https://www.usenix.org/system/files/conference/fast13/fast13-final110.pdf
    OFTL design; 47-89% WAF reduction vs ext3/btrfs on page-level FTL; FTL architecture comparison (block/log/object).

14. **"MiDAS: Minimizing Write Amplification in Log-Structured Systems"** — USENIX FAST '24
    https://www.usenix.org/system/files/fast24-oh.pdf
    Data placement optimization; 24 citations; hot/cold separation for WAF reduction.

15. **"Garbage Collection Optimization with Data Separation"** — ScienceDirect (2025)
    https://www.sciencedirect.com/science/article/pii/S1879239125000694
    GC overhead, WAF, software stack inefficiencies in NAND flash storage.

16. **"Learning-Based Data Separation for Write Amplification Reduction"** — ACM DAC '23
    https://dl.acm.org/doi/epdf/10.1109/DAC56929.2023.10247795
    ML-based data lifetime prediction; host-side burden reduction.

## Official Specifications & Standards

### NVMe Specifications (Free Downloads)
17. **NVMe Base Specification Rev 2.3** (July 2025, ratified)
    https://nvmexpress.org/wp-content/uploads/NVM-Express-Base-Specification-Revision-2.3-2025.08.01-Ratified.pdf
    Current base spec; queue model, admin/I/O commands, doorbell registers, MSI-X, log pages.

18. **NVMe Base Specification Rev 2.2** (March 2025)
    https://nvmexpress.org/wp-content/uploads/NVM-Express-Base-Specification-Revision-2.2-2025.03.11-Ratified.pdf
    Previous stable version; compatible with Wknd 5 study plan.

19. **NVMe Base Spec 2.0d** (January 2024)
    https://nvmexpress.org/wp-content/uploads/NVM-Express-Base-Specification-2.0d-2024.01.11-Ratified.pdf
    Long-term support version.

20. **NVMe Specification Archives** (all versions)
    https://nvmexpress.org/nvm-express-specification-archives/
    Links to 1.0e through 2.3; changelogs for each revision.

21. **NVMe Specifications Overview Page**
    https://nvmexpress.org/specifications/
    Full set: Base, Command Set (Computational, KV, NVM, SLM, ZNS), Transport (PCIe, RDMA, TCP), Boot, Management Interface.

### JEDEC NAND Standards
22. **JEDEC NAND Flash Standards**
    https://www.jedec.org/standards-documents/search?query=nand
    Standards for NAND flash reliability, endurance, data retention; ONFI (Open NAND Flash Interface) spec.

## Manufacturer Technical Resources

### Micron (Official)
23. **NOR/NAND Flash Guide** (PDF)
    https://assets.micron.com/adobe/assets/urn:aaid:aem:e98bc653-e42d-45a7-9b8c-03cb3d488f05/renditions/original/as/nor-nand-flash-guide.pdf
    NAND selection guide for embedded applications; wear leveling, ECC, controller architecture overview.

24. **Client vs. Enterprise SSD Technical Brief**
    https://assets.micron.com/adobe/assets/urn:aaid:aem:85722ead-fadb-402f-b30b-4bcaf736ad10/renditions/original/as/client-vs-enterprise-performance-use-cases-tech-brief.pdf
    NAND page/block/erase asymmetry explained; GC introduction; client vs enterprise performance differences.

25. **Micron Blog — "How a few trapped electrons changed the world"**
    https://micron.com/about/blog/storage/ssd/how-a-few-trapped-electrons-changed-the-world
    NAND flash history, cell types, 176-layer NAND, QLC SSD (Micron 2500); accessible introduction with engineering depth.

26. **Micron Blog — "Introducing NVMe 2.0, the future of flash"**
    https://micron.com/about/blog/memory/nand/nvme-2-the-future-of-flash
    NVMe 2.0 features: ZNS, Domains/Partitioning, refactoring rationale; good context for next-gen SSD architectures.

27. **Micron 7450 SSD Datasheet**
    https://assets.micron.com/adobe/assets/urn:aaid:aem:335f3d40-65a7-4f52-a1b9-1d4f355f57dc/renditions/original/as/7450_ssd_data_center_transformation.pdf
    Enterprise SSD specs; 176-layer NAND, QoS latency data, form factors.

### Samsung, Kioxia, SK Hynix (Check These)
28. **Samsung Semiconductor — NAND Flash Technical Documentation**
    https://www.samsung.com/semiconductor/minisite/ssd/
    NAND flash datasheets, SSD product brief, endurance/retention specs.

29. **Kioxia (formerly Toshiba Memory) — NAND Flash Resources**
    https://www.kioxia.com/en-us/products/flash-memory/nand.html
    BiCS FLASH technology docs, cell architecture, endurance data.

30. **SK Hynix — NAND Flash & SSD Technical Briefs**
    https://www.skhynix.com/memory-storage/nand-flash/
    NAND technical documentation, DDR TLC, 176-layer specs.

## Open-Source Projects & Simulators

31. **SPDK FTL Documentation**
    https://github.com/spdk/spdk/blob/master/doc/ftl.md
    Production-grade FTL reference; mapping, GC, relocation, P2L rebuild, over-provisioning.

32. **SPDK SSD Internals**
    https://github.com/spdk/spdk/blob/master/doc/ssd_internals.md
    NAND fundamentals, FTL, benchmarking, WAF, forcing known SSD state.

33. **OpenFlash Controller Lab**
    https://github.com/manishklach/openflash-controller-lab
    Executable FTL + channel scheduler simulator; Linux PCI/blk-mq driver; fio workloads; QEMU integration.

34. **OpenNANDLab**
    https://github.com/muditbhargava66/OpenNANDLab
    3D NAND research platform; defect handling, performance optimization, NAND characterization.

35. **nandsight — NAND/SSD Firmware Simulator**
    https://github.com/Atishay8192261/nandsight
    C++ simulator with Claude agent trace explanation; page-level FTL; greedy/cost-benefit GC; dynamic wear-leveling; interactive dashboard.

36. **MQSim (CMU SAFARI)**
    https://github.com/CMU-SAFARI/MQSim
    Academic SSD simulator; FTL reference implementation; steady-state block status probability models.

37. **SSD-Guide (GitHub)**
    https://github.com/mikeroyal/SSD-Guide
    Curated SSD resource list + starter C code; used in Wknd 2-3 of study plan.

38. **OpenSSD Project (Official)**
    http://openssd-project.org/
    Jasmine/Cosmos/Cosmos+ platforms; firmware source; FTL examples (TutorialFTL, GreedyFTL, DummyFTL); NVMe trace repository.

39. **OpenSSD Cosmos+ Platform Docs**
    http://openssd-project.org/cosmospl/overview
    Tiger4 controller specs; three FTL examples; hardware debug interface details.

## Benchmarking & Tools

40. **fio Official Documentation**
    https://github.com/axboe/fio/blob/master/HOWTO.rst
    Workload types (read/write/trim/randrw); direct I/O; iodepth; engine options (libaio, io_uring); JSON output.

41. **fio Manpages (Debian/Ubuntu)**
    https://manpages.debian.org/bullseye/fio/fio.1.en.html
    Complete option reference; safety flags (--readonly); mixed workloads; trim handling.

42. **fio rTS Wiki Guide**
    https://rtech.support/guides/benchmarks/fio
    Practical examples for SSD testing; preconditioning; mixed workloads; rwmixread; bs ranges; iodepth scaling.

## SNIA (Storage Networking Industry Association)

43. **SNIA SSD Performance Test Specification (PTS)**
    http://www.snia.org/sites/default/files/SSS_PTS_Enterprise_v1.1.pdf
    Forcing SSD into known state for benchmarking; GC behavior, steady-state methodology.

44. **SNIA Block I/O Traces** (on OpenSSD site)
    http://openssd-project.org/ssd
    Standardized trace repository for SSD research; used by VSSIM, MQSim, Amber simulators.

## OpenCourseWare / Lecture Notes

45. **ETH Zürich — "Basics of NAND Flash-Based SSDs"** (PDF, 72pp)
    https://safari.ethz.ch/projects_and_seminars/spring2023/lib/exe/fetch.php?media=pns_modern_ssds_spring2023_2nd_before_
    NAND organization, FTL, GC, wear-leveling, SSD request handling; used in Wknd 1 of study plan.

46. **Thapar University — "Debug and Diagnostics Framework for SSD Program"**
    http://appforms.thapar.edu/IAP/ReportUploads/ProjectPresentation2019Sem8/101510065_Report_File.pdf
    On-target debug hooks, trace buffers, assertion frameworks; used in Wknd 9.

## Supplemental Reading

47. **"A Beginner's Guide to SSD Firmware"** (Thirumalai, Springer/Apress, 2023)
    ISBN: 978-1-4842-9888-6; ~$40-60; boot flow, ISRs, queue management, power-loss; core textbook (Wknd 6).

48. **"Debug and Diagnostics Framework for SSD Program"** (Thapar PDF)
    Already in materials; Wknd 9 reference for debug hook design.

## Key Concepts These Papers Cover

- Write amplification modeling & mathematical relationships
- GC algorithms: greedy, cost-benefit, RGA, d-choice, GCaR
- FTL mapping: page-level, block-level, hybrid, learned (LeaFTL, ASA-FTL)
- Hot/cold data separation & adaptive caching
- SSD simulation: Amber (full-system), MQSim (event-driven), VSSIM (latency), SoftSSD (prototyping)
- Stress testing: VST corner-case injection, power-cut, queue overflow
- NVMe spec: queue model, admin/I/O commands, doorbell, MSI-X, log pages
- Object-based FTL (OFTL) vs traditional block FTL
- Endurance modeling & PE fairness
- Host-side vs device-side GC optimization