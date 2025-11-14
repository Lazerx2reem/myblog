---
title: "Twelfth Post"
date: "November 16, 2025"
description: "Week 12 Post :)))"
---

*November 16, 2025*


# Sprint 2 Reflection – WellMind AI  
**Focus: AI Integration (Weeks 12–13)**

## Overview
Sprint 2 centered on bringing the core AI experience to life. This included building the chat interface, connecting Firebase Functions, and integrating the GPT-4 API into a stable request loop. This sprint marked the shift from foundational setup to functional intelligence within the app.

---

## What I Accomplished
- **Built the AI chat interface** in React, including message history and a clean input box.
- **Set up Firebase Functions** to securely handle API calls and prevent exposing keys.
- **Integrated GPT-4 API** with structured prompts to ensure consistent wellness guidance.
- **Created a basic prompt framework**, including system instructions and example behaviors.
- **Tested the full pipeline**:  
  User → React UI → Firebase Function → GPT-4 → Response → UI.

This is the first sprint where the app began “feeling real,” because the AI coach is now interactive and responsive.

---

## Challenges I Faced
### 🔹 Managing API Communications
Connecting React → Firebase Functions → GPT-4 required debugging CORS issues, async timing, and error handling. Once the pipeline stabilized, responses became reliable.

### 🔹 Designing the Prompt Structure  
It took experimentation to balance personalization with clear, actionable responses. Too much freedom made the outputs generic; too much restriction made them robotic.

### 🔹 Avoiding Over-Engineering  
I had to resist the temptation to build long-term features (like adaptive learning) too early. Keeping the scope contained ensured the sprint stayed on track.

---

## What Went Well
- Firebase Functions handled GPT-4 integration smoothly after early setup issues.
- The chat UI is clean, responsive, and ready for expansion.
- The AI’s responses are consistent thanks to an improved system prompt.
- This sprint created a strong foundation for future personalization and analytics.

---

## Goals Moving Forward (Sprint 3)
1. **Build trend visualization** using logged data.
2. **Implement privacy-first onboarding** so users understand consent and data usage.
3. **Start connecting AI insights** to real user logs for more personalized guidance.
4. **Finalize responsive design** across devices to prepare for testing.

---

## Final Thoughts
Sprint 2 was all about connecting the intelligence behind WellMind AI. Despite challenges with API integration and prompt tuning, this sprint delivered the app’s most essential capability: a functional AI wellness coach. With the core AI loop complete, I’m confident heading into Sprint 3, where visualization and privacy features will bring the experience together.

