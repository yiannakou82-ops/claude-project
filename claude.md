# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Mate Academy learning workspace for practicing Git and GitHub workflows. The content is placeholder HTML; the point is the version-control practice (branches, commits, pull requests, review feedback), not the site.

There is no build, lint, or test tooling. The pages are static HTML files you open straight in a browser.

## Layout

`C:\Mate academy` is not a git repo itself. It contains two separate repositories that have nearly the same files:

- `mate-test-repository/` has a GitHub remote (`yiannakou82-ops/mate-test-repository`). Work goes on `feature/*` branches and is merged into `main` through pull requests.
- `git-1/` is local only (no remote). It is used for practicing local branching and merge-conflict resolution. It has a `.gitignore` that excludes `.env`, and `.env` must stay untracked.
- `test.txt` sits loose at the top level and is not tracked by either repo.

Both repos contain the same five pages (`index`, `about`, `catalogue`, `product`, `help`), but the contents differ. Treat each repo on its own and don't assume a change in one should be copied to the other.

## Conventions

- Branch names follow `feature/<short-description>`.
- The HTML is mostly boilerplate. `help.html` is the page that has been edited the most (an FAQ list). It contains malformed markup on purpose or as a leftover: `<li>` items with no opening `<ul>`, and a duplicated list item. Only fix these if asked, because the exercise may depend on them.
