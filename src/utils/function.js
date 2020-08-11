import marked from 'marked'

/**
 * Convert File to text
 * @param {File} file file to convert to plain text
 */
export function fileToText (file) {
  return new Promise((resolve) => {
    const reader = new window.FileReader()
    reader.readAsText(file, 'UTF-8')

    reader.onload = () => {
      resolve(reader.result)
    }
  })
}

/**
 * Permet le telechargement du fichier passé en parametre
 * @param {String} filename Name of the downloaded file
 * @param {string} mimeType mime type of the file
 * @param {string} content content of the file
 */
export function download (filename, mimeType, content) {
  const link = document.createElement('a')
  const href = `data:${mimeType};charset=utf-8,${encodeURIComponent(content)}`
  link.setAttribute('href', href)
  link.setAttribute('download', filename)
  link.classList.add('inactive')

  document.body.appendChild(link)

  link.click()

  document.body.removeChild(link)
}

/**
 * Convertit le markdown vers du HTML
 * @param {String} mdText Content of markdown file
 */
export function mdToHtml (mdText) {
  let html = '<article class="markdown-body">'
  html += marked(mdText)
  html += '</article>'
  return html
}

/**
 * Create css for html file
 * @param {string} cssFile css to apply
 * @param {string} baseCssLink link of the base css which is applying to html page
 */
export function css (cssFile, baseCssLink) {
  let cssResult = ''
  cssResult += '<link rel="stylesheet" href="' + baseCssLink + '">'
  cssResult += '<style>' + cssFile + '</style>'

  return cssResult
}

/**
 * Gere les erreurs
 * @param {String} err error
 */
export function error (err) {
  throw err
}

export function openInNewWindow (html, cssLink) {
  const printWin = window.open('', 'Printing Page', 'fullscreen')
  printWin.document.write('<!DOCTYPE html><html><head><title>PRINT ME (Ctrl+P)</title><link rel="stylesheet" href="' + cssLink + '"></head><body onafterprint="self.close() onload="window.print()>')
  printWin.document.write(html)
  printWin.document.write('</body></html>')
}
