from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data
users = {
    "john": {"bio": "John's bio"},
    "jane": {"bio": "Jane's bio"},
}


@app.route("/user/<username>", methods=["GET"])
def get_user(username):
    user = users.get(username)
    if user:
        return jsonify(user), 200
    else:
        return jsonify({"error": "User not found"}), 404


import requests


def start():
    url = "http://127.0.0.1:5001/swe363-321-project/us-central1/sayHello"
    response = requests.get(url)
    print(response.text)


if __name__ == "__main__":
    start()
