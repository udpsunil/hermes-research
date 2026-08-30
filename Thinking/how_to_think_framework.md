# How to Think: A Practical Guide

*Written for a working engineer (SSD/storage) who wants to think more clearly at work and in life. Plain language. Every claim cites its primary source.*

---

## Introduction

Clear thinking is not a gift. It is a set of habits and tools you can practice. Research on human judgment shows that our fast, automatic thinking (what Kahneman calls "System 1") makes predictable errors, and that slow, deliberate thinking ("System 2") can catch many of them — but only if you know what to look for and have routines that force the look (Kahneman, *Thinking, Fast and Slow*, 2011; Tversky & Kahneman, "Judgment under Uncertainty: Heuristics and Biases," *Science*, 1974).

This guide gives you seven pillars. Each section has: **(a)** the core idea, **(b)** how to apply it at work tomorrow, **(c)** the primary source. At the end: a 12-item daily checklist.

---

## Pillar 1: Two Systems — Fast and Slow Thinking

**(a) Core idea.** Your mind runs two modes. System 1 is fast, automatic, effortless — it recognizes faces, finishes the sentence, jumps to conclusions. System 2 is slow, effortful, deliberate — it does long division, checks an argument, doubts. Most of the time System 1 runs the show, and it works well. But System 1 confidently substitutes an *easy* question for a *hard* one (for example, instead of "is this vendor reliable?" it answers "do I like this vendor's salesperson?"). Kahneman calls this substitution, and it is the root of most bias (Kahneman, *Thinking, Fast and Slow*, 2011, ch. 1–3; the System 1/System 2 terms were popularized from Stanovich & West, "Individual Differences in Reasoning," 2000).

The famous experiments: Tversky and Kahneman showed in 1974 that people judge probability using shortcuts — *representativeness* (ignoring base rates: judging likelihood by how typical something seems), *availability* (judging frequency by how easily examples come to mind), and *anchoring* (estimates get dragged toward whatever number was mentioned first). These were demonstrated with real subjects, not theory (Tversky & Kahneman, *Science*, vol. 185, 1974, pp. 1124–1131).

