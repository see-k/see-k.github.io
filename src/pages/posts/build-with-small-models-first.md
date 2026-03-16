---
layout: ../../layouts/PostLayout.astro
title: "Why I build with small models first"
date: "March 2026"
type: "Build note"
description: "Starting with a weaker model forces better system design. The architecture you build for a small model scales to a large one. The reverse is rarely true."
---

There's a tempting shortcut when building agent systems: reach for the most capable model available and let raw intelligence compensate for architectural gaps. It works — until it doesn't.

The problem is that a powerful model can paper over weak system design in ways that become expensive and brittle at scale. You don't notice the missing structure until you're debugging why a GPT-4-class agent hallucinates state in a workflow that was never designed to track it.

Starting with a smaller model inverts this. GPT-3.5 or Haiku will fail loudly when your prompts are vague, your context windows are bloated, or your task routing is sloppy. That failure is useful. It shows you exactly where the system needs structure rather than intelligence.

The discipline this forces:

- Prompts that are precise and minimal, not verbose
- Explicit state passed as structured data, not embedded in prose
- Task decomposition that maps to bounded, verifiable outputs
- Tool calls that are narrow and testable in isolation

When you upgrade to a stronger model in a system designed this way, you get leverage: the model handles edge cases and ambiguity better, while the architecture handles everything else. The model becomes an upgrade to a working system rather than the load-bearing wall holding together a shaky one.

The practical rule: if your system only works with your best model, you don't have a system — you have a prompt.
