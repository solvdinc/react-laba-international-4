# LABA Frontend Course – Naming Conventions and Tooling Setup

This document establishes naming conventions, formatting rules, and code quality tools for the LABA frontend course. Following these standards will ensure that your code is consistent, readable, and maintainable.

## 1. Formatting and Naming

Your code should not only be correct but also readable and aesthetically pleasing. As Grady Booch stated, good code should "read like well-written prose."
Be absolutely consistent with indentation, spacing, and capitalization. Linting tools will help, but there are additional aspects that require manual discipline.

### 1.1 Filenames

- Lowercase with kebab-case for all files, except React components.
- React components should use PascalCase (e.g., `UserProfile.tsx`).

**Examples:**

```text
# Good
utils/format-date.js
components/NavBar.tsx
styles/global-styles.scss

# Bad
utils/FormatDate.js  # Should be kebab-case
components/navbar.tsx  # Should be PascalCase for React
styles/globalStyles.scss  # Should be kebab-case
```

### 1.2 Assets Naming Conventions

- Use kebab-case for all asset files (images, fonts, PDFs, videos, etc.).
- Avoid spaces, underscores, or special characters in filenames.
- Use meaningful, descriptive names.

**Examples:**

```text
# Good
homeworks/html-basics/assets/files/vitalii-melnyk-linkedin.pdf
assets/fonts/open-sans-bold.ttf
public/videos/promo-introduction.mp4
resources/documents/company-style-guide.pdf

# Bad
homeworks/html-basics/files/VItalii Melnyk _ LinkedIn.pdf  # Spaces and uppercase letters
assets/fonts/OpenSansBold.TTF  # PascalCase instead of kebab-case
public/videos/promoIntroduction.mp4  # camelCase instead of kebab-case
resources/documents/CompanyStyleGuide.PDF  # Uppercase letters and PascalCase
```

### 1.3 Functions and Variables

- Use camelCase for function and variable names.
- Do not use consecutive uppercase letters, even for abbreviations (e.g., `getPdp` instead of `getPDP`).
- Be descriptive. Avoid overly abbreviated names unless it’s a well-known acronym.

**Examples:**

```text
# Good
function fetchUserData() { }
const userAge = 25;
const isVerified = true;

# Bad
function fetchuserdata() { }  // Not readable
const usrAg = 25;  // Too abbreviated
const isVERIFIED = true;  // Should be camelCase
```

### 1.4 Classes

- Use PascalCase for class names.
- Do not use consecutive uppercase letters, even for abbreviations (e.g., `ClassForUat` instead of `ClassForUAT`).

```text
# Good
class ShoppingCart { }
class UserAuthManager { }

# Bad
class Shoppingcart { }  // Should be PascalCase
class USERAuthManager { }  // Avoid consecutive uppercase letters
```

### 1.5 Constants and Environment Variables

- Use UPPER_SNAKE_CASE for constants and environment variables.

```text
# Good
const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";

# Bad
const maxUsers = 100;  // Should be uppercase for constants
const ApiBaseUrl = "https://api.example.com";  // Inconsistent casing
```

### 1.6 CSS Naming (BEM Methodology)

To ensure clarity and maintainability in CSS, we follow the BEM (Block Element Modifier) methodology.

**Examples:**

```css
/* Block */
.button {
	background-color: blue;
}

/* Element */
.button__icon {
	width: 16px;
	height: 16px;
}

/* Modifier */
.button--large {
	padding: 12px 24px;
}
```

### 1.7 Folder Structuring

Proper folder structuring is essential for maintaining clean and scalable projects.

- Every type of asset should be placed in an appropriate folder (e.g., fonts in `fonts/`, images in `images/`, etc.).
- Use kebab-case for all folders except in React projects, where PascalCase can be used for component folders.
- Organize homework files logically to separate different concerns properly.

```text
# Good
homeworks/html-basics/assets/images/
homeworks/html-basics/assets/fonts/
homeworks/react-app/components/
homeworks/react-app/utils/

# Bad
homeworks/htmlBasics/images/  # Inconsistent casing
homeworks/html-basics/Images/  # Uppercase in folder names
homeworks/react_app/utils/  # Underscore instead of kebab-case
```

### 1.8 Summary of Naming Conventions

| Type                                   | Convention                           | Example                                               |
| -------------------------------------- | ------------------------------------ | ----------------------------------------------------- |
| **Files (General)**                    | kebab-case                           | `user-profile.js`                                     |
| **React Components**                   | PascalCase                           | `UserProfile.tsx`                                     |
| **Functions/Variables**                | camelCase                            | `fetchUserData()`                                     |
| **Classes**                            | PascalCase                           | `ShoppingCart`                                        |
| **Constants**                          | UPPER_SNAKE_CASE                     | `MAX_USERS`                                           |
| **CSS Blocks**                         | kebab-case                           | `.button`                                             |
| **CSS Elements**                       | block\_\_element                     | `.button__icon`                                       |
| **CSS Modifiers**                      | block--modifier                      | `.button--large`                                      |
| **Assets (Images, Fonts, PDFs, etc.)** | kebab-case                           | `logo-company.png`                                    |
| **Folders**                            | kebab-case (except React components) | `fonts/`, `images/`, `new-folder/`, `ReactComponent/` |

## 2. Code Quality and Tooling Setup

### All further commands should be executed in the root of your repository

To enforce these conventions automatically, we will use the following tools:

#### Create .gitignore file in the root of your repository and add **node_modules** to that file

### 2.1 ESLint (Linting)

**ESLint** helps enforce JavaScript/TypeScript best practices and catches common errors.

#### Installation:

Press enter for all further questions while initialization

```bash
npm init
```

```bash
npm init @eslint/config@latest
```

Follow this configuration:

```json
  ✔ How would you like to use ESLint? · problems
  ✔ What type of modules does your project use? · esm
  ✔ Which framework does your project use? · none
  ✔ Does your project use TypeScript? · javascript
  ✔ Where does your code run? · browser
  The config that you've selected requires the following dependencies:

  eslint, globals, @eslint/js
  ✔ Would you like to install them now? · Yes
  ✔ Which package manager do you want to use? · npm
```

For React/TypeScript projects, install additional plugins:

```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-next
```

Run ESLint with:

```bash
npx eslint .
```

### 2.2 Prettier (Code Formatting)

**Prettier** ensures consistent formatting for your code.

#### Installation:

```bash
npm install --save-dev prettier eslint-config-prettier
```

#### Configuration (`.prettierrc`):

```json
{
	"printWidth": 100,
	"tabWidth": 2,
	"singleQuote": true,
	"semi": true,
	"trailingComma": "es5"
}
```

Run Prettier with:

```bash
npx prettier --write .
```

### 2.3 Husky (Pre-commit Hooks)

**Husky** ensures that linting and formatting happen before commits.

#### Installation:

```bash
npm install --save-dev husky lint-staged
```

```bash
npx husky init
```

#### Setup Pre-commit Hook:

```bash
echo "npx lint-staged" > .husky/pre-commit
```

#### Configure `lint-staged` (`package.json`):

```json
"lint-staged": {
    "**/*.{js,ts,tsx}": [
      "eslint --fix",
      "prettier --write ."
    ],
    "**/*.{html}": [
      "prettier --write ."
    ]
  },
```

Now, every time you commit, ESLint and Prettier will automatically run on the staged files.
