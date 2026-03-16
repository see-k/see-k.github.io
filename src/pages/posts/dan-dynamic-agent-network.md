---
layout: ../../layouts/PostLayout.astro
title: "DAN: A Dynamic, Distributed Agent Network for Scalable and Adaptive Orchestration"
date: "March 2026"
type: "Research paper"
description: "DAN introduces a distributed architecture that separates global coordination from local learning — enabling multi-agent AI systems to specialize, scale horizontally, and remain fault-tolerant without centralizing orchestration."
---

This paper introduces **DAN (Dynamic Agent Network)**, a distributed architecture for orchestrating adaptive multi-agent AI systems at scale. The core insight is that global coordination and local learning are different concerns and conflating them into a single orchestrator creates brittle, unscalable systems.

## The architecture

DAN separates responsibility across two layers:

- **Global router** — A lightweight, stateless orchestrator that receives tasks and routes them to the most appropriate planner. Selection uses a bandit-based strategy where the router tracks empirical utility metrics (success rate, latency, cost) for each planner and learns which to favor per task category.
- **Local planners** — Specialized agents deployed across distributed server pods. Each planner maintains its own episodic case bank and adapts using **case-based Q-learning**: retrieving relevant prior experiences from non-parametric memory, then updating retrieval utilities based on outcome feedback.

The task pipeline runs: global routing → local planning → case retrieval → tool execution. Planners incrementally learn from interaction history while keeping memory stores lightweight and local.

## Why it scales

Because planners operate independently, the system scales horizontally — new pods can be added without touching the global router or other planners. Failure is isolated to the affected planner. The shared routing layer provides coordination without becoming a bottleneck.

Case selection uses a Boltzmann distribution over retrieved experiences, with RL updates adjusting retrieval utilities over time. This lets planners improve without retraining, just from accumulated case histories.

## Protocol interoperability

DAN also addresses a practical friction point in the current AI tooling landscape: **A2A (Agent-to-Agent) and MCP (Model Context Protocol) systems don't naturally interoperate**. DAN introduces a stateless protocol adapter layer that bridges them, allowing heterogeneous agents and tools to work together without changes to either side.

## Design target

The architecture is designed for **long-horizon, tool-driven tasks** — complex reasoning benchmarks and enterprise automation environments where agent systems need to handle extended workflows, not just single-turn completions. The design is specifically optimized for **small language models running at the edge**, participating in a distributed reasoning network rather than depending on centralized large-model inference.

Evaluation plans use GAIA, DeepResearcher, and SimpleQA benchmarks.

---

The paper is published open access on Zenodo: [DAN: A Dynamic, Distributed Agent Network (Zenodo)](https://zenodo.org/records/19041902). DOI: `10.5281/zenodo.19041902`.
