# Project Rules

## Project
A tool to clean messy spreadsheet and text data — removing duplicates, 
fixing formatting, trimming whitespace, standardizing values.

## Stack
- Plain HTML, CSS, JavaScript (no framework)
- PapaParse for reading/parsing CSV files
- Node.js for local tooling only (not required to run the app itself)

## Conventions
- Use Conventional Commits (feat, fix, docs, chore, etc.)
- Keep functions small, single-purpose, and readable
- Use clear, descriptive variable and function names
- Comment any non-obvious cleaning logic (e.g. why a specific rule exists)


## Lessons from Prompting Comparison (Round 1 vs Round 2)
- When building a form, always make sure every invalid or missing input produces a visible reaction (like an error message) — silence isn't acceptable, since the user needs to know why something isn't working.
- Every page or screen should include clear guidance for first-time users on what to do, not just error handling for when something goes wrong.
- Give immediate reaction or pop-up messages when a user makes an error, don't let error feedback wait, since delays waste the user's time and effort.