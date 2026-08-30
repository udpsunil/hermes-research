# SSD Debug Architecture Resources

## Knowledge (downloaded locally in `materials/`)

- [ETH Zurich — Basics of NAND Flash-Based SSDs (PDF)](materials/ETH_NAND_Flash_Basics.pdf)
  University lecture covering NAND cell types, pages/blocks, P/E cycles, error sources. Use for: Weekend 1 foundations, any NAND physics question.
- [NVMe Base Specification Rev 2.4 (PDF, 870pp)](materials/NVMe_Base_Spec_Rev2.4.pdf)
  THE authoritative host-controller protocol reference. Use for: queue model, admin commands, SMART/log pages, feature settings.
- [NVMe Command Set Specification 1.3 (PDF)](materials/NVMe_Command_Set_1.3.pdf)
  Command-level detail (read/write/flush/dataset management). Use for: Wknd 5+, decoding command behavior.
- [LeaFTL: Learning-based FTL (arXiv PDF)](materials/LeaFTL_arxiv.pdf)
  Research paper with excellent FTL background sections. Use for: mapping, GC, write amplification context (Wknd 3–4).
- [Alvin Rolling — SSD Controller deep-dive (HTML)](materials/alvinrolling_ssd_controller.html)
  Accessible walkthrough of controller blocks. Use for: Weekend 2 block diagram work.
- [Cactus Tech — Controller Architecture primer (HTML)](materials/cactus_tech_primer.html)
  Channels & banks explained. Use for: parallelism, bandwidth questions.
- [SSD-Guide (GitHub, local clone)](materials/SSD-Guide/)
  Curated resource list + starter code. Use for: finding further reading, FTL overview.
- [Cosmos-plus-OpenSSD firmware (local clone)](materials/Cosmos-plus-OpenSSD/)
  Real SSD firmware (FreeRTOS) with tutorial + boot guide PDFs in `doc/`. Use for: Phase 4 project.
- [openssd 1.1 (local clone)](materials/openssd/)
  Bare-metal simple SSD firmware. Use for: gentler firmware reading before Cosmos+.
- [fio source (local clone)](materials/fio/)
  I/O benchmark tool. Use for: Wknd 7+ baselines and stress profiles.
- [nvme-cli source (local clone)](materials/nvme-cli/)
  NVMe management CLI. Use for: SMART/error-log collection from Wknd 5.

## Knowledge (to acquire — see shopping list)

- *A Beginner's Guide to SSD Firmware* — Thirumalai (Springer/Apress 2023). Core firmware textbook for Wknd 6. In `materials/PAID_MATERIALS_SHOPPING_LIST.md`.
- "Data-Driven Debugging and RCA for SSD Firmware Issues" (IEEE 11307349) ⭐ core debug paper, Wknd 9.
- VST (FAST'18), Amber (FAST'20), SoftSSD (FAST'22) — check usenix.org for free PDFs first.

## Wisdom (Communities)

- [r/DataHoarder](https://reddit.com/r/DataHoarder) — practical SSD/NAND discussions, real-world failure stories.
- [USENIX FAST conference](https://www.usenix.org/conferences/byname/108) — top storage research venue; talks free online. Use for: staying current, seeing researchers present FTL/debug work.
- [OpenSSD community](https://www.openssd.io/) — forum/wiki for Cosmos+ board users. Use for: Phase 4 project troubleshooting.
- [Flash Memory Summit talks](https://www.flashmemorysummit.com/) — industry talks, many free. Use for: real vendor debug practices.

## Gaps
- No free high-trust resource found yet for vendor-specific debug tooling (e.g., internal vendor trace tools) — will rely on the user's workplace knowledge.
- IEEE paywalled papers pending purchase (Wknd 9–11 materials).
