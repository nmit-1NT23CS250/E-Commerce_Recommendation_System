Distributed AI-Driven E-Commerce Recommendation System Overview This project is an AI-powered hybrid product recommendation system that combines Collaborative Filtering (ALS) and Deep Learning (TensorFlow) to generate intelligent product recommendations. It processes large-scale Amazon e-commerce data using PySpark and delivers real-time recommendations through a Flask-based web application.

Features
1. Hybrid recommendation engine using ALS and Deep Learning 
2. Distributed data processing with PySpark 
3. Intelligent product search and recommendations
4. Displays product images, ratings, prices, reviews, and purchase links
5. Real-time recommendation delivery through Flask API
6. Responsive web interface using HTML, CSS, and JavaScript

Technologies Used
1. Python 
2. PySpark
3. TensorFlow 
4. Flask 
5. Pandas 
6. HTML
7. CSS
8. JavaScript

Project Structure Ecommerce-recommender
1.Backend app.py 
  -recommendations.csv 
  -requirements.txt 
2.Frontend 
  -index.html 
  -style.css 
  -script.js
3.README.md

Project Workflow
1. Load and preprocess the Amazon e-commerce dataset using PySpark.
2. Train an ALS collaborative filtering model to generate predicted ratings.
3. Build a TensorFlow embedding model to learn user-product relationships.
4. Combine ALS and Deep Learning predictions into a hybrid recommendation score.
5. Store recommendation results in a CSV file.
6. Serve recommendations through a Flask backend API.
7. Display product recommendations on the web interface.

How to Run
1. Clone the repository git clone https://github.com/nmit-1NT23CS250/ecommerce-recommender.git
2. Navigate to the project folder cd ecommerce-recommender
3. Install the required dependencies pip install -r requirements.txt
4. Run the Flask application cd backend python app.py
5. Open the frontend Open the frontend/index.html file in your browser.
6. Dataset Amazon E-commerce Product Dataset containing product details, ratings, reviews, prices, images, and product links.

Future Enhancements 
1. User authentication and personalized recommendations 
2. Explainable AI for recommendation transparency
3. Category-based and content-based recommendations
4. Cloud deployment
5. Performance optimization and scalability improvements

Author - Tanisha Prabhu
