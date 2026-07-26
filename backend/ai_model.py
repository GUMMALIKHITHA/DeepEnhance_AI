import os
import shutil

OUTPUT_FOLDER = "outputs"

os.makedirs(OUTPUT_FOLDER, exist_ok=True)


def enhance_image(input_path):
    filename = os.path.basename(input_path)

    output_path = os.path.join(
        OUTPUT_FOLDER,
        filename
    )

    shutil.copy(input_path, output_path)

    return output_path