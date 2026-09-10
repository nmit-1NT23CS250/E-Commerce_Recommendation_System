Distributed AI-Driven E-Commerce Recommendation System Overview This project is an AI-powered hybrid product recommendation system that combines Collaborative Filtering (ALS) and Deep Learning (TensorFlow) to generate intelligent product recommendations. It processes large-scale Amazon e-commerce data using PySpark and delivers real-time recommendations through a Flask-based web application.

Features • Hybrid recommendation engine using ALS and Deep Learning • Distributed data processing with PySpark • Intelligent product search and recommendations • Displays product images, ratings, prices, reviews, and purchase links • Real-time recommendation delivery through Flask API • Responsive web interface using HTML, CSS, and JavaScript

Technologies Used • Python • PySpark • TensorFlow • Flask • Pandas • HTML • CSS • JavaScript

Project Structure Ecommerce-recommender 1.Backend app.py recommendations.csv requirements.txt 2.Frontend index.html style.css script.js 3.README.md

Project Workflow

Load and preprocess the Amazon e-commerce dataset using PySpark.
Train an ALS collaborative filtering model to generate predicted ratings.
Build a TensorFlow embedding model to learn user-product relationships.
Combine ALS and Deep Learning predictions into a hybrid recommendation score.
Store recommendation results in a CSV file.
Serve recommendations through a Flask backend API.
Display product recommendations on the web interface.
How to Run

Clone the repository git clone https://github.com/nmit-1NT23CS250/ecommerce-recommender.git
Navigate to the project folder cd ecommerce-recommender
Install the required dependencies pip install -r requirements.txt
Run the Flask application cd backend python app.py
Open the frontend Open the frontend/index.html file in your browser.
Dataset Amazon E-commerce Product Dataset containing product details, ratings, reviews, prices, images, and product links.

Future Enhancements • User authentication and personalized recommendations • Explainable AI for recommendation transparency • Category-based and content-based recommendations • Cloud deployment • Performance optimization and scalability improvements

Author Tanisha Prabhu
