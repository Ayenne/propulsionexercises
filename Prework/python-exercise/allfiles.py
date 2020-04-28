import os

def files_and_dirlist():
    path = "."
    dirs = os.listdir(path)
    for file in dirs:
        return file
print(files_and_dirlist())