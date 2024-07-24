import tkinter as tk
from tkinter import PhotoImage
from firebase_admin import credentials, firestore, initialize_app

# Replace 'path/to/your/serviceAccountKey.json' with the actual path to your downloaded JSON file
cred = credentials.Certificate('E:\PROGRAMMING\Python\myLandingPageV2\mylandingpage-7b36c-firebase-adminsdk-iwips-38a3a0569d.json')
initialize_app(cred)

# Get a reference to the Firestore database
db = firestore.client()

def fetch_data():
    # Fetch data from the 'users' collection (replace with your actual collection name)
    users_ref = db.collection('users')
    docs = users_ref.get()

    # Display data
    data_display.config(state=tk.NORMAL)
    data_display.delete(1.0, tk.END)  # Clear previous data
    for doc in docs:
        data_display.insert(tk.END, f"{doc.id}: {doc.to_dict()}\n")
    data_display.config(state=tk.DISABLED)

# Tkinter setup
app = tk.Tk()
app.title("Metal Detector Landing Page")
app.geometry('500x500')

image_path=PhotoImage(file=r"E:\PROGRAMMING\Python\myLandingPageV2\bg2.png")
bg_image=tk.Label(app, image=image_path)
bg_image.pack()

# Button to fetch and display data
fetch_button = tk.Button(app, text="Fetch Data", command=fetch_data)
fetch_button.pack(pady=10)

# Text widget to display data
data_display = tk.Text(app, height=10, width=40, state=tk.DISABLED)
data_display.pack(pady=10)

app.mainloop()