**(b) Apply it tomorrow.**
- When a judgment feels *easy and certain*, pause and ask: "What question am I actually answering?" Write the hard question down.
- Before any important estimate, ask: "What number did I hear first?" That number is an anchor. Start from data instead (e.g., historical failure rates, not last quarter's anecdote).
- For anything consequential, deliberately slow down: write the question, list the evidence, then decide. The act of writing forces System 2 online.

**(c) Sources.**
- Kahneman, D. *Thinking, Fast and Slow*. Farrar, Straus and Giroux, 2011.
- Tversky, A. & Kahneman, D. "Judgment under Uncertainty: Heuristics and Biases." *Science* 185(4157), 1974, pp. 1124–1131.
- Kahneman, D., Slovic, P., Tversky, A. (eds.) *Judgment under Uncertainty: Heuristics and Biases*. Cambridge University Press, 1982.

---

## Pillar 2: Mental Models, First Principles, Inversion, Second-Order Thinking

**(a) Core idea.**

**Lattice of mental models.** Charlie Munger argues you should carry a toolbox of big ideas from many disciplines — statistics, physics, biology, psychology, engineering — because no single model explains the world. His phrase: "You've got to have models in your head... and you've got to array your experience on this lattice of models" (Munger, "The Psychology of Human Misjudgment" and the USC Business School talk, in *Poor Charlie's Almanack*, 2005). Examples he uses: compound interest, feedback loops, critical mass, incentives.

**First-principles thinking.** Aristotle defined first principles as "the first basis from which a thing is known" (*Metaphysics*, Book Delta/Alpha, c. 350 BC). Modern usage (popularized by physicists like Feynman and by Elon Musk): instead of reasoning by analogy ("SSDs are like disks, so..."), break the problem into fundamental facts and rebuild ("what is the physics of charge trapping in this NAND cell?"). Reasoning by analogy copies what exists; first principles ask what is *actually true*, so you can build what doesn't exist yet.

**Inversion.** Munger, following the mathematician Jacobi ("*man muss immer umkehren*" — invert, always invert): instead of asking "how do I succeed?", ask "what would guarantee failure?" and avoid that. Failure is easier to see than success (Munger, *Poor Charlie's Almanack*, 2005).

**Second-order thinking.** Howard Marks: first-level thinking says "the outlook is good, buy"; second-level thinking asks "and then what? Who else knows this? What is already priced in? What are the consequences of the consequences?" (Marks, *The Most Important Thing*, Columbia University Press, 2011, ch. 1).

**Worked example (SSD): first principles vs. analogy.** Suppose a new NAND generation is qualified with the same test plan as the last one, and someone argues "drives have always been qualified this way." Reasoning from fundamentals instead: a charge-trap cell stores threshold voltage that drifts as trap charge leaks and read-disturb accumulates, so raw bit error rate rises with program/erase cycles and retention time — and each new node typically starts with a *higher* raw BER and steeper drift than the last. That means the real question is not "did it pass the old test?" but "does the ECC budget still close?" — i.e., can the correctable-bits-per-codeword math (for a BCH/LDPC code of given strength, the probability that errors per codeword exceed t correctable bits) stay below target across the worst-case P/E count plus bake-equivalent retention? Because bit errors are roughly independent events at these densities, the failure count per codeword follows Poisson/binomial statistics, so you can compute expected uncorrectable-block rates directly from measured raw BER instead of assuming the previous product's margin carries over. Done this way you may find the old qualification passes while the reliability math says the margin is gone — or vice versa, that a scary-looking raw BER is still comfortably inside what the code corrects. The point: rebuild the argument from cell physics + coding theory + statistics, then compare to precedent; use precedent only as a sanity check on your derivation.

**(b) Apply it tomorrow.**
- Keep a one-page list of ~10 models you use most (incentives, feedback loops, base rates, queueing theory, margin of safety...). When stuck on a problem, scan the list: "which model applies here?"
- For any design decision, write the fundamental constraints (physics, cost, reliability math) before comparing to how "we always did it."
- Before a plan, run inversion: "It's 6 months later and this failed. Why?" (see also premortem, Pillar 5).
- For any decision, ask "and then what?" twice. A firmware fix that ships faster but skips validation has second-order consequences.

**(c) Sources.**
- Munger, C. *Poor Charlie's Almanack* (ed. Peter Kaufman). Stripe Press edition, 2005/2023.
- Aristotle, *Metaphysics* (c. 350 BC), esp. Book Delta on "first principles."
- Marks, H. *The Most Important Thing: Uncommon Sense for the Thoughtful Investor*. Columbia University Press, 2011.

---

## Pillar 3: Structured Reasoning Tools

**(a) Core ideas.**

**Fermi estimation.** Enrico Fermi estimated quantities from rough pieces (the famous "how many piano tuners in Chicago" example, and the Trinity-test paper-slip estimate). You don't need exact data to get within 10x — decompose the unknown into factors you can roughly guess, and errors partially cancel. (Rhodes, *The Making of the Atomic Bomb*, 1986, describes the Trinity estimate; Fermi's lecture notes on estimation are documented in the Los Alamos archives.)

**Steelmanning.** The opposite of a strawman: before rejecting an argument, build the *strongest possible version* of it. This is a practical application of the principle that you only defeat an argument at its best, not its worst. (The term comes from online philosophy culture, c. 2010s; the underlying idea appears in Rawls' method of testing principles against their best rival interpretations, *A Theory of Justice*, 1971, §9.)

**Occam's razor.** "Plurality should not be posited without necessity" — attributed to William of Ockham (c. 1287–1347), *Summa Logicae* tradition; the phrasing comes from later scholastics (John Punch, 1639). Meaning: among explanations that fit the evidence equally, prefer the one requiring the fewest assumptions. Not a law of nature — a tiebreaker.

**Falsifiability.** Karl Popper: a theory is scientific only if it makes predictions that could prove it wrong. "In so far as a scientific statement speaks about reality, it must be falsifiable" (Popper, *Conjectures and Refutations*, 1963). Practical version: before believing a hypothesis, state in advance what observation would disprove it.

**Bayesian updating, in plain language.** Start with a prior (how likely is this before new evidence?), then shift your belief in proportion to how *surprising* the evidence would be if your hypothesis were false. Thomas Bayes' essay (1763, published posthumously by Richard Price) gives the mathematics: posterior odds = prior odds × likelihood ratio. You don't need the formula daily — you need the habit: "How likely was this evidence if I'm wrong? If quite likely, it shouldn't move me much."

**(b) Apply it tomorrow.**
- Before requesting data or a lab run, Fermi-estimate the answer first. If measurement wildly disagrees with your estimate, *that* is the interesting finding.
- In design reviews, restate your colleague's objection in its strongest form and have them confirm: "So your concern is X — is that the best version of it?"
- When you have two competing bug theories, pick the one with fewer unsupported assumptions *only as a starting order* — then test (see Pillar 4).
- For each hypothesis, write its "killer test" in advance: "If the issue is thermal, then running at room temp for 24h makes it vanish."
- Ask: "What would I expect to see if this hypothesis were FALSE?" If you've never checked that, you haven't tested it.

**(c) Sources.**
- Rhodes, R. *The Making of the Atomic Bomb*. Simon & Schuster, 1986 (Fermi's Trinity estimate).
- Rawls, J. *A Theory of Justice*. Harvard University Press, 1971.
- Ockham, W. *Summa Logicae* (c. 1323); the "plurality" formulation appears in John Punch, *Theologiae Cursus Completus*, 1639.
- Popper, K. *Conjectures and Refutations*. Routledge, 1963.
- Bayes, T. "An Essay towards Solving a Problem in the Doctrine of Chances." *Philosophical Transactions of the Royal Society*, 1763.

---

## Pillar 4: Debugging as Thinking (Hypothesis-Driven Root Cause Analysis)

**(a) Core idea.** Debugging *is* the scientific method: observe → hypothesize → predict → test → revise. Two primary texts make this explicit.

**Agans' nine rules** (Agans, *Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems*, AMACOM, 2002 — rule titles verified against the book's table of contents):
1. Understand the System
2. Make It Fail
3. Quit Thinking and Look
4. Divide and Conquer
5. Change One Thing at a Time
6. Keep an Audit Trail
7. Check the Plug
8. Get a Fresh View
9. If You Didn't Fix It, It Ain't Fixed

Rule 3 is the deepest one: stop theorizing and go *look* at the actual failing system — instrument it, log it, observe. Theories feel productive; observation is what finds bugs. Rule 5 is the experimental control: change one variable at a time or you learn nothing.

**Polya's method** for problems generally (Polya, *How to Solve It*, Princeton University Press, 1945): four steps — (1) **Understand the problem** (what is the unknown? what is the condition?), (2) **Devise a plan** (have you seen a similar problem? can you solve a simpler one?), (3) **Carry out the plan** (check each step), (4) **Look back** (can you verify the result? can you reuse the method?). Most failed debugging skips step 1 and step 4.

**(b) Apply it tomorrow.**
- Next firmware/field failure: before touching anything, write down (i) what exactly fails, (ii) when it fails and doesn't, (iii) your top-3 hypotheses with a disconfirming test each.
- Make it fail reliably first. An intermittent bug you can't reproduce is not debuggable — find the uncontrolled condition (Agans, Rule 2).
- Change one thing at a time. If you changed two settings and it "worked," you don't know the cause.
- Keep an audit trail — timestamped log of what you tried and what happened. Memory lies under pressure (Agans, Rule 6).
- After the fix, look back: why did it happen? What test would have caught it? Add that test (Polya, step 4).

**(c) Sources.**
- Agans, D. *Debugging: The 9 Indispensable Rules...*. AMACOM, 2002.
- Polya, G. *How to Solve It*. Princeton University Press, 1945.

---

## Pillar 5: Everyday Decision-Making

**(a) Core ideas.**

**Premortem.** Gary Klein's technique: before starting a project, the team assumes "it is one year from now and the project has failed" and each person writes the story of *why*. This uses "prospective hindsight" — research by Mitchell, Russo, and Pennington (1989) found imagining an event as already having occurred increases the ability to correctly identify reasons for outcomes by ~30%. It works because it makes dissent safe: everyone must find a failure story, so nobody looks disloyal (Klein, "Performing a Project Premortem," *Harvard Business Review*, September 2007).

**Decision journal.** Write down, at the moment of decision: the situation, the options, your choice, your expected outcome and confidence, and what would prove you wrong. Review months later. This separates decision quality from outcome quality (luck exists) and calibrates your confidence over time. The practice is associated with decision researchers and popularized by Kahneman's recommendation that organizations keep decision journals to combat hindsight bias (*Thinking, Fast and Slow*, 2011, on hindsight bias and "outcome bias").

**Base rates.** When judging "how likely is this?", start from how often it happens in general (the reference class), then adjust for specifics — not the other way around. Ignoring base rates is one of the original demonstrated biases (Tversky & Kahneman, *Science*, 1974: the "Tom W." and cab experiments).

**Expected value intuition.** For repeated decisions, think in terms of probability × payoff, not single outcomes. A 10% chance of saving $1M beats a 90% chance of saving $100K. But also weigh ruin: never take a positive-EV bet you cannot survive losing (the Kelly criterion tradition, Kelly, "A New Interpretation of Information Rate," *Bell System Technical Journal*, 1956).

**(b) Apply it tomorrow.**
- Before your next project/qualification run: 20-minute premortem. Everyone writes the failure story independently first, then shares.
- Start a decision journal — one notebook or file. Five lines per big decision. Review quarterly.
- When estimating ("will this vendor's drive pass qualification?"), ask first: "what fraction of drives from comparable vendors pass?" Start there, then adjust.
- For choices with repeated exposure, compute rough expected value — and separately ask "what is the worst case, and can we absorb it?"

**(c) Sources.**
- Klein, G. "Performing a Project Premortem." *Harvard Business Review*, September 2007.
- Mitchell, D., Russo, J., Pennington, N. "Back to the future: Temporal perspective in the explanation of events." *Journal of Behavioral Decision Making*, 1989.
- Tversky & Kahneman, *Science*, 1974 (base rates).
- Kelly, J.L. *Bell System Technical Journal*, 1956.

---

## Pillar 6: Common Failure Modes (with everyday examples)

| Failure mode | What it is | Everyday example | Primary source |
|---|---|---|---|
| **Confirmation bias** | Seeking/remembering evidence that supports what you already believe | You suspect a firmware bug, so you only run tests that would show firmware faults — and never test the power supply | Nickerson, R. "Confirmation bias: A ubiquitous phenomenon in many guises." *Review of General Psychology*, 2(2), 1998 |
| **Sunk cost fallacy** | Continuing because of what you already invested, not future value | You've spent 3 weeks on a failing test fixture; you keep polishing it instead of buying a $500 commercial one | Arkes & Blumer, "The psychology of sunk cost." *Organizational Behavior and Human Decision Processes*, 35, 1985 |
| **Anchoring** | First number heard drags all later estimates | A manager says "should take a week, right?" — your "careful" estimate of 3 days becomes 4, not the 10 it deserved | Tversky & Kahneman, *Science*, 1974 (the wheel-of-fortune experiment) |
| **Dunning–Kruger effect** | Unskilled people overestimate their skill because the skill needed to do well is the skill needed to judge performance | After one online course on signal integrity, you feel confident redesigning the channel — an expert sees five errors | Kruger & Dunning, "Unskilled and Unaware of It." *Journal of Personality and Social Psychology*, 77(6), 1999 |
| **Motivated reasoning** | Reasoning toward the conclusion you want to be true | Your team's drive failed the customer's test; you scrutinize the customer's methodology far harder than your own firmware | Kunda, Z. "The case for motivated reasoning." *Psychological Bulletin*, 108(3), 1990 |

**General defense:** for each of these, the fix is the same — write down your belief and the evidence *against* it before acting, and have someone else check (Kahneman, 2011, ch. 24 on "Klemons"/debiasing by process).

---

## Pillar 7: Systems Thinking

**(a) Core ideas.**

**Stocks, flows, and feedback loops.** Donella Meadows defines a system as a set of elements interconnected in a way that produces its own pattern of behavior over time — and the interconnections that matter most are *feedback loops*. A **reinforcing loop** amplifies (more heat → more leakage current → more heat); a **balancing loop** stabilizes toward a goal (a thermostat, or a controller that reduces speed when temperature crosses a threshold). Systems behave the way they do because of loop structure, not because of individual parts — which is why blaming a component often misses the point (Meadows, *Thinking in Systems: A Primer*, Chelsea Green, 2008).

**Delays.** In real systems cause and effect are separated in time. Meadows treats delays as one of the most common sources of oscillation: by the time you see the effect and correct, the situation has already changed again. An SSD example: thermal throttling cuts controller frequency to reduce power; the drive cools; clocks ramp back up; power rises; temperature climbs — with each step lagging the last. The result is clock/temperature oscillation that no single component "causes," and timing shifts from throttling can surface later as marginal reads and ECC correction events far downstream of the thermal event.

**Emergence.** System behavior is not the sum of part behaviors. Russell Ackoff's classic point: taking apart a system to understand it destroys the very thing you wanted to understand — an automobile taken apart cannot take anyone anywhere; the essential property of a system is a property of the whole, not of any part (Ackoff, "Systems Thinking and Thinking Systems," *System Dynamics Review*, 1994). This is why every component can pass its qualification test individually while the assembled system fails qualification: NAND passes its datasheet tests, the controller passes its corner cases, firmware passes unit tests, the host passes compliance — but the combination (firmware scheduling × NAND read-disturb × host workload patterns) produces behavior none of them exhibits alone.

**Leverage points.** Meadows' famous hierarchy: places to intervene in a system, ordered roughly from least to most effective — constants/parameters, buffer sizes, delays, balancing-loop strengths, reinforcing-loop gains, information flows, rules, goals, and finally paradigms (the mindset out of which the system arises). Her observation: people usually push on parameters (cheapest, most visible) while the deep leverage sits higher up (Meadows, "Leverage Points: Places to Intervene in a System," 1999, The Sustainability Institute). Engineering translation: tuning a retry timeout is a parameter fix; changing what information flows where (e.g., making thermal state visible to the scheduler so it stops fighting the throttle loop) is a structural fix.

**Unintended consequences / policy resistance.** Jay Forrester showed in system-dynamics models that interventions into complex systems are frequently defeated or worsened by the system's own feedback structure — people push harder on the same lever when the first push doesn't work, amplifying the original problem (Forrester, *Industrial Dynamics*, MIT Press, 1961; also his "Counterintuitive Behavior of Social Systems" lecture, 1970). Senge calls this "policy resistance": the harder you push, the harder the system pushes back (Senge, *The Fifth Discipline*, Doubleday, 1990). SSD version: aggressive power management saves energy at idle but increases wake latency, so hosts disable it, so the power savings vanish — and the firmware team adds more aggressive states, starting the loop again. Or: tightening ECC to mask rising raw BER hides the underlying wear signal until failures arrive suddenly instead of gradually.

**(b) Apply it tomorrow.**
- Before fixing the next cross-team issue, draw the loop: who/what feeds back into whom? Is the loop reinforcing or balancing? Where is the delay?
- When a metric oscillates (temperature, queue depth, error rates), stop chasing instantaneous values — look for the delay between action and effect.
- When every component passed its own test but the system failed, look for emergent interaction between components, not a defective part.
- Ask "what will this intervention make someone else do?" before shipping a policy change (power limits, QoS rules, alert thresholds) — expect resistance from the loop you're pushing against.
- Prefer structural fixes (information flow, rules, goals) over parameter tweaks when a problem keeps coming back.

**(c) Sources.**
- Meadows, D. *Thinking in Systems: A Primer*. Chelsea Green Publishing, 2008.
- Meadows, D. "Leverage Points: Places to Intervene in a System." The Sustainability Institute, 1999.
- Senge, P. *The Fifth Discipline*. Doubleday, 1990.
- Forrester, J. *Industrial Dynamics*. MIT Press, 1961.
- Ackoff, R. "Systems Thinking and Thinking Systems." *System Dynamics Review* 10(2–3), 1994.

---

## The Daily Thinking Checklist (12 items)

1. **What question am I actually answering?** (Guard against question substitution — Kahneman)
2. **What's the base rate?** Start from general frequency, then adjust — Tversky & Kahneman
3. **What number anchored my estimate?** Re-derive from data — Tversky & Kahneman
4. **What would prove me wrong?** State the disconfirming test before testing — Popper
5. **Have I looked, or only theorized?** Go observe the real system — Agans, Rule 3
6. **Did I change only one thing?** Otherwise the result is uninterpretable — Agans, Rule 5
7. **What's the strongest version of the other side?** Steelman before rejecting — Rawls
8. **And then what?** (asked twice) — second-order thinking — Marks
9. **If this fails, why did it fail?** Quick premortem on any plan — Klein
10. **Did I write it down?** Decision + expected outcome + date, so future-you can check — Kahneman
11. **What feedback loop am I inside?** Reinforcing or balancing — who feeds back into whom? — Meadows
12. **Did the effect show up yet, or is there a delay?** Don't judge an intervention before its delay has elapsed — Meadows

---

*How to use this document: don't try to adopt everything. Pick the checklist plus one pillar per month — Pillar 7 (Systems Thinking) is a good candidate for a monthly focus, since it changes how you see every recurring problem. Debugging pillar first if you have a live failure on your bench.*
