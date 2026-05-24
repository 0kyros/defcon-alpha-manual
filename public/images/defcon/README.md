# Defcon gallery — image placement

Two image sets live in this directory:

1. **Public OSINT (already present)** — `ml-006.jpg`, `ml-243.jpg`, `ml-104409.jpg`, `ml-104643.jpg`. Sourced from militaryland.net public profile of the 2nd SOD KORD / HUR. Already in the public domain. Live on the homepage in the "Public OSINT references" section.

2. **Chapter gallery (placeholders)** — used by the chapter `modern-warfare/defcon-alpha`. The chapter renders four image slots. Until you drop the files here, the chapter gallery shows broken-image icons (intentional — the structure is in place, only the binary files are missing).

The homepage "Field" gallery has been removed (slots were never filled). If you later want a homepage gallery of user-supplied photos, ask for it to be re-added.

## Required files for the chapter gallery

| Filename | Source (from conversation) | Notes |
|---|---|---|
| `team-night-nvg.jpg` | Night group with "defcon tribe" flag, all faces already obscured | Keep face obscuration as-is. |
| `gur-coast.jpg` | Day group with HUR/GUR flag, coastal/bridge setting | Public-channel style image. |
| `boat-team-sun.jpg` | Four operators on RIB with sun on water | NVGs visible. |
| `rib-operator.jpg` | RIB operator portrait with "ВЕТЕРАНИ" patch | Single operator, no identifiable face. |

## Image excluded

Foto 3 (solo operator seated inside a structure with kit detail and a Ukrainian
trident patch) was deliberately NOT included in the gallery. Reason: identifiable
domestic interior; pose; lighting suggests a safehouse rather than an
operational area; not a publication-style frame. If you want it in anyway,
add it to `GALLERY_BASE` in `src/content/modern-warfare/defcon-alpha.tsx`
and add captions in all four locales.

## Mandatory pre-publication checks

Before dropping any file here:

1. **Strip EXIF / GPS metadata.** Run:
   ```
   exiftool -all= -overwrite_original <filename>
   ```
   This removes camera GPS, model, serial, original capture timestamp.
2. **Confirm no identifiable face is visible.** If a face appears in any frame
   that was not blacked-out by the original publisher, do not upload until
   the face is obscured (paint over or blur).
3. **Confirm no identifiable terrain that would geo-locate operations.**
   Distinctive buildings, signposts, vehicle plates, ship names, unique
   coastline features — review and exclude if present.
4. **Confirm rights.** Public-channel images released by the unit or by HUR
   official channels are usable here. Internal photos shared only within
   the unit are NOT to be republished without explicit unit permission.
5. **Optimise size.** Convert to JPEG quality ~80, max edge 1600 px:
   ```
   magick input.jpg -auto-orient -resize 1600x1600> -quality 80 output.jpg
   ```

## File size targets

- Each file under 400 KB on disk
- 4:3 or 1:1 aspect preferred (the gallery component uses 4:3 frames and crops)
- Width 1200–1600 px

The gallery is configured at `src/components/gallery.tsx`. The image list and
captions are at `src/content/modern-warfare/defcon-alpha.tsx`.
