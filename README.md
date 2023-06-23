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

Given the folder structure above, after placing the script at root level and executing it with `node index.js` you get the results depicted below. An automatically populated list of scopes for your project.

### Result

```json
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

### Why folders as scopes?

Scopes should indicate the module, package, or area of the code that was affected by the changes made in the commit. Rather than using specific file paths, directories *feels*   better to use.
