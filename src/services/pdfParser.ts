import { getDocument, GlobalWorkerOptions, type PDFDocumentProxy } from 'pdfjs-dist'

// Configure worker (uses the distributed worker in pdfjs-dist)
// Note: Vite will bundle this; ensure the path is resolved at runtime
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${(getDocument as any).version}/pdf.worker.min.js`

export async function extractTextFromPdf(file: File): Promise<string> {
  if (!file) throw new Error('No file provided')
  const arrayBuffer = await file.arrayBuffer()
  const loadingTask = getDocument({ data: arrayBuffer })
  const pdf: PDFDocumentProxy = await loadingTask.promise
  const numPages = pdf.numPages
  const pagesText: string[] = []

  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    const pageText = content.items.map((item: any) => (item.str || '')).join(' ')
    pagesText.push(pageText)
  }

  // clean up
  try {
    await pdf.cleanup()
  } catch (e) {
    // ignore cleanup errors
  }

  return pagesText.join('\n\n')
}
