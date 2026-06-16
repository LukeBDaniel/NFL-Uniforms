import os
import argparse
from PIL import Image

def get_removal_pixels(mask_path):
    """
    Reads the mask image and returns a list of (x, y) coordinates
    where the pixel is not fully transparent.
    """
    pixels_to_remove = []
    with Image.open(mask_path) as mask:
        mask = mask.convert("RGBA")
        width, height = mask.size
        # Load pixel data
        data = mask.load()
        for y in range(height):
            for x in range(width):
                r, g, b, a = data[x, y]
                # User mentioned "black non-transparent pixels" on a mostly transparent image.
                # We check for any non-transparent pixel (alpha > 0).
                if a > 0:
                    pixels_to_remove.append((x, y))
                    
    return pixels_to_remove

def clean_sock_image(image_path, pixels_to_remove):
    """
    Sets the specified pixels to transparent in the image.
    """
    try:
        with Image.open(image_path) as img:
            img = img.convert("RGBA")
            data = img.load()
            width, height = img.size
            
            modified = False
            for x, y in pixels_to_remove:
                # Ensure the pixel coordinate is within the bounds of this image
                if x < width and y < height:
                    data[x, y] = (0, 0, 0, 0)
                    modified = True
            
            if modified:
                img.save(image_path)
                return True
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
    return False

def main():
    parser = argparse.ArgumentParser(description="Removes specific pixels from socks images based on a mask.")
    parser.add_argument("--mask", default="assets/sock-removal.png", help="Path to the mask image")
    parser.add_argument("--assets_dir", default="assets", help="Directory containing the team folders")
    args = parser.parse_args()

    # Determine absolute paths based on the script location or current working directory
    base_dir = os.path.dirname(os.path.abspath(__file__))
    mask_path = os.path.join(base_dir, args.mask)
    assets_dir = os.path.join(base_dir, args.assets_dir)

    if not os.path.isfile(mask_path):
        print(f"Error: Mask image not found at {mask_path}")
        return

    print(f"Reading mask image: {mask_path}")
    pixels_to_remove = get_removal_pixels(mask_path)
    print(f"Found {len(pixels_to_remove)} pixels to remove.")

    if not pixels_to_remove:
        print("No pixels to remove. Exiting.")
        return

    print(f"Scanning assets directory for sock images: {assets_dir}")
    processed_count = 0
    
    # Walk through the assets directory to find all sock images
    for root, dirs, files in os.walk(assets_dir):
        for filename in files:
            # Match any PNG containing "_socks_" in its name
            if filename.lower().endswith(".png") and "_socks_" in filename.lower():
                full_path = os.path.join(root, filename)
                if clean_sock_image(full_path, pixels_to_remove):
                    processed_count += 1
                    
    print(f"\nFinished! Cleaned {processed_count} sock images.")

if __name__ == "__main__":
    main()
