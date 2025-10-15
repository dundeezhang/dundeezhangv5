#!/bin/bash
# convert_jpeg_to_webp.sh
# Converts all .jpg/.jpeg images in the current directory to .webp format using cwebp,
# then deletes the original JPEG files.

QUALITY=80  # default quality (0–100)

echo "Starting JPEG → WEBP conversion (quality=$QUALITY)..."

for img in *.jpg *.jpeg *.png *.gif; do
    # Skip if no matches
    [ -e "$img" ] || continue

    base="${img%.*}"
    output="${base}.webp"

    echo "Converting '$img' -> '$output' ..."
    if cwebp -q "$QUALITY" "$img" -o "$output" >/dev/null 2>&1; then
        echo "✅ Converted: $output"
    else
        echo "❌ Failed to convert: $img"
    fi
done

echo
echo "🧹 Cleaning up original JPEG files..."
rm -f -- *.jpg *.jpeg *.png *.gif

echo "✅ All done — images converted and removed."
