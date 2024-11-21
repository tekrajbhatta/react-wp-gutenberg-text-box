# Text Box Gutenberg Block

## 📝 Description
**Text Box** is a custom Gutenberg block plugin that allows users to create stylish, customizable text boxes with easy-to-use inline editing and block settings.

## ✨ Features
- **Dynamic Text Editing**: Easily edit text directly in the block.
- **Customizable Styling**:
  - Background color selection
  - Individual padding controls
  - Border radius customization
  - Heading tag selection
  - Text color selection
- **Default Styling**: Comes with pre-configured default styles.
- **Responsive Design**: Adapts to different screen sizes.

---

## 🚀 Installation

### From GitHub
1. Clone the repository:
  ```bash
  git clone https://github.com/tekrajbhatta/react-wp-gutenberg-text-box.git
  ```
2. Navigate to the plugin directory:
  ```bash
  cd react-wp-gutenberg-text-box
  ```
3. Install dependencies:
  ```bash
  npm install
  ```
4. Build the plugin:
  ```bash
  npm run build
  ```
3. Install dependencies:
  ```bash
  cd react-wp-gutenberg-text-box
  ```

### In WordPress
1. Download the plugin ZIP file
2. Go to WordPress Admin > Plugins > Add New
3. Click "Upload Plugin"
4. Select the downloaded ZIP file
5. Click "Install Now" and then "Activate"

## 🔧 Development

### Prerequisites
- **Node.js**
- **npm**
- **WordPress development environment**

### Setup
1. Clone the repository.
2. Install dependencies:
  ```bash
  npm install
  ```

### Available Scripts

| Script            | Description                             |
|--------------------|-----------------------------------------|
| `npm run build`    | Compile and build the plugin           |
| `npm start`        | Start development mode with hot reloading |

## 🛠 Customization

You can customize the block by modifying the following files:

- **`block.json`**: Define block attributes and metadata.
- **`edit.js`**: Modify editor-side block behavior.
- **`save.js`**: Control how the block is rendered on the front-end.
- **`style.css`**: Adjust default styling.

## 📋 Block Attributes

| Attribute          | Description                            |
|---------------------|----------------------------------------|
| **Content**         | Main text content                     |
| **Background Color**| Container background color            |
| **Padding**         | Individual padding for container      |
| **Border Radius**   | Corner rounding                       |
| **Heading Tag**     | Choose from H1-H6                     |
| **Text Color**      | Text foreground color                 |

## 🎨 Default Settings

- **Default Text**: "In summary, Pro-QCP will optimize your most important workflow: delivering accurate test results."
- **Background Color**: Blue (`#0000FF`)
- **Text Color**: White (`#FFFFFF`)
- **Heading Tag**: `H4`
- **Padding**: `0` on top/bottom, `23%` on left/right
- **Border Radius**: `20px` on all corners

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch:
  ```bash
  git checkout -b feature/AmazingFeature
  ```
3. Commit your changes:
  ```bash
  git commit -m 'Add some AmazingFeature'
  ```
4. Push to the branch:
  ```bash
  git push origin feature/AmazingFeature
  ```
5. Open a Pull Request.

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact
- **Tek Raj Bhatta** - [GitHub Profile](https://github.com/tekrajbhatta)
- **Project Link**: [https://github.com/tekrajbhatta/react-wp-gutenberg-text-box](https://github.com/tekrajbhatta/react-wp-gutenberg-text-box)

## 🙏 Acknowledgements
- [WordPress](https://wordpress.org)
- [Gutenberg](https://developer.wordpress.org/block-editor/)
- [React](https://reactjs.org)

---

**Happy Coding! 💻**
