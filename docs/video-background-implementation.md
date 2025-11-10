# Video Background Implementation

## Overview

The Tenchi Flux Studios hero section now features a Mirage-style looping video background with intelligent loading and mobile optimization.

## Architecture

### Components

#### `VideoBackground` Component (`components/video-background.tsx`)

A client-side React component that handles:
- **Media query detection**: Only loads video on desktop (≥801px)
- **Progressive enhancement**: Static image on mobile, video on desktop
- **Smart loading**: Uses `canplay` event to ensure smooth playback
- **Accessibility**: Non-interactive, properly labeled fallback image
- **Performance**: Lazy loads video only when needed

#### `Hero` Component (`components/hero.tsx`)

Updated to use `VideoBackground` instead of `FluxGradient`:
```tsx
<VideoBackground
  sources={{
    mp4: '/videos/hero-gradient.mp4',
    webm: '/videos/hero-gradient.webm',
  }}
  fallbackImage="/images/hero-fallback.jpg"
  fallbackAlt="Tenchi Flux Studios - AI Cinema"
  className="absolute inset-0 -z-10"
/>
```

### CSS Styles (`app/globals.css`)

New classes added:
- `.hero-background` - Container with gradient fallback
- `.mobile-fallback-image` - Static image with fade transition
- `.desktop-background-video` - Video element with fade transition
- `[data-playing]` attributes - Control video visibility based on playback state

## How It Works

### 1. Initial Render
- Component renders with static fallback image for all devices
- Video element is conditionally rendered based on `showVideo` state

### 2. Media Query Detection
```typescript
const mediaQuery = window.matchMedia(`(min-width: ${desktopBreakpoint}px)`);
```
- Checks if viewport is ≥801px (desktop)
- Listens for viewport changes (e.g., window resize)
- Updates `isDesktop` and `showVideo` states

### 3. Video Loading (Desktop Only)
When `isDesktop` is true:
1. Video element is mounted to DOM
2. `video.load()` is called to start loading
3. `canplay` event listener waits for video to be ready
4. Once ready, `video.play()` is called
5. `data-playing="true"` attribute triggers fade-in via CSS

### 4. Visual Transition
- Fallback image fades out: `opacity-0` class applied
- Video fades in: CSS transition on `data-playing="true"`
- Gradient overlays remain visible for depth and blending

### 5. Continuous Loop
- Video plays with `loop` attribute
- Muted and non-interactive to prevent user interference
- `playsInline` ensures mobile compatibility (if video is shown)

## Mobile vs Desktop Behavior

| Feature | Mobile (<801px) | Desktop (≥801px) |
|---------|----------------|------------------|
| **Video Loading** | ❌ Not loaded | ✅ Loaded & played |
| **Fallback Image** | ✅ Visible | ❌ Hidden (opacity 0) |
| **Gradient Overlays** | ✅ Visible | ✅ Visible |
| **Bandwidth Used** | ~50KB (image) | ~2-5MB (video) |
| **Performance** | Optimal | Smooth playback |

## Video Attributes

The video element uses these attributes for optimal background video behavior:

```html
<video
  autoPlay          <!-- Automatically starts playing when ready -->
  loop              <!-- Repeats continuously -->
  muted             <!-- No audio (required for autoplay) -->
  playsInline       <!-- Plays inline on iOS, not fullscreen -->
  disablePictureInPicture   <!-- Prevents PiP mode -->
  controlsList="nodownload nofullscreen noremoteplayback"  <!-- Removes controls -->
  style="pointer-events: none"  <!-- Not interactive -->
>
```

## Adding Your Video Files

