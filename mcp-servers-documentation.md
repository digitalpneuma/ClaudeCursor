# MCP Servers Available to Claude Code

## Overview
This document provides a comprehensive list of all MCP (Model Context Protocol) servers currently accessible to Claude Code, along with their complete tool definitions, parameters, and capabilities.

---

## 1. Exa MCP Server

**Purpose:** Web search and code context retrieval using Exa AI's search engine

### Tools

#### `web_search_exa`
Search the web using Exa AI and retrieve content from relevant websites.

**Parameters:**
- `query` (string, required): Search query
- `numResults` (number, optional): Number of search results to return (default: 5)

**Returns:** Content from the most relevant websites based on the search query

**Use Cases:**
- Real-time web searches
- Scraping content from specific URLs
- Getting up-to-date information

---

#### `get_code_context_exa`
Search and retrieve relevant context for programming tasks. Provides highest quality and freshest context for libraries, SDKs, and APIs.

**Parameters:**
- `query` (string, required): Search query to find relevant context for APIs, Libraries, and SDKs
  - Examples: "React useState hook examples", "Python pandas dataframe filtering", "Express.js middleware", "Next.js partial prerendering configuration"
- `tokensNum` (number, optional): Number of tokens to return (1000-50000)
  - Default: 5000 tokens
  - Adjust based on context needs: lower for focused queries, higher for comprehensive documentation

**Returns:** Relevant code context, documentation, and examples

**Use Cases:**
- Finding API documentation
- Getting library usage examples
- Understanding SDK features
- Learning framework configurations

---

## 2. Ref Tools MCP Server

**Purpose:** Documentation search and URL content retrieval from public and private sources

### Tools

#### `ref_search_documentation`
Search for documentation on the web, GitHub, and private resources like repos and PDFs.

**Parameters:**
- `query` (string, required): Query for documentation
  - Should include programming language and framework/library names
  - Searches public docs by default
  - Include `ref_src=private` to search private docs

**Returns:** Documentation search results with URLs

**Use Cases:**
- Finding official documentation
- Searching GitHub repositories
- Accessing private documentation resources

---

#### `ref_read_url`
Read the content of a URL as markdown.

**Parameters:**
- `url` (string, required): The URL of the webpage to read
  - Should be the entire exact URL from a `ref_search_documentation` result

**Returns:** Webpage content formatted as markdown

**Use Cases:**
- Reading documentation pages
- Extracting content from search results
- Converting web content to readable format

---

## 3. Playwright MCP Server

**Purpose:** Browser automation and web page interaction for testing and scraping

### Navigation Tools

#### `browser_navigate`
Navigate to a URL.

**Parameters:**
- `url` (string, required): The URL to navigate to

---

#### `browser_navigate_back`
Go back to the previous page.

**Parameters:** None

---

### Tab Management

#### `browser_tabs`
List, create, close, or select a browser tab.

**Parameters:**
- `action` (string, required): Operation to perform
  - Options: "list", "new", "close", "select"
- `index` (number, optional): Tab index for close/select operations
  - If omitted for close, current tab is closed

---

### Page Interaction Tools

#### `browser_click`
Perform click on a web page.

**Parameters:**
- `element` (string, required): Human-readable element description
- `ref` (string, required): Exact target element reference from page snapshot
- `button` (string, optional): Button to click (default: "left")
  - Options: "left", "right", "middle"
- `doubleClick` (boolean, optional): Perform double click instead of single click
- `modifiers` (array, optional): Modifier keys to press
  - Options: "Alt", "Control", "ControlOrMeta", "Meta", "Shift"

---

#### `browser_type`
Type text into editable element.

**Parameters:**
- `element` (string, required): Human-readable element description
- `ref` (string, required): Exact target element reference from page snapshot
- `text` (string, required): Text to type into the element
- `slowly` (boolean, optional): Type one character at a time to trigger key handlers
  - Default: entire text filled at once
- `submit` (boolean, optional): Press Enter after typing

