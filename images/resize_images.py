from PIL import Image
import os

def resize_images(directory):
    target_size = (1408, 768)
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.png'):
                image_path = os.path.join(root, file)
                try:
                    with Image.open(image_path) as img:
                        if img.size != target_size:
                            print(f"Resizing {image_path} from {img.size} to {target_size}")
                            resized_img = img.resize(target_size)
                            resized_img.save(image_path)
                        else:
                            print(f"Image {image_path} is already the correct size.")
                except Exception as e:
                    print(f"Could not process {image_path}: {e}")

if __name__ == "__main__":
    current_directory = '.'
    resize_images(current_directory)
