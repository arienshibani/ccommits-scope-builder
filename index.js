const fs = require('fs');
const path = require('path');
// Get the current working directory
const rootDir = process.cwd();


// Helper function used to prevent duplicates in the file paths that sometimes occur.
const removeDuplicateSegments = (str) => {
    const segments = str.split('/');
    const uniqueSegments = [];

    segments.forEach((segment) => {
        if (segment && !uniqueSegments.includes(segment)) {
            uniqueSegments.push(segment);
        }
    });

    return uniqueSegments.join('/');
}

// Helper file, used to make sure that the "settings.json" file exists, and that the ".vscode" folder exists.
const ensureVsCodeFolderAndSettingsFile = () => {
    const vscodeDir = path.join(process.cwd(), '.vscode');
    const settingsPath = path.join(vscodeDir, 'settings.json');

    if (!fs.existsSync(vscodeDir)) {
    fs.mkdirSync(vscodeDir);
    }

    if (!fs.existsSync(settingsPath)) {
    fs.writeFileSync(settingsPath, JSON.stringify({}, null, 2));
    }
}

const traverseDirectory = (dir, ignoreList = []) => {
    const files = fs.readdirSync(dir);
    let results = [];
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (ignoreList.includes(file)) {
        return;
      }
      if (fs.statSync(fullPath).isDirectory()) {
        const relativePath = path.relative(rootDir, fullPath);
        results.push(removeDuplicateSegments(path.join(relativePath)));
        results = results.concat(traverseDirectory(fullPath, ignoreList));
      }
    });
    return results;
  }

// Start by making sure that the ".vscode" folder and the "settings.json" file exists.
ensureVsCodeFolderAndSettingsFile()

// Define a list of folders to ignore
const ignoreList = ['.git', '.github', 'node_modules'];

// Get the path to the settings.json file
const settingsPath = path.join(rootDir, '.vscode', 'settings.json');

// Read the current contents of the settings.json file
const settingsContent = fs.readFileSync(settingsPath, 'utf8');

// Parse the JSON content
const settingsObject = JSON.parse(settingsContent);

// Add the new key to the settings object
settingsObject["conventionalCommits.scopes"] = traverseDirectory(rootDir, ignoreList);
settingsObject["conventionalCommits.emojiFormat"] = "emoji"

try {
    // Write the updated settings object to the settings.json file
    fs.writeFileSync(settingsPath, JSON.stringify(settingsObject, null, 2));
} catch (error) {
    console.log("Something failed..", error)
}