---

#### `browser_press_key`
Press a key on the keyboard.

**Parameters:**
- `key` (string, required): Name of key to press or character to generate
  - Examples: "ArrowLeft", "a", "Enter", "Escape"

---

#### `browser_hover`
Hover over element on page.

**Parameters:**
- `element` (string, required): Human-readable element description
- `ref` (string, required): Exact target element reference from page snapshot

---

#### `browser_drag`
Perform drag and drop between two elements.

**Parameters:**
- `startElement` (string, required): Human-readable source element description
- `startRef` (string, required): Exact source element reference from page snapshot
- `endElement` (string, required): Human-readable target element description
- `endRef` (string, required): Exact target element reference from page snapshot

---

#### `browser_select_option`
Select an option in a dropdown.

**Parameters:**
- `element` (string, required): Human-readable element description
- `ref` (string, required): Exact target element reference from page snapshot
- `values` (array of strings, required): Values to select in the dropdown
  - Can be single or multiple values

---

### Form Tools

#### `browser_fill_form`
Fill multiple form fields.

**Parameters:**
- `fields` (array of objects, required): Fields to fill in
  - Each field object contains:
    - `name` (string, required): Human-readable field name
    - `ref` (string, required): Exact target field reference from page snapshot
    - `type` (string, required): Type of field
      - Options: "textbox", "checkbox", "radio", "combobox", "slider"
    - `value` (string, required): Value to fill
      - For checkbox: "true" or "false"
      - For combobox: text of the option

---

#### `browser_file_upload`
Upload one or multiple files.

**Parameters:**
- `paths` (array of strings, optional): Absolute paths to files to upload
  - Can be single or multiple files
  - If omitted, file chooser is cancelled

---

### Page Analysis Tools

#### `browser_snapshot`
Capture accessibility snapshot of the current page. Better than screenshot for element interaction.

**Parameters:** None

**Returns:** Accessibility tree representation of the page

---

#### `browser_take_screenshot`
Take a screenshot of the current page.

**Parameters:**
- `element` (string, optional): Human-readable element description for element screenshot
- `ref` (string, optional): Exact target element reference from page snapshot
- `fullPage` (boolean, optional): Screenshot full scrollable page instead of viewport
  - Cannot be used with element screenshots
- `type` (string, optional): Image format (default: "png")
  - Options: "png", "jpeg"
- `filename` (string, optional): File name to save screenshot
  - Default: "page-{timestamp}.{png|jpeg}"
  - Prefer relative file names to stay within output directory

**Note:** Cannot perform actions based on screenshot; use `browser_snapshot` for actions.

---

#### `browser_console_messages`
Returns all console messages.

**Parameters:**
- `onlyErrors` (boolean, optional): Only return error messages

---

#### `browser_network_requests`
Returns all network requests since loading the page.

**Parameters:** None

---

### Advanced Tools

#### `browser_evaluate`
Evaluate JavaScript expression on page or element.

**Parameters:**
- `function` (string, required): JavaScript function to execute
  - Format: `() => { /* code */ }` or `(element) => { /* code */ }` when element is provided
- `element` (string, optional): Human-readable element description
- `ref` (string, optional): Exact target element reference from page snapshot

---

#### `browser_wait_for`
Wait for text to appear/disappear or a specified time to pass.

**Parameters:**
- `text` (string, optional): Text to wait for
- `textGone` (string, optional): Text to wait for to disappear
- `time` (number, optional): Time to wait in seconds

---

#### `browser_handle_dialog`
Handle a dialog (alert, confirm, prompt).

**Parameters:**
- `accept` (boolean, required): Whether to accept the dialog
- `promptText` (string, optional): Text for prompt dialog

---

### Browser Management

#### `browser_resize`
Resize the browser window.

**Parameters:**
- `width` (number, required): Width of browser window
- `height` (number, required): Height of browser window

---

#### `browser_close`
Close the page.

**Parameters:** None

