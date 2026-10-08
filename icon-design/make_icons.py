"""App icon generator for קו כחול.

Concept: the app's name, drawn literally — a black puck crossing the blue line on ice.
The blue line is the one rink marking that decides offside, and it is the visual motif
of every lesson diagram, so the icon is the same picture the app teaches with.

Everything is drawn at 8x the target size and downsampled with LANCZOS for clean edges.
Run from the repo root:  python3 icon-design/make_icons.py
Writes to public/icons/.
"""
from pathlib import Path
from PIL import Image, ImageDraw

ICE = (238, 243, 246)
BLUE = (30, 91, 184)
INK = (19, 34, 53)
INK_TOP = (44, 62, 86)  # lit top face of the puck
RED = (196, 37, 48)

OUT = Path(__file__).resolve().parent.parent / "public" / "icons"
SS = 8  # supersampling factor


def draw_icon(size, content_scale=1.0, rounded=False):
    """content_scale < 1 shrinks the puck toward the centre (maskable safe zone).
    The ice and the blue line are background and may run to the edges."""
    S = size * SS
    img = Image.new("RGBA", (S, S), ICE + (255,))
    d = ImageDraw.Draw(img)

    # Thin red center line far to the right, as on a real rink — a hint, not a feature.
    red_w = S * 0.022
    red_x = S * 0.86
    d.rectangle([red_x - red_w / 2, 0, red_x + red_w / 2, S], fill=RED)

    # The blue line: full height, just right of centre.
    line_w = S * 0.20
    line_x = S * 0.56
    d.rectangle([line_x - line_w / 2, 0, line_x + line_w / 2, S], fill=BLUE)

    # The puck, seen at three-quarters, already past the line (moving left, as in the app).
    c = S / 2
    pw = S * 0.60 * content_scale       # puck width
    ph_top = pw * 0.42                  # height of the top ellipse
    depth = pw * 0.20                   # thickness of the side band
    cx = c - S * 0.06 * content_scale
    cy = c - depth / 2
    left, right = cx - pw / 2, cx + pw / 2
    top_y0, top_y1 = cy - ph_top / 2, cy + ph_top / 2

    # A ring of ice around the puck so it separates from the blue at small sizes.
    halo = S * 0.022 * max(content_scale, 0.8)
    d.ellipse([left - halo, top_y0 - halo, right + halo, top_y1 + depth + halo], fill=ICE)
    d.rectangle([left - halo, cy, right + halo, cy + depth], fill=ICE)

    # Side band: bottom ellipse + body, then the top face.
    d.ellipse([left, top_y0 + depth, right, top_y1 + depth], fill=INK)
    d.rectangle([left, cy, right, cy + depth], fill=INK)
    d.ellipse([left, top_y0, right, top_y1], fill=INK_TOP)
    inset = pw * 0.07
    d.ellipse([left + inset, top_y0 + inset * 0.42, right - inset, top_y1 - inset * 0.42], fill=INK)

    if rounded:
        mask = Image.new("L", (S, S), 0)
        ImageDraw.Draw(mask).rounded_rectangle([0, 0, S, S], radius=S * 0.22, fill=255)
        img.putalpha(mask)

    return img.resize((size, size), Image.LANCZOS)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    draw_icon(192).save(OUT / "icon-192.png")
    draw_icon(512).save(OUT / "icon-512.png")
    # Maskable: Android crops to a circle/squircle, so the puck must sit inside the
    # central ~72% safe zone; the ice and blue line are background and fill the canvas.
    draw_icon(512, content_scale=0.72).save(OUT / "icon-512-maskable.png")
    # iOS adds its own rounded mask; give it a full square.
    draw_icon(180).convert("RGB").save(OUT / "apple-touch-icon.png")
    draw_icon(32, rounded=True).save(OUT / "favicon-32.png")
    print("icons written to", OUT)


if __name__ == "__main__":
    main()
