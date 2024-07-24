import tkinter as tk
import customtkinter as ctk
from firebase_admin import credentials, initialize_app, db
from PIL import Image, ImageTk
from tkinter import ttk
import imageio

#initializations
cred = credentials.Certificate('mylandingpage-7b36c-firebase-adminsdk-iwips-38a3a0569d.json')
initialize_app(cred, {'databaseURL': 'https://mylandingpage-7b36c-default-rtdb.asia-southeast1.firebasedatabase.app/'})
dbRef = db.reference('/esp32')  #root node

#resources
mainBG = 'mainBG.png'
mainBG2 = "tabBG.gif"
schematicsBG = 'schematics.png'
lcd = "lcd.png"

#4 - Flag to control button press state.
displayTextFlag = False 
def toggleDisplayTextFlag(textToDisplayData, tabBtn):
    global displayTextFlag
    displayTextFlag = not displayTextFlag
    if(displayTextFlag == True):
        print("Collecting data...")
        tabBtn.configure(fg_color="green", hover_color="red")
    else:
        print("Data collection terminated...")
        tabBtn.configure(fg_color="gray", hover_color="green")

    fetchData(textToDisplayData)

#5 - fetch realtime data from firebase database and update/display data.
def fetchData(textToDisplayData):
    if displayTextFlag:
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
    else:
        textToDisplayData.configure(state="normal")
        textToDisplayData.delete(1.0, ctk.END)
        
    textToDisplayData.configure(state="disabled")
    root.after(3000, fetchData, textToDisplayData)

#2.1 - tab creation for tabs with .gif or .mp4 as background.
def createVideoTab(addContent, tabId, videoPath):
    #tab = ctk.CTkFrame(root)
    tabView.add(tabId)

    if addContent:
        addContent(tabId, videoPath)

#2 - create tab within in the root window.
def createTab(addContent, tabId, mainBgImagePath, width, height):
    tabView.add(tabId)

    img1 = ctk.CTkImage(dark_image=Image.open(mainBgImagePath), size=(width, height))
    imgLabel = ctk.CTkLabel(tabView.tab(tabId),  text="", image=img1)
    imgLabel.image = img1
    imgLabel.place(relx=0, rely=0, relwidth=1, relheight=1)

    img2 = ctk.CTkImage(dark_image=Image.open(lcd), size=(250, 150))
    imgLabel2 = ctk.CTkLabel(tabView.tab(tabId),  text="", image=img2)
    imgLabel2.image = img2
    imgLabel2.place(relx=0.155, rely=0.1, relwidth=.24, relheight=.19)

    if addContent:
        addContent(tabId)
        
#3 - adding addContents to a tab such as textBox or buttons.
def addTabContents(tabId, videoPath):
    #Label to display video
    videoLabel = ctk.CTkLabel(tabView.tab(tabId), text="", bg_color="transparent")
    #videoLabel = tk.Label(tabView.tab(tabId))
    videoLabel.pack()
    #Load and read video
    videoReader = imageio.get_reader(videoPath)

    #Function to update the video frames
    def updateVideoFrame():
        try:
            #Get next frame from the video
            frame = videoReader.get_next_data()
            #Convert frame to PhotoImage
            frameImage = ImageTk.PhotoImage(Image.fromarray(frame))
            #Update label with  new frame
            videoLabel.configure(image=frameImage)
            videoLabel.image = frameImage
            #Schedule  function to run after a delay
            tabView.after(30, updateVideoFrame)
        except Exception as e:
            #End of video, reset to beginning to loop
            """videoReader.set_image_index(0)
            updateVideoFrame()"""
    #Start updating video frames
    updateVideoFrame()

    #lcdImage
    img2 = ctk.CTkImage(dark_image=Image.open(lcd), size=(250, 150))
    imgLabel2 = ctk.CTkLabel(tabView.tab(tabId),  text="", image=img2)
    imgLabel2.image = img2
    imgLabel2.place(relx=0.155, rely=0.1, relwidth=.24, relheight=.19)

    #textBox
    textToDisplayData = ctk.CTkTextbox(tabView.tab(tabId), fg_color="green", text_color="black", bg_color='green',
                                       corner_radius=0, width=208, height=62, activate_scrollbars=False, state="disabled")
    textToDisplayData.place(relx=.366, rely=.187, anchor=ctk.E)

    #button
    tabBtn = ctk.CTkButton(tabView.tab(tabId), text="", fg_color="gray", hover_color="green", width=15, height=15, corner_radius=50,
                           bg_color="transparent", command= lambda: toggleDisplayTextFlag(textToDisplayData, tabBtn))
    tabBtn.place(relx=0.367, rely=0.3)
    backBtn = ctk.CTkButton(tabView.tab(tabId), text="Back", fg_color="gray", hover_color="blue", width=15, height=15, corner_radius=50,
                             bg_color="transparent", command= lambda: callWindow(0))
    backBtn.place(relx=0.005, rely=.965)

#light or dark mode
def switchModes():
    state = switchVar.get()
    if(state == "off"):
        ctk.set_appearance_mode("dark")
        print("Switch light mode:", state)
    elif(state == "on"):
        ctk.set_appearance_mode("light")
        print("Switch light mode:", state)
    
def callWindow(start):
    if start:
        frame.pack_forget()
        tabView.pack()
    else:
        frame.pack()
        tabView.pack_forget()

#default window appearance
ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

#root window configs
root = ctk.CTk()
root.title("Metal Detector Landing Page")
root.geometry('1250x775')
root.resizable(False, False)

frame = ctk.CTkFrame(root, width=1250, height=775, fg_color="transparent")
frame.pack()

img1 = ctk.CTkImage(dark_image=Image.open("mainFrameBG.png"), size=(1250, 775))
imgLabel = ctk.CTkLabel(frame,  text="", image=img1)
imgLabel.image = img1
imgLabel.place(relx=0, rely=0, relwidth=1, relheight=1)

frameBtn = ctk.CTkButton(frame, text="View Live Data", fg_color="gray", hover_color="blue", width=35, height=35, corner_radius=25,
                         bg_color="transparent", command= lambda: callWindow(1))
frameBtn.place(relx=0.225, rely=0.7)

#tab declaration
tabView = ctk.CTkTabview(root, width=1000, height=750, fg_color="transparent")

#light/dark mode configs
switchVar = ctk.StringVar(value="off")
switch = ctk.CTkSwitch(root, text="", command=switchModes, variable=switchVar, onvalue="on", offvalue="off", bg_color="transparent")
switch.place(relx=0.487, rely=.950)

#1 - tabs creation | createTab(addContent, tabId, btnTxt, mainBgImagePath, width, height)
createVideoTab(addTabContents, "Live Data", mainBG2) #A tab with the looping video display | createVideoTab(tabId, videoPath)

#createTab(addTabContents, "Live Data", mainBG, 950, 620)
#createTab(addTabContents, "Schematics", None, schematicsBG, 650, 537)
#obsolete tab creation
"""tabview.add("3-D Model")
img2 = ctk.CTkImage(dark_image=Image.open(im2), size=(500, 500))
imgLabel = ctk.CTkLabel(tabview.tab("3-D Model"), text="", image=img2)
imgLabel.image = img2
imgLabel.place(relx=0, rely=0, relwidth=1, relheight=1)

tabview.add("Schematics")
img3 = ctk.CTkImage(dark_image=Image.open(im2), size=(500, 500))
imgLabel = ctk.CTkLabel(tabview.tab("Schematics"),  text="", image=img3)
imgLabel.image = img3
imgLabel.place(relx=0, rely=0, relwidth=1, relheight=1)"""

root.mainloop()