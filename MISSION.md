# Mission: SSD Debug Architect

## Why
The user works on embedded storage products (SSDs) and wants to become the go-to debug architect on their team — the person who can root-cause firmware, FTL, and hardware-level failures systematically rather than by trial and error. This directly advances their career and their products' reliability.

## Success looks like
- Can explain the full host→NVMe→firmware→FTL→NAND path end to end without notes
- Can run structured debug sessions: collect SMART/error-log telemetry, form ranked hypotheses, design experiments with fio, and reach a defensible root cause
- Has built personal tooling (stress profiles, SMART-diff scripts) used in real work
- Has completed an OpenSSD/Cosmos+ project modifying FTL behavior with instrumentation they wrote themselves
- Writes RCA documents that colleagues trust and reuse

## Constraints
- Only weekends available (~6–8h/weekend); weekdays limited to 15-min reviews
- 24-weekend plan in `ssd_debug_study_plan.md`; Saturday 8 AM reminder active
- Some IEEE papers paywalled (shopping list in `materials/PAID_MATERIALS_SHOPPING_LIST.md`)
- Prefers practical, actionable guidance tied to real materials already downloaded in `materials/`

## Out of scope
- General OS/networking debugging unrelated to storage
- Enterprise support workflows / ticketing systems
- Learning other embedded domains (e.g., MCU firmware generally) unless it serves SSD debugging
