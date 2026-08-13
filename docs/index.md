# video-build

Edit videos with **Grok** (or any coding agent). Drop footage in a folder, confirm a strategy, get `final.mp4`. Talking heads, montages, tutorials, travel, interviews — no presets, no menus.

<div class="banner">
  <img src="/video-build-banner.png" alt="video-build" />
</div>

## What it does

- **Indexes the whole bin once** — video, stills, and audio — into `bin.md` plus contact-sheet thumbs
- **Cuts out filler words** (`umm`, `uh`, false starts) and dead space between takes
- **Confirms a strategy file** (`strategy.md`) that maps beats to bin assets or generated plates
- **Fills coverage gaps** with Grok Imagine, seeded from bin refs and looks
- **Drafts a strategy** with Grok from the bin + packed speech — still confirmed before the cut
- **Speaks** via Grok TTS as a mixable voiceover bed, or Imagine `--voice` for on-screen speech
- **Music beds** loop to the cut and duck under speech
- **Auto color grades** every segment — presets or any custom ffmpeg chain
- **30ms audio fades** at every cut so you never hear a pop
- **Burns subtitles** in your style — 2-word UPPERCASE by default, set per-EDL
- **Composites stills, Ken Burns, positioned overlays, and fade-to-black** from the EDL
- **Generates animation overlays** via HyperFrames, Remotion, Manim, or PIL
- **Self-evaluates the rendered output** at every cut boundary before you see anything
- **Persists session memory** in `project.md` so the next session picks up where you left off
- **Snapshots the program** so you can restore a cut or one beat and re-render

## Quick start

```bash
cd /path/to/your/footage
grok   # or claude, codex, hermes, ...
```

> edit these into a launch video

Read the [guide](/guide/readme) for the full picture, the [install guide](/guide/install) to set it up, or the [skill reference](/guide/skill) for the 15 hard production rules.

<div class="tip custom-block">
  <p class="custom-block-title">How it reads video</p>
  <p>No frame-dumping. Three compact layers — asset bin, packed word-level speech transcript, and on-demand filmstrip composites. <code>bin.md</code> + ~12KB of speech instead of 45M tokens of frames.</p>
</div>
