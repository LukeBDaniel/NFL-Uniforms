import os
import sys
import argparse
from PIL import Image

# Define constant crop ranges (Start, End) - 0-indexed for PIL crop
# User ranges: 1-382, 383-807, 808-1212, 1195-1600
# PIL Ranges: (0, 382), (382, 807), (807, 1212), (1194, 1600)
CROP_RANGES = {
    "helmet": (0, 382),
    "jersey": (382, 807),
    "pants": (807, 1212),
    "socks": (1195, 1600)
}

def crop_image(image_path, layer):
    """
    Crops the image at image_path based on the layer type.
    """
    if layer not in CROP_RANGES:
        print(f"Skipping {image_path}: layer '{layer}' not recognized.")
        return False

    try:
        with Image.open(image_path) as img:
            width, height = img.size
            start_y, end_y = CROP_RANGES[layer]
            
            # Ensure the crop is within image bounds
            if end_y > height:
                print(f"Warning: image {image_path} is smaller ({height}px) than required end range ({end_y}px).")
                end_y = height
            
            # PIL crop box: (left, top, right, bottom)
            crop_box = (0, start_y, width, end_y)
            cropped_img = img.crop(crop_box)
            
            # Save the cropped image back to the same path
            cropped_img.save(image_path)
            print(f"Successfully cropped {os.path.basename(image_path)} ({layer}: {start_y}-{end_y}px)")
            return True
            
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description="Automated uniform image cropping tool")
    parser.add_argument("folder", help="The folder containing the images to crop")
    args = parser.parse_args()

    folder_path = os.path.abspath(args.folder)
    
    if not os.path.isdir(folder_path):
        print(f"Error: folder '{folder_path}' does not exist.")
        sys.exit(1)

    print(f"Scanning folder: {folder_path}")
    
    files_processed = 0
    for filename in os.listdir(folder_path):
        if not filename.lower().endswith('.png'):
            continue
            
        # Naming convention: [TEAM]_[layer]_[index].png
        parts = filename.split('_')
        if len(parts) < 3:
            print(f"Skipping {filename}: does not follow '[TEAM]_[layer]_[index].png' format.")
            continue
            
        team = parts[0]
        layer = parts[1].lower()
        
        full_path = os.path.join(folder_path, filename)
        if crop_image(full_path, layer):
            files_processed += 1

    print(f"\nFinished! Total images cropped: {files_processed}")

if __name__ == "__main__":
    main()
