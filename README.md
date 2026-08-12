# rishabkharidhi.com

Personal site for Rishab Kharidhi — Security Engineer. Built with Jekyll, hosted on GitHub Pages.

## Editing content
Everything data-driven lives in `_data/`:
- `experience.yml` — work history + education
- `projects.yml` — `sideprojects` (Wordle Opener, Mahjong, …) and `research`
- `skills.yml` — skill groups

Hero text, roles, and links are in the front matter of `index.md`.
Layout + styling: `_layouts/hello-default.html`, `css/style.css`, `js/main.js`.

## Side project redirects
`/wordle-opener` and `/mahjong` are redirect stubs (`<meta refresh>`).
Edit the target URL in each `index.html`, or drop the real app in that folder.

## Local dev
```
bundle install
bundle exec jekyll serve
```

Original template adapted from a design by Sara Gong (MIT). Type: Space Grotesk + JetBrains Mono.
