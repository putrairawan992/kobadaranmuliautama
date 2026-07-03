"""Make a logo's white background transparent.

Usage:  python scripts/remove_bg.py public/logo-src.png public/logo.png
Near-white pixels -> fully transparent; a feather band avoids a hard halo.
"""
import sys
from PIL import Image

# ponytail: fixed white-threshold, good enough for a white-bg logo.
# If the logo sits on a colored bg, swap this for a flood-fill from corners.
HARD = 245   # >= this on all channels -> transparent
SOFT = 225   # between SOFT..HARD -> partial alpha (feather)


def remove_white(src: str, dst: str) -> Image.Image:
    img = Image.open(src).convert("RGBA")
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            m = min(r, g, b)
            if m >= HARD:
                px[x, y] = (r, g, b, 0)
            elif m > SOFT:
                # linear feather across the SOFT..HARD band
                px[x, y] = (r, g, b, int(a * (HARD - m) / (HARD - SOFT)))
    img.save(dst)
    return img


def _selfcheck() -> None:
    im = Image.new("RGBA", (2, 1), (255, 255, 255, 255))
    im.putpixel((0, 0), (10, 80, 200, 255))  # brand blue, keep
    im.putpixel((1, 0), (255, 255, 255, 255))  # white, drop
    im.save("_t_in.png")
    out = remove_white("_t_in.png", "_t_out.png")
    assert out.getpixel((0, 0))[3] == 255, "blue pixel must stay opaque"
    assert out.getpixel((1, 0))[3] == 0, "white pixel must go transparent"
    import os
    os.remove("_t_in.png"); os.remove("_t_out.png")
    print("selfcheck OK")


if __name__ == "__main__":
    if len(sys.argv) == 2 and sys.argv[1] == "--check":
        _selfcheck()
    elif len(sys.argv) == 3:
        remove_white(sys.argv[1], sys.argv[2])
        print(f"wrote {sys.argv[2]}")
    else:
        sys.exit(__doc__)
