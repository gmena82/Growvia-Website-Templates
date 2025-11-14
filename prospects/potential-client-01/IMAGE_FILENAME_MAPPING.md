# Image Filename Optimization Mapping

This document maps current image filenames to SEO-optimized descriptive filenames following the pattern: `[service-type]-[location]-[descriptor].webp`

## Recommended Filename Changes

### Hero Images
- `/images/img/hero-backsplash.png` → `kitchen-backsplash-clermont-fl.webp`
- `/images/AboutUs-NoText.png` → `tile-installation-clermont-groveland-fl.webp` (used on multiple service pages)

### Service Card Images
- `/images/img/kitchen-backsplash.png` → `kitchen-backsplash-service-clermont-fl.webp`
- `/images/img/bathroom-shower.png` → `bathroom-shower-tile-clermont-fl.webp`
- `/images/img/floor-tile.png` → `floor-tile-installation-clermont-fl.webp`
- `/images/img/fireplace.png` → `fireplace-tile-surround-clermont-fl.webp`
- `/images/img/special-projects.png` → `custom-tile-projects-clermont-fl.webp`
- `/images/services/outside-projects.webp` → `outdoor-patio-tile-clermont-fl.webp` (already descriptive)

### Gallery Images (already well-named, but could be enhanced)
- `/images/gallery/kitchen-backsplash-stone-lock.webp` → `kitchen-backsplash-stone-ledger-winter-garden-fl.webp`
- `/images/gallery/bathroom-remodel-tile.webp` → `bathroom-shower-tile-minneola-fl.webp`
- `/images/gallery/fireplace-project-square-tile.webp` → `fireplace-square-tile-groveland-fl.webp`
- `/images/gallery/patio-tile-black.webp` → `outdoor-patio-tile-black-groveland-fl.webp`

### Other Images
- `/images/Tile-Collage.webp` → `tile-installation-collage-clermont-groveland-fl.webp`
- `/images/contact-bg.webp` → `kitchen-backsplash-contact-clermont-fl.webp`
- `/images/admiring-backsplash.webp` → `homeowner-admiring-backsplash-clermont-fl.webp`
- `/images/Brad.webp` → `brad-tile-installer-groveland-fl.webp`
- `/images/tile-installer-2.webp` → `professional-tile-installer-central-florida.webp`

### Blog Images
- `/images/Premixed-grout.webp` → `pre-mixed-grout-kitchen-backsplash-fl.webp`
- `/images/Tile-Shop-Feature.png` → `tile-showroom-groveland-fl.webp`
- `/images/Groveland.webp` → `aesthetic-tile-groveland-location-fl.webp`
- `/images/Tile-Shop-Photoshoot.webp` → `tile-selection-photoshoot-orlando-fl.webp`

## Implementation Notes

**Important:** Renaming files requires:
1. Renaming files in `/public/images/` directory
2. Updating all references in code (search and replace)
3. Updating image sitemap (`app/sitemap-images.xml/route.ts`)
4. Potentially breaking existing bookmarks/links if images are directly linked

**Recommendation:** Consider renaming files during a maintenance window or implement gradually, starting with new images.






