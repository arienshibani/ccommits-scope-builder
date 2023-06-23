# VSCode CComits Scope Builder

Node script that automatically populate CComits scopes in your `.vscode/settings.json` file used by the [CComits VSCode extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) to help you write better commit messages in large projects and mono-repos.

## Conventional Commits

[Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) is a convention for writing commit messages. It provides a set of rules for creating an explicit commit history.

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

Given the folder structure above, after placing the script at root level and executing it with `node index.js` your workspace setting will automatically populate with a list of scopes that can help you and your team adopt a meaningfull common ground for writing conventional commits.

### Result
The folder paths will be saved as available scopes in your local workspace settings after execution.
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
CComits VSCode Extension will then be able to auto suggest the scopes generated whenever you use the extension to commit.
![image](https://github.com/arienshibani/ccommits-scope-builder/assets/22197324/230ddd6a-f5a1-4928-ad33-443ebb52a93c)




### Why folders as scopes?

Scopes should indicate the module, package, or area of the code that was affected by the changes made in the commit. Rather than using specific file paths, directories *feels*   better to use in my opinion. Option for specifying every file as well as ignoring paths in .gitignore will be added later to the script.
