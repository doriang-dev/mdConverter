# Md Converter

Cette application est un convertisseur de fichier Markdown conçu avec React

## Usage

To run the web server:

    npm i
    npm run serve
    
To build the React App:

    npm run build
    
## Format de fichier supportés

- MD -> HTML
- MD -> TXT
- MD -> Printer

To add another format, add a function in src/utils/function.js and import it in src/Components/ModuleConverter.jsx at convert function and add it in the dropdown components. 
