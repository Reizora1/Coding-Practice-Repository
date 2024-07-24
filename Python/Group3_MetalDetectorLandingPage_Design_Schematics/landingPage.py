import tkinter as tk
import customtkinter as ctk
from firebase_admin import credentials, initialize_app, db
from PIL import Image, ImageTk
import imageio

#initializations
cred = credentials.Certificate('mylandingpage-c51cd-firebase-adminsdk-rtyj2-844a0ee8c1.json')
initialize_app(cred, {'databaseURL': 'https://mylandingpage-c51cd-default-rtdb.asia-southeast1.firebasedatabase.app/'})
dbRef = db.reference('/esp32')#root node

#resources
mainBG = 'mainframeBG.png'
tabBG = "tabBG.gif"
lcd = "lcd.png"

#flags
displayTextFlag = False #displayFlag
startVideo = False  #videoFlag

#5.1- toggle for textBox to display data.
def toggleDisplayTextFlag(textToDisplayData, lcdBtn):
    global displayTextFlag
    displayTextFlag = not displayTextFlag
    if displayTextFlag:
        print("Displaying data...")
        lcdBtn.configure(fg_color="green", hover_color="red")
    else:
        print("Data display terminated...")
        lcdBtn.configure(fg_color="gray", hover_color="green")
    fetchData(textToDisplayData)

#6- fetch realtime data from firebase database and update/display the data.
def fetchData(textToDisplayData):
    if displayTextFlag:
        try:
            data = dbRef.get()
            textToDisplayData.configure(state="normal")
            textToDisplayData.delete(1.0, ctk.END)
            if data:
                for key, value in data.items():
                    formattedData = f"{key}:\n"
                    if isinstance(value, dict):
                        for sub_key, sub_value in value.items():
                            formattedData += f"-{sub_key}: {sub_value}\n"
                    else:
                        formattedData += f"    {value}\n"
                    textToDisplayData.insert(ctk.END, formattedData)
            else:
                textToDisplayData.insert(ctk.END, "No data available.\n")
        except:
            textToDisplayData.configure(state="normal")
            textToDisplayData.delete(1.0, ctk.END)
            textToDisplayData.insert(ctk.END, "No internet connection . . .")
    else:
        textToDisplayData.configure(state="normal")
        textToDisplayData.delete(1.0, ctk.END)
        
    textToDisplayData.configure(state="disabled")
    root.after(3000, fetchData, textToDisplayData)

#4- tab creation function.
def createVideoTab(addElement, tabId, gifSource):
    tabView.add(tabId)
    if addElement:
        addElement(tabId, gifSource)

"""def createTab(addElement, tabId, mainBgImagePath, width, height):
    tabView.add(tabId)

    img1 = ctk.CTkImage(dark_image=Image.open(mainBgImagePath), size=(width, height))
    imgLabel = ctk.CTkLabel(tabView.tab(tabId), text="", image=img1)
    imgLabel.image = img1
    imgLabel.place(relx=0, rely=0, relwidth=1, relheight=1)

    img2 = ctk.CTkImage(dark_image=Image.open(lcd), size=(250, 150))
    imgLabel2 = ctk.CTkLabel(tabView.tab(tabId), text="", image=img2)
    imgLabel2.image = img2
    imgLabel2.place(relx=0.155, rely=0.1, relwidth=.24, relheight=.19)

    if addElement:
        addElement(tabId, mainBgImagePath)"""

#5- adding elements ot the tab
def addTabElements(tabId, gifSource):
    #video
    global videoReader
    global videoLabel
    videoLabel = ctk.CTkLabel(tabView.tab(tabId), text="", bg_color="transparent")
    videoLabel.pack()
    videoReader = imageio.get_reader(gifSource)

    #lcdImage
    img2 = ctk.CTkImage(dark_image=Image.open(lcd), size=(250, 150))
    imgLabel2 = ctk.CTkLabel(tabView.tab(tabId), text="", image=img2)
    imgLabel2.image = img2
    imgLabel2.place(relx=0.155, rely=0.1, relwidth=.24, relheight=.19)

    #textDisplay
    textToDisplayData = ctk.CTkTextbox(tabView.tab(tabId), fg_color="green", text_color="black", bg_color='green',
                                       corner_radius=0, width=208, height=62, activate_scrollbars=False, state="disabled")
    textToDisplayData.place(relx=.366, rely=.187, anchor=ctk.E)

    #buttons
    lcdBtn = ctk.CTkButton(tabView.tab(tabId), text="", fg_color="gray", hover_color="green", width=15, height=15,
                           corner_radius=50, bg_color="transparent", command=lambda: toggleDisplayTextFlag(textToDisplayData, lcdBtn))
    lcdBtn.place(relx=0.367, rely=0.3)

    backBtn = ctk.CTkButton(tabView.tab(tabId), text="Back", fg_color="gray", hover_color="blue", width=15, height=15,
                            corner_radius=50, bg_color="transparent", command=lambda: displayFrame(False))
    backBtn.place(relx=0.005, rely=.965)

#light/dark mode function toggle.
def switchModes():
    state = switchVar.get()
    if state == "off":
        ctk.set_appearance_mode("dark")
        print("Switch light mode:", state)
    elif state == "on":
        ctk.set_appearance_mode("light")
        print("Switch light mode:", state)

#3.1- mp4/gif frame updater.
def updateVideoFrame():
    if startVideo:
        try:
            frame = videoReader.get_next_data()
            frameImage = ImageTk.PhotoImage(Image.fromarray(frame))
            videoLabel.configure(image=frameImage)
            videoLabel.image = frameImage
            root.after(1, updateVideoFrame)
        except Exception as e:
            """videoReader.set_image_index(0)
            updateVideoFrame()"""

#3- display intro & tab frames.
def displayFrame(start):
    global startVideo
    if start:
        frame.pack_forget()
        tabView.pack()
        startVideo = True  
        updateVideoFrame() #Start playing the video.
    else:
        frame.pack()
        tabView.pack_forget()
        startVideo = False
        videoReader.set_image_index(0)


#default window configs.
root = ctk.CTk()
root.title("Group 3 Landing Page")
root.geometry('1250x775')
root.resizable(False, False)
ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

#1- intro screen frame display.
frame = ctk.CTkFrame(root, width=1250, height=775, fg_color="transparent")
frame.pack()
img1 = ctk.CTkImage(dark_image=Image.open(mainBG), size=(1250, 775))
imgLabel = ctk.CTkLabel(frame, text="", image=img1)
imgLabel.image = img1
imgLabel.place(relx=0, rely=0, relwidth=1, relheight=1)

frameBtn = ctk.CTkButton(frame, text="View Live Data", fg_color="gray", hover_color="blue", width=35, height=35, corner_radius=25,
                         bg_color="transparent", command= lambda: displayFrame(True))
frameBtn.place(relx=0.225, rely=0.7)

#2- tab creation | createVideoTab(addElement, tabId, gifSource).
tabView = ctk.CTkTabview(root, width=1000, height=750, fg_color="transparent")
createVideoTab(addTabElements, "Live Data", tabBG)

#switch button for light/dark mode.
switchVar = ctk.StringVar(value="off")
switch = ctk.CTkSwitch(root, text="", command=switchModes, variable=switchVar, onvalue="on", offvalue="off",
                       bg_color="transparent")
switch.place(relx=0.487, rely=.950)

root.mainloop()