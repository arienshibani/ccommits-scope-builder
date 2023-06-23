# VSCode CComits Scope Builder 🔎

Node script that automatically populates your conventional commit scopes in your repositories `.vscode/settings.json` file, used by the [VSCode CComits extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) to help developers in your team create meaningfull commit messages. The script uses the paths of folders, and sub-folders by default to create these scopes.

## Quickstart 🚀
* Requires [Node](https://nodejs.org/en) v.16 or higher
1. Copy the `index.js` file from this repo, and paste it at the root level of your repository.
2. Execute the script with `node index.js`

## Conventional Commits

[Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) is a convention for writing commit messages. It provides a set of rules for creating an explicit commit history, and if used properly, can be used to auto generate changelogs.

## How does it work?

The script simply traverses your working directory, stores the names of all folders and sub-folders in a list before iterating over that list and creating an entry for each element in your `.vscode/settings.json`

### Example Project Structure

```bash
- .vscode
- front-end
    - components
    - public
- back-end
- random

```

Given the folder structure above, after placing the script at root level and executing it with `node index.js` your workspace setting will automatically populate with a list of scope strings.

### Example Result: settings.json
The script will write all folder and sub-folder names to the `scopes` key in your local conventional commit workspace settings after execution.
```js
{
  // .vscode/settings.json
  "conventionalCommits.scopes": [
    "backend",
    "front-end",
    "front-end/components",
    "front-end/public",
    "random",
  ]
}
```
### Example Result: VSCode CComits Extension

[CComits VSCode Extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) will then be able to auto suggest the scopes generated whenever you use the extension to commit.

![image](https://github.com/arienshibani/ccommits-scope-builder/assets/22197324/230ddd6a-f5a1-4928-ad33-443ebb52a93c)




### Why folders as scopes?

Scopes should indicate the module, package, or area of the code that was affected by the changes made in the commit. Rather than using specific file paths, directories *feels*   better to use and are easy to automatically generate. 

### Roadmap
Option for specifying every file as well as ignoring paths in .gitignore is planned for this script. Feel free to make a PR if you miss any functionality. 
