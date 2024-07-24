#do "pip install flask" in terminal.
#do "python myLandingPage.py" to get deployment server link.
from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='styles')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/booking')
def booking():
    return render_template('booking.html')

if __name__ == '__main__':
    app.run(debug=True)