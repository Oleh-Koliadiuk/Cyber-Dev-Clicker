# CyberDev Clicker

An incremental web-based simulator tracking a software engineer's career progression from Junior Developer to an AI Overlord. The game utilizes complex mechanics including state management, passive income accumulation loops, scaling store pricing, and persistent local storage cache saves.

## Product Specification

### Core Mechanics
- **Resource Metric:** Tracks progress via "Lines of Code" (LoC) which serves as the core economic currency.
- **Active Generation:** Increments the resource count manually based on current click power properties.
- **Passive Automation Loop:** Utilizes a global asynchronous runtime interval executing every `1000ms` to add passive income, update user interface nodes, and write cache states.
- **Persistent State Cache:** Implements local storage serialization (`cyberDevSave`) to store player data, preserving progress across browser sessions.

### Career Progression & Milestone Engine
As total resource milestones are reached, the system automatically alters the user's software ranking status, triggering structural gameplay attribute modifiers:
- **Middle Developer (200 LoC):** Updates click power to `2` units, adds `+10` passive income.
- **Senior Developer (500 LoC):** Updates click power to `4` units, adds `+15` passive income.
- **Team Lead (1,500 LoC):** Updates click power to `8` units, adds `+25` passive income.
- **Software Architect (5,000 LoC):** Updates click power to `16` units, adds `+50` passive income.
- **Chief Technology Officer (15,000 LoC):** Updates click power to `32` units, adds `+100` passive income.
- **VP of Engineering (30,000 LoC):** Updates click power to `64` units, adds `+200` passive income.
- **Silicon Valley Investor (100,000 LoC):** Updates click power to `128` units, adds `+500` passive income.
- **AI Overlord (500,000 LoC):** Ultimate tier. Updates click power to `256` units, adds `+1,000` passive income.

### Upgrade Store Infrastructure
- **Asset Procurement ("Hire AI"):** Deducts resource currency to scale up the passive income attribute.
- **Dynamic Pricing Scale:** Multiplies purchasing costs compoundingly by `1.5x` upon every successful acquisition.
- **Yield Calculation:** Dynamically scales income generation using a baseline algorithmic calculation: `Math.max(1, Math.round(aiCost * 0.02))`.

## Presentation Layer & Layout
- **Theme Concept:** Dark terminal matrix styling utilizing code-editor typography (`Courier New`) and sharp orange highlight accents (`#ff4e00`).
- **Interactive UI Modules:** Features hover glow transitions on containers, responsive scale transformations on headers, and an info display alert modal mapping structural milestone unlocks.

## Deployment

### Prerequisites
A modern runtime environment supporting HTML5 localized storage APIs, ES6 object methods, and DOM mutation query selectors.

### File Architecture
- `index.html` (Application Layout DOM Blueprint)
- `style.css` (Presentation & Terminal Theme Layout)
- `script.js` (State Machine & Automation Loop Engine)
