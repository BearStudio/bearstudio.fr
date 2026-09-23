---
title: 'AI Agents: From All-In to Taking Back Control'
slug: 'ai-agents-from-all-in-to-taking-back-control'
date: 2026-09-23
categories:
  - 'developpement'
  - 'ia'
tags:
  - 'ia'
  - 'developpement'
  - 'retour-dexperience'
  - 'temoignage'
metaDescription: 'From all-in on Claude Code to Cursor: a look back at AI agents, and why you have to stay in the loop to keep control of the code.'
excerpt: 'A look back at my relationship with AI for coding: how I got into it, the problems that piled up little by little, and what I am changing to take back control.'
authors:
  - 'renan-decamps'
---

If you work in dev in 2026, you've definitely lived this moment: you launch an agent on a feature, go grab a coffee, come back… and you've got 40 files changed, 1,200 lines added, and a PR waiting for you. Technically, it works. But you have no idea _how_ it works. 😅

This article is a look back at my relationship with AI for coding: how I got into it, the problems that piled up little by little, and what I'm changing to take back control. Whether you're just starting with agents or you already use them every day, I hope this keeps you from making the same mistake I did.

## 1. The beginning: all-in on Claude Code

At the start of the year, I told myself: **all-in**. With all the hype around agentic development, I really felt like I was missing out. And for me, the best way to learn is to try it for real. So let's go: Claude Code everywhere, CLI then GUI, on client projects, side projects, and internal projects.

And I didn't fake it. I tried quite a few systems to automate the whole **specs → dev → review** loop. Hey, Ralph loop 👋 (basically: a loop that keeps relaunching the agent on a spec until the work is done). The goal, eventually and ideally: **remove myself entirely from the dev phase** and only do orchestration.

Spoiler: it never got past the experiment stage. And I figured that out pretty quickly.

## 2. Little by little: I thought I understood my project

The first problem with these automated loops is that **you lose the ability to change your mind along the way**. You write your spec, you launch it, and the agent runs. Except in real life, a project never goes as planned: you discover constraints, you change approach, you realize your spec was shaky. Now you've just got a mountain of code based on choices you would have questioned if you'd been there.

Sure, some people will say: "But you can edit your specs along the way to adjust the next loop, create issues, and so on." Yeah, no. If you have to watch the loop and correct it constantly, what's the point of a loop that's supposed to run while you're AFK? In the end, you end up with the same problems as tunnel development and the V-model.

And even without going all the way to the Ralph loop, the underlying problem stays the same. On an internal project, people asked me questions about how the app worked. That's when I realized I _thought_ I understood how it worked. After all, I was the one who prompted it, I was the one who made the choices during the "dev" phase. But really? I didn't fully have a handle on it. And above all, I didn't really trust the answers I was giving.

Same thing for debugging. Good luck finding the source of a problem when you only have a vague idea of how it's built underneath.

And then there are the PRs. 15,000-change PRs, a nightmare to review. In the end, either nobody really reviews them, or you hand them straight to an AI so it can review code… written by another AI. It's a topic that comes up a lot on X, and I think a lot of us have been there.

The core of the problem is that these tools produce **a huge amount** of code, very fast, and **you don't see it being written**. Changes pile up in a terminal or a chat window, and the only real way in to understand what was done is the PR. But in a PR, you read a diff: red and green lines, out of context. You can't easily navigate the code, jump from one definition to another, follow a data flow. In short, **make it yours**.

The project moves forward, but your technical understanding stalls. Or even goes backwards.

At some point, I told myself this wasn't the right way to work if I wanted to ship quality apps that I actually understand.

## 3. Human in the loop: we reinvented agility 🙃

The conclusion I drew is pretty simple: **the human has to stay in the loop**. That's what we call HITL, _human in the loop_.

And when you think about it, it's just… agility. Small iterations, fast feedback, the ability to change direction when you learn something. The tools have changed, but the principles are the same, lol.

Careful, that doesn't mean I write everything by hand. I might type very little code myself. But I want to **see what's happening**. Work in a more atomic way, in small changes, so I understand each change as it lands, rather than discovering the result all at once in a giant PR.

## 4. The switch: Cursor and an all-in-one environment

To apply this day to day, I switched to Cursor. And what changed is less the tool than **the workflow it pushed me to adopt**.

With Claude Code, I was in a messy environment: I'd launch it, let it run, pick up the result, and cobble together homemade systems around it. With Cursor, I have an **all-in-one** environment: my agent is right in my editor, everything is connected. I can see the code as it's written, navigate it, try things, without the friction of having to open an editor on the side.

And the broader Cursor ecosystem is very well finished. Clearly more professional than what I managed to put together myself with Claude Code, Codex, and the rest.

My setup is still very young, but in broad strokes:

- **Cursor Projects**: an orchestrator agent that works from a centralized knowledge base for each topic in progress, and launches other agents for the different tasks;
- **alerts** on PRs and Slack messages, so I don't lose the thread;
- **agents directly in the IDE** for development, so I can keep an eye on every change.

There's still some orchestration, but this time I stay in the middle. 😉

## 5. Let's be honest: the tool isn't everything

Don't lie to yourself: you can absolutely fall into the same traps with Cursor as with Claude Code or Codex. Nothing stops you from launching the agent in YOLO mode and accepting everything without reading.

The difference is that Cursor makes it **much easier** to set up an environment that encourages you to understand what you're doing, in detail. The right behavior becomes the easiest path.

Will this change how I review or support the team? It's still too early to say. But one thing is certain: I don't want to discover my own code in a PR anymore.

## Conclusion

AI is an incredible accelerator, and I'm not going back. But if it writes your code faster than you can understand it, you haven't saved time: you've just moved the debt… into your head.

So don't make the same mistake I did: **stay in control of the code you produce**. Even if you didn't type it.
