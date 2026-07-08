import pandas as pd

df = pd.read_csv("recommendations.csv")


print("Columns:", df.columns)
print("Sample data:\n", df.head())

def get_recommendations(user_id):
    # convert to int just in case
    user_id = int(user_id)

    # filter
    user_data = df[df["user_index"] == user_id]

    print(f"User {user_id} rows:", len(user_data))  # debug

    # if no data → return top products
    if user_data.empty:
        return df.sort_values(by="predicted_rating", ascending=False)\
                 .head(5)\
                 .to_dict(orient="records")

    return user_data.sort_values(by="predicted_rating", ascending=False)\
                    .head(5)\
                    .to_dict(orient="records")