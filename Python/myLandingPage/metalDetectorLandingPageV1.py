import tkinter as tk
from tkinter import PhotoImage, ttk
from firebase_admin import credentials, initialize_app, db
from PIL import Image, ImageTk
import imageio

#initializations
cred = credentials.Certificate('mylandingpage-7b36c-firebase-adminsdk-iwips-38a3a0569d.json')
initialize_app(cred, {'databaseURL': 'https://mylandingpage-7b36c-default-rtdb.asia-southeast1.firebasedatabase.app/'})
db_ref = db.reference('/esp32')  #root node

#Flag to control button presses.
display_data_flag = False 

def toggle_display_data_flag(data_display):
    global display_data_flag
    display_data_flag = not display_data_flag
    fetch_data(data_display)

def fetch_data(data_display):
    if display_data_flag:
        data = db_ref.get()
        data_display.config(state=tk.NORMAL)
        data_display.delete(1.0, tk.END)
        if data:
            for key, value in data.items():
                formatted_data = f"{key}:\n"
                if isinstance(value, dict):
                    for sub_key, sub_value in value.items():
                        formatted_data += f"-{sub_key}: {sub_value}\n"
                else:
                    formatted_data += f"    {value}\n"
                data_display.insert(tk.END, formatted_data)
        else:
            data_display.insert(tk.END, "No data available.\n")
        data_display.config(state=tk.DISABLED)
    app.after(3000, fetch_data, data_display)

def create_tab_with_video(content, notebook, text, video_path):
    tab = ttk.Frame(notebook)
    notebook.add(tab, text=text)

    #Label to display video
    video_label = tk.Label(tab)
    video_label.pack()
    #Load and read video
    video_reader = imageio.get_reader(video_path)

    #Function to update the video frames
    def update_video_frame():
        try:
            #Get next frame from the video
            frame = video_reader.get_next_data()
            #Convert frame to PhotoImage
            frame_image = ImageTk.PhotoImage(Image.fromarray(frame))
            #Update label with  new frame
            video_label.configure(image=frame_image)
            video_label.image = frame_image
            #Schedule  function to run after a delay
            tab.after(30, update_video_frame)
        except Exception as e:
            #End of video, reset to beginning to loop
            video_reader.set_image_index(0)
            update_video_frame()
    #Start updating video frames
    update_video_frame()
    if content:
        content(tab)

def create_tab(content, text, image_path):
    tab = ttk.Frame(notebook)
    notebook.add(tab, text=text)

    #background image to the tab
    img = tk.PhotoImage(file=image_path)
    img_label = tk.Label(tab, image=img)
    img_label.image = img  #reference to avoid garbage collection
    img_label.place(relx=0, rely=0, relwidth=1, relheight=1)

    if content:
        content(tab)

def add_tab_contents(tabRef):
    data_display = tk.Text(tabRef, borderwidth=0, highlightthickness=0, height=10, width=30, state=tk.DISABLED) #textWidget initialization
    data_display.place(relx=.415, rely=.19, anchor=tk.E)

    #tab buttons
    button1 = tk.Button(tabRef, text="Click to View Data", command=lambda: toggle_display_data_flag(data_display))
    button1.place(relx=.18, rely=.025, anchor=tk.E)

"""def on_tab_selected():
    notebook.index(notebook.select())"""

"""def update_data_periodically():
    if display_data_flag:
        fetch_data()
    app.after(3000, update_data_periodically)  #listen for data update every 3s."""

"""def on_data_change(event):
    if display_data_flag:
        fetch_data()"""

#Tkinter setup
app = tk.Tk()
app.title("Metal Detector Landing Page")
app.geometry('600x625')
#app.resizable(False, False)

notebook = ttk.Notebook(app)

#Create tabs with different content and background images
#create_tab(content, tabText, image_path)
create_tab(add_tab_contents, "Live Data", "mainBG.png")
create_tab_with_video(None, notebook, "3-D Model", "furinacool.mp4") # Create a tab with the looping video display
create_tab(None, "Schematics", "schematics.png")

notebook.pack(expand=True, fill="both")
#notebook.bind("<<NotebookTabChanged>>", on_tab_selected)

#realTimeDatabaseEventListener
#db_ref.listen(on_data_change)
#alternative method below is not safe
#db_ref.listen(update_data_periodically())

#updateDataEventListener
#update_data_periodically()

#fetch_data()

app.mainloop()