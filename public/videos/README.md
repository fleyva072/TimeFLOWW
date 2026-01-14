# Hero Background Videos - Asset Requirements

## Required Files

Place the following files in this folder (`/public/videos/`):

| File | Description | Requirements |
|------|-------------|--------------|
| `hero-study.webm` | Person studying clip | WebM format, VP9 codec |
| `hero-study.mp4` | Person studying clip | MP4 format, H.264 codec (fallback) |
| `hero-study.jpg` | Poster image for study clip | JPG, same aspect ratio as video |
| `hero-work.webm` | Person working focused | WebM format, VP9 codec |
| `hero-work.mp4` | Person working focused | MP4 format, H.264 codec (fallback) |
| `hero-work.jpg` | Poster image for work clip | JPG, same aspect ratio as video |

## Video Specifications

### Resolution
- **Recommended:** 1920x1080 (1080p) or 1280x720 (720p)
- **Aspect Ratio:** 16:9

### Duration
- **Length:** 6–12 seconds (short seamless loop)
- **Loop:** Should loop seamlessly without visible cut

### File Size
- **Target:** Under 5MB per video (compressed)
- **Max:** 10MB per video

### Content Guidelines
- **Study clip:** Person reading, writing, or studying at a desk
- **Work clip:** Person typing, coding, or focused on screen
- **Style:** Calm, professional, minimal movement
- **Lighting:** Soft, neutral lighting (avoid harsh shadows)
- **Background:** Clean, minimal distractions
- **Color:** Neutral tones work best (will be desaturated)

### Encoding Settings

**WebM (Primary - better compression):**
```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -an hero-study.webm
```

**MP4 (Fallback):**
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -an hero-study.mp4
```

**Poster Image:**
```bash
ffmpeg -i hero-study.mp4 -ss 00:00:02 -vframes 1 hero-study.jpg
```

## Stock Video Sources

Free stock videos that work well:
- [Pexels Videos](https://www.pexels.com/videos/)
- [Coverr](https://coverr.co/)
- [Mixkit](https://mixkit.co/free-stock-video/)

Search terms:
- "person studying"
- "working at desk"
- "typing laptop"
- "focus concentration"
- "productivity"

## Notes

- Videos are purely decorative and will have:
  - Low opacity (15-20%)
  - Slight blur (4px)
  - Desaturation filter
  - Dark overlay scrim
  
- The videos should NOT compete with the hero text/CTA
- Both videos will crossfade every ~10 seconds
- For `prefers-reduced-motion`, static posters will be shown instead
