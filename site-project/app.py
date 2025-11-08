from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        if username == "admin" and password == "123":  # test 
            return "Login successful!"
        else:
            error = "user or pasword is not right "

    return render_template("login.html", error=error)

if __name__ == "__main__":
    app.run(debug=True)
