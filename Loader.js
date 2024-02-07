import requests
url = "https://raw.githubusercontent.com/VxleLUA/BlooketGUI-NOT-OWNED-BY-ME-JUST-USING-THIS-FOR-A-LOADSTIRNG-/main/Script.js"
response = requests.get(url)

# Checking if the request was successful
if response.status_code == 200:
    script_content = response.text
    success = True
else:
    script_content = ""
    success = False
success, len(script_content)  # Displaying whether the request was successful and the length of the script content if successful
