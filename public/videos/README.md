# Hero Video Background

This directory contains the hero background video files for the Tenchi Flux Studios website.

## Required Files

The hero section expects the following video files:

- `hero-gradient.mp4` - MP4 format (H.264 codec, recommended)
- `hero-gradient.webm` - WebM format (VP9 codec, optional but recommended for better compression)

## Video Specifications

For optimal performance and visual quality, your video should meet these specifications:

### Technical Requirements
- **Resolution**: 1920x1080 (Full HD) minimum
- **Frame Rate**: 30 fps
- **Duration**: 5-15 seconds (it will loop seamlessly)
- **Codec**: H.264 (MP4) and/or VP9 (WebM)
- **Bitrate**: 2-5 Mbps (balance quality and file size)
- **Audio**: None (video should be silent or audio will be muted)

### Visual Style (Mirage-inspired)
- **Content**: Smooth, shifting gradient colors
- **Colors**: Match Tenchi brand palette (violet #8b5cf6 and cyan #06b6d4)
- **Style**: Flowing, organic color transitions
- **Motion**: Slow, subtle movement (aurora/nebula effect)
- **Seamless Loop**: Ensure first and last frames match for smooth looping

## Creating Your Video

### Option 1: Use AI Video Generation
1. Use tools like Runway ML, Pika, or similar AI video generators
2. Prompt example: "Smooth flowing gradient animation, violet and cyan colors, slow organic movement, abstract aurora effect"
3. Export at 1920x1080, 30fps

### Option 2: Create with After Effects / Premiere
1. Create a new composition (1920x1080, 10 seconds)
2. Add gradient layers with keyframed positions/colors
3. Apply blur and blending effects
4. Export as H.264 MP4 and WebM

### Option 3: Use Free Stock Footage
- Sites like Pexels, Pixabay, or Coverr have gradient/abstract videos
- Search for: "gradient animation", "color flow", "abstract motion"
- Download and edit colors to match Tenchi brand

## Converting and Optimizing

### MP4 (H.264) - Using FFmpeg
```bash
ffmpeg -i input.mov -c:v libx264 -preset slow -crf 23 -vf scale=1920:1080 -an hero-gradient.mp4
```

### WebM (VP9) - Using FFmpeg
```bash
ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 2M -vf scale=1920:1080 -an hero-gradient.webm
```

### Optimization Tips
- **Remove Audio**: Add `-an` flag to remove audio track
- **Reduce File Size**: Adjust `-crf` (18-28, lower = better quality)
- **Loop Seamlessly**: Use crossfade between start/end frames

## How It Works

The `VideoBackground` component:
- **Desktop (≥801px)**: Plays the looping video
- **Mobile (<801px)**: Shows static fallback image (`/images/hero-fallback.jpg`)
- **Fallback**: If video fails to load, gradient CSS background is shown

This approach saves bandwidth on mobile devices while providing a rich visual experience on desktop.

## Testing

After adding your video files:
1. Run `pnpm dev` to start the development server
2. Visit `http://localhost:3000`
3. **Desktop**: Should see looping video background
4. **Mobile**: Resize browser to <801px, should see static image
5. Check browser console for any video loading errors

## Need Help?

If you need assistance creating or optimizing your video:
- Check the [FFmpeg documentation](https://ffmpeg.org/ffmpeg.html)
- Use online converters like CloudConvert or HandBrake
- Or just use a static gradient background temporarily by removing video sources

