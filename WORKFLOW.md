# WORKFLOW.md

## Feature: CSV/Text File Upload Form

I built the same file-upload feature twice: once with a vague one-line
prompt ("Build a form to upload a file for my data cleaner"), and once
with a detailed prompt specifying file types, size limits, exact error
messages, example behavior, accessibility requirements, and a request for
automated tests.

## Review Effort

Surprisingly, the vague prompt took longer for the AI to respond than the
precise one. My guess is that without clear instructions on what to
include or avoid, the AI had to consider a much wider range of
possibilities, which slowed it down — while the precise prompt gave it a
narrow, clear target to build toward.

Writing a detailed prompt was worth the effort. It minimizes errors
upfront, and if an error is still found later, it's much easier to narrow
down — you can simply compare the output against your original
instructions, and anything that goes against those instructions is likely
the source of the problem. A vague prompt gives you no such reference
point to check against.

## Correctness

When testing both versions, I found that Round 1 (the vague prompt) never
displayed an error message when someone tried to submit the form without
selecting a file — it just kept the Continue button disabled with no
explanation. This is a real problem, not a small detail. Without any
feedback telling the user what went wrong, they have no way of knowing
what the issue is, so they can't fix it either — the form is essentially
stuck with no way forward.

Round 2, by contrast, explicitly shows "Please select a file first" in
this case, and this behavior is backed up by an automated test that
confirms it works. Round 1 has no automated tests at all, so this gap was
only found by manually reading through its code.

## Accessibility

Both versions included some baseline accessibility (aria-labels, hidden
icons), but I noticed a difference in how errors are announced. Round 1
used `aria-live="polite"` and Round 2 used `aria-live="assertive"`. An
error message should interrupt right away instead of waiting politely,
because the goal is to not waste the user's time and effort. If they're
not told immediately that something's wrong, they might keep trying the
same broken action without realizing why it isn't working.

## Edge Cases

Round 2 explicitly handles three edge cases: wrong file type, oversized
file, and empty submission, each with its own specific error message.
Round 1 handles wrong type and oversized file, but not empty submission,
which is the gap described above.

## Conclusion

Writing a precise, detailed prompt took more effort, but it
resulted in a version that was more correct, more accessible, and easier to trust, because I could verify its behavior against automated tests and my own original instructions, rather than manually hunting for bugs after the fact.

## Turning My App into a Next.js Project + Putting It Online

Today I rebuilt my project using Next.js. I used Next.js to organize a website into separate pages automatically, each folder I create inside the "app" folder becomes a new page on my website, like /upload or /review.

I kept my old, simpler version of the project (plain HTML/CSS/JS) safe and untouched on its own branch. My new Next.js version lives in a subfolder called "data-cleaner-app," so nothing from before gets mixed up or lost.

I built simple placeholder pages for all 5 screens my project will eventually need: Home, Upload, Review, Export, and Health Check. I also added a navigation menu that shows up on every page automatically, so I can click between them instead of typing web addresses by hand.

The Health Check page proves that my app can successfully fetch (reach out and grab) data from another website. This matters because later, my app's real AI feature will need to do something similar, that is to send data somewhere and get a response back.

I checked that my website still looks good on both a small phone-sized screen (375px wide) and a bigger laptop-sized screen (1280px wide), and it did.

Then, I connected my project to a hosting service of my choice, Vercel, I transferred my code from GitHub to it and it automatically turned my code into a real, live website that anyone can visit with a link, without needing to install anything themselves.

**My live website link:** https://frontend-ai-capstone-eosin.vercel.app