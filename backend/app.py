from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(BASE_DIR, "recommendations.csv")

df = pd.read_csv(file_path)


df.columns = df.columns.str.lower().str.strip()


df = df.drop_duplicates(subset=["product_name"])


def fix_image(url):
    if pd.isna(url) or str(url).strip() == "" or "http" not in str(url):
        return "https://via.placeholder.com/150"
    return url

df["img_link"] = df["img_link"].apply(fix_image)


df["review"] = df["review_title"].fillna("") + " - " + df["review_content"].fillna("")

@app.route("/recommend/<query>")
def recommend(query):
    query = query.lower()

    results = df[df["product_name"].str.lower().str.contains(query, na=False)]

    if results.empty:
        return jsonify([])

    results = results.sort_values(by="predicted_rating", ascending=False)

    return jsonify(results[[
    "product_name",
    "img_link",
    "predicted_rating",
    "discounted_price",
    "product_link",   # ✅ ADD THIS
    "review"
]].head(10).to_dict(orient="records"))
if __name__ == "__main__":
    app.run(debug=True)