### Step 1: Prepare Video
- Create or source a gradient animation video
- Match Tenchi brand colors (violet #8b5cf6, cyan #06b6d4)
- Export in two formats: MP4 (H.264) and WebM (VP9)
- Duration: 5-15 seconds for seamless looping
- Resolution: 1920x1080 minimum

### Step 2: Optimize
Use FFmpeg to optimize:

**MP4:**
```bash
ffmpeg -i input.mov -c:v libx264 -preset slow -crf 23 \
  -vf scale=1920:1080 -an -movflags +faststart \
  public/videos/hero-gradient.mp4
```

**WebM:**
```bash
ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 2M \
  -vf scale=1920:1080 -an \
  public/videos/hero-gradient.webm
```

### Step 3: Place Files
- Add `hero-gradient.mp4` to `public/videos/`
- Add `hero-gradient.webm` to `public/videos/`
- Ensure fallback image exists at `public/images/hero-fallback.jpg`

### Step 4: Test
1. Run `pnpm dev`
2. Visit http://localhost:3000
3. Check desktop (video should play)
4. Resize to mobile (<801px, image should show)
5. Check browser console for errors

## Fallback Strategy

The component implements a multi-level fallback:

1. **Desktop Video** (ideal): Looping video background
2. **Static Image** (mobile/fallback): Hero fallback image
3. **CSS Gradient** (last resort): Base gradient from CSS

If video fails to load or play:
- Static image remains visible
- CSS gradient provides base background
- No error is shown to user (graceful degradation)

## Performance Considerations

### Optimizations Implemented
- ✅ Video only loads on desktop (saves mobile bandwidth)
- ✅ `canplay` event ensures smooth start
- ✅ Video is muted (allows autoplay without user interaction)
- ✅ Proper codec selection (H.264 MP4 widely supported, VP9 WebM for better compression)
- ✅ Non-blocking load (doesn't delay page render)

### Recommended Video Specs
- **File Size**: 2-5MB for MP4, 1-3MB for WebM
- **Bitrate**: 2-5 Mbps
- **Codec**: H.264 (MP4), VP9 (WebM)
- **Audio**: Remove audio track (not needed, saves space)

### Network Optimization
- Consider using a CDN for video files (Vercel Edge Network, Cloudflare, etc.)
- Enable gzip/brotli compression on server
- Implement lazy loading if video is below fold

## Browser Compatibility

| Browser | MP4 (H.264) | WebM (VP9) | Autoplay |
|---------|-------------|------------|----------|
| Chrome | ✅ | ✅ | ✅ |
| Firefox | ✅ | ✅ | ✅ |
| Safari | ✅ | ❌ | ✅ |
| Edge | ✅ | ✅ | ✅ |
| Mobile Safari | ✅ | ❌ | ✅ (muted) |
| Mobile Chrome | ✅ | ✅ | ✅ (muted) |

**Note**: WebM is not supported on Safari, which is why MP4 is the primary format.

## Troubleshooting

### Video Doesn't Play
1. Check browser console for errors
2. Verify video files exist in `public/videos/`
3. Ensure video is properly encoded (H.264 for MP4)
4. Check that `autoplay` policies allow muted videos
5. Verify `data-playing` attribute is set to "true"

### Video Plays But No Visual
1. Check if `opacity-0` is stuck on video element
2. Verify `isPlaying` state is true in component
3. Check CSS transitions are not blocked
4. Ensure video resolution matches container

### Mobile Shows Blank
1. Verify fallback image exists at specified path
2. Check Image component for errors
3. Ensure `fallbackImage` prop is correct
4. Check if image is properly optimized

### Performance Issues
1. Reduce video bitrate/file size
2. Use shorter loop duration
3. Optimize video codec settings
4. Consider lowering resolution for smaller screens
5. Add loading indicators if needed

## Future Enhancements

Potential improvements for future iterations:

- [ ] **Preload video**: Add `<link rel="preload">` for faster loading
- [ ] **Quality selector**: Multiple video qualities based on connection speed
- [ ] **Intersection Observer**: Only play when hero is visible
- [ ] **Reduced motion**: Respect `prefers-reduced-motion` media query
- [ ] **Custom cursor**: Interactive cursor effects over video
- [ ] **Particle overlays**: Add particle effects on top of video
- [ ] **Dynamic videos**: Different videos based on time of day/theme

## References

- [Mirage Studio Homepage](https://mirage.app/studio) - Inspiration
- [MDN: HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)
- [Web.dev: Video Background Best Practices](https://web.dev/fast-playback-with-preload/)
- [FFmpeg Documentation](https://ffmpeg.org/ffmpeg.html)

## Credits

Implementation inspired by Mirage Studio's hero video background approach, adapted for Next.js with React hooks and TypeScript.

