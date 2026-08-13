# video-build

Edit videos with **Grok** (or any coding agent). Drop footage in a folder, confirm a strategy, get `final.mp4`. Talking heads, montages, tutorials, travel, interviews — no presets, no menus.

<div class="banner">
  <img src="/video-build-banner.png" alt="video-build" />
</div>

## What it does

- **Indexes the whole bin once** — video, stills, and audio — into `bin.md` plus contact-sheet thumbs
- **Cuts out filler words** and dead space between takes
- **Drafts a strategy** with Grok, then waits for your OK before touching the cut
- **Fills coverage gaps** with Grok Imagine, seeded from bin refs
- **Speaks** via Grok TTS as a mixable voiceover bed
- **Loops music beds** to the cut and ducks them under speech
- **Auto color grades** every segment — presets or any custom ffmpeg chain
- **Burns subtitles** in your style, set per-EDL
- **Composites stills, Ken Burns, overlays, and fades** from the EDL
- **Generates animation overlays** via HyperFrames, Remotion, Manim, or PIL
- **Self-evaluates** every cut boundary before you see the preview
- **Remembers the project** across sessions in `project.md`
- **Snapshots the edit program** so you can restore a cut or one beat

## Quick start

```bash
cd /path/to/your/footage
grok   # or claude, codex, ...
```

> edit these into a launch video

Read the [guide](/guide/readme) for the full picture, the [skill reference](/guide/skill) for the 15 hard production rules, or the [install guide](/guide/install) to set it up.

<div class="tip custom-block">
  <p class="custom-block-title">How it reads video</p>
  <p>No frame-dumping. Three compact layers — asset bin, packed word-level speech transcript, and on-demand filmstrip composites. <code>bin.md</code> + ~12KB of speech instead of 45M tokens of frames.</p>
</div>