---

#### `browser_install`
Install the browser specified in the config.

**Parameters:** None

**Use Case:** Call this if you get an error about the browser not being installed

---

## 4. IDE MCP Server

**Purpose:** Integration with VS Code for diagnostics and code execution

### Tools

#### `getDiagnostics`
Get language diagnostics from VS Code (errors, warnings, etc.).

**Parameters:**
- `uri` (string, optional): File URI to get diagnostics for
  - If not provided, gets diagnostics for all files

**Returns:** Language diagnostics including errors, warnings, and information messages

**Use Cases:**
- Checking for compilation errors
- Finding linting issues
- Identifying type errors
- Reviewing code problems

---

#### `executeCode`
Execute Python code in the Jupyter kernel for the current notebook file.

**Parameters:**
- `code` (string, required): Python code to execute on the kernel

**Important Notes:**
- All code executes in the current Jupyter kernel
- Avoid declaring variables or modifying state unless explicitly requested
- Code persists across calls unless kernel is restarted
- Only works with notebook files

**Returns:** Execution results including output, errors, and display data

**Use Cases:**
- Running Python code in notebooks
- Testing code snippets
- Debugging notebook cells
- Analyzing data interactively

---

## Summary Table

| MCP Server | Number of Tools | Primary Use Case |
|------------|----------------|------------------|
| **Exa** | 2 | Web search and code documentation |
| **Ref Tools** | 2 | Documentation search and URL reading |
| **Playwright** | 23 | Browser automation and testing |
| **IDE** | 2 | VS Code integration and Jupyter execution |

**Total Tools Available: 29**

---

## Key Features Across All Servers

### Exa Server
- Real-time web searches with configurable result counts
- Specialized code context retrieval with token limits
- Access to freshest library and API documentation

### Ref Tools Server
- Public and private documentation search
- GitHub repository searching
- Markdown conversion of web content

### Playwright Server
- Complete browser automation suite
- Element interaction with accessibility-first approach
- Form handling and file uploads
- Screenshot and snapshot capabilities
- Network and console monitoring
- JavaScript evaluation in browser context
- Multi-tab management

### IDE Server
- Language server diagnostics integration
- Jupyter kernel code execution
- Real-time error and warning detection

---

## Best Practices

1. **Exa Server:**
   - Use `get_code_context_exa` for any programming-related queries
   - Adjust `tokensNum` based on context needs
   - Include specific framework/library names in queries

2. **Ref Tools Server:**
   - Always use `ref_read_url` with exact URLs from search results
   - Include programming language in search queries
   - Specify `ref_src=private` when searching private docs

3. **Playwright Server:**
   - Use `browser_snapshot` before interactions to get element refs
   - Prefer `browser_snapshot` over `browser_take_screenshot` for actions
   - Always provide both `element` and `ref` parameters for interactions
   - Use `browser_wait_for` for dynamic content

4. **IDE Server:**
   - Check `getDiagnostics` before building/deploying
   - Use `executeCode` only for notebook files
   - Remember that Jupyter state persists across executions

---

## Parameter Type Reference

### Common Parameter Types

- **string**: Text value, may have format requirements (e.g., URI, URL)
- **number**: Numeric value, may have min/max constraints
- **boolean**: true/false value
- **array**: List of values, may be typed (e.g., array of strings)
- **object**: Complex structure with nested properties
- **enum**: Restricted set of allowed string values

### Required vs Optional

- **required**: Must be provided for the tool to function
- **optional**: Can be omitted, often has default behavior
- Some parameters are conditionally required (e.g., `ref` when `element` is provided)

---

## Integration Notes

All MCP servers are prefixed with `mcp__` in their tool names:
- `mcp__exa__web_search_exa`
- `mcp__ref-tools__ref_search_documentation`
- `mcp__playwright__browser_navigate`
- `mcp__ide__getDiagnostics`

This naming convention helps identify MCP-provided tools versus built-in Claude Code tools.
