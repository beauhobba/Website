import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// Placeholder image (replace with a relevant PyChat image if available)
import pychatImage from '../../images/pychat.png';

// const images = [
//     {
//         original: pychatImage,
//         thumbnail: pychatImage,
//     },
// ];

const PyChat = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "PyChat";

    const handleSubmit = () => {
        handleShow();
    };

    return (
        <>
            <div className="col-sm">
                <CardTile
                    photo={pychatImage}
                    text={class_text}
                    event={() => handleSubmit()}
                />
            </div>
            <Modal show={show} onHide={handleClose} size="lg">

                <Modal.Title style={{ paddingLeft: 10, display: "flex", justifyContent: "center" }}>
                    <div>
                        <h1 className="font-weight-light">
                            {class_text}
                        </h1>
                    </div>
                </Modal.Title>

                <Modal.Body>
                    <div className="font-weight-light">

                        <h4 className="font-weight-light">Descriptions</h4>
                        <hr style={{ colour: "black", backgroundColour: "white", height: 5 }} />

                        <p>
                            I worked extensively on the development of PyChat, a natural language system for use within the Home AI platform. My first task was implementing <strong>text embeddings</strong> using Sentence Transformers, allowing paraphrases to be matched semantically for intelligent responses.
                        </p>

                        <p>
                            I added multiple <strong>machine learning models</strong>, including KNN, SVM, Naive Bayes, Decision Trees, Random Forest and Perceptron. These were benchmarked using <strong>accuracy, precision and F1 score</strong>, along with auto-generated <strong>ROC and confusion matrices</strong> to visualise performance.
                        </p>

                        <p>
                            To reduce retraining time, I implemented functionality to <strong>save and load models and embeddings</strong> using `.pkl` files. This helped streamline testing and allowed reuse of training parameters, which I referred to as “fast models”.
                        </p>

                        <p>
                            I also <strong>Dockerised PyChat</strong> to ensure it could run across different machines reliably. I resolved Docker networking and environment issues, which improved internal testing for other developers.
                        </p>

                        <p>
                            I designed and deployed a range of <strong>Flask API endpoints</strong> to allow Home AI to train, update, query and monitor the PyChat service. To address long training times, I <strong>threaded the application</strong> and added a <strong>status field</strong> (e.g. “training”, “ready”) to avoid interface blocking and improve system communication.
                        </p>

                        <p>
                            I added <strong>Sphinx documentation</strong> to the PyChat repository, and also developed a script to <strong>convert legacy data from IBM Watson</strong>, including handling unlinked IDs and removing duplicate paraphrases.
                        </p>

                        <p>
                            I began work on <strong>deep learning models</strong> using Keras (ResNet and VGG16), training these with sample data in Google Colab. I researched and tested appropriate <strong>loss functions and optimisers</strong>, and incorporated these into the training pipeline.
                        </p>

                        <p>
                            I also implemented <strong>data augmentation</strong> using NLTK for small class sets, balancing training input across under-represented phrases. In addition, I worked on improving <strong>data storage and memory efficiency</strong>, introducing .pkl-based systems for model parameters and preprocessed input data.
                        </p>

                        <h4 className="font-weight-light">Skills Used</h4>
                        <hr style={{ colour: "black", backgroundColour: "white", height: 5 }} />
                        <ul>
                            <li>Python (scikit-learn, Flask, NLTK, Sentence Transformers, Keras)</li>
                            <li>Machine Learning & Model Benchmarking</li>
                            <li>Docker & System Deployment</li>
                            <li>API Development & Multithreading</li>
                            <li>IBM Watson Data Migration</li>
                            <li>Sphinx Documentation</li>
                            <li>Data Augmentation & Efficiency</li>
                        </ul>

                        {/* <h4 className="font-weight-light">Gallery</h4>
                        <hr style={{ colour: "black", backgroundColour: "white", height: 5 }} />
                        <ImageGallery items={images} /> */}

                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PyChat;
