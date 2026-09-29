from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        client_name = request.form['name']
        client_email = request.form['email']
        client_message = request.form['message']
        
        # Yahan aap data ko database me save kar sakte hain ya email bhej sakte hain
        print(f"--- New Client Lead Received ---")
        print(f"Name: {client_name}")
        print(f"Email: {client_email}")
        print(f"Message: {client_message}")
        
        return f"<script>alert('Data Transmitted Successfully! Welcome aboard, {client_name}.'); window.location.href='/';</script>"

if __name__ == '__main__':
    app.run(debug=True)