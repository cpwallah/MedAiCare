from flask import Flask, request, render_template
import numpy as np
from PIL import Image
import io
from keras.models import load_model

app = Flask(__name__)
model = load_model("keras_model.h5", compile=False)

from PIL import Image
import numpy as np

def preprocess_image(img):
    # Resize the image to a fixed size (e.g., 224x224)
    img = img.resize((224, 224))
    
    # Convert to NumPy array
    img_array = np.array(img)
    
    # Normalize pixel values to the range [0, 1]
    img_array = img_array / 255.0
    
    # Add any additional preprocessing steps as needed
    
    return img_array

def generate_prescription(prediction):
    # Assuming a binary classification (e.g., 0 for normal, 1 for tumor)
    class_index = np.argmax(prediction)
    
    if class_index == 0:
        # If the model predicts 'normal,' provide a standard message
        prescription = "Your MRI scan shows no signs of a brain tumor. "
        prescription += "We recommend regular check-ups to monitor your health."
    else:
        # If the model predicts 'tumor,' provide a recommendation for further evaluation
        prescription = "Your MRI scan indicates the presence of a brain tumor. "
        prescription += "We recommend consulting a medical specialist immediately for a detailed evaluation and treatment plan."
    
    return prescription


@app.route("/", methods=["GET", "POST"])
def classify_image():
    if request.method == "POST":
        if 'file' not in request.files:
            return "Please try again. The Image doesn't exist"
        # Get the uploaded image
        file = request.files.get('image')
        uploaded_image = file.read()

        if not file:
                return

        img = Image.open(io.BytesIO(uploaded_image))

        # Preprocess the image (resize, normalize, etc.)
        img = preprocess_image(img)

        # Use the trained model to make a prediction
        prediction = model.predict(np.array([img]))

        # Convert prediction to a prescription or recommendation
        prescription = generate_prescription(prediction)

        return render_template("result.html", prescription=prescription)

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
