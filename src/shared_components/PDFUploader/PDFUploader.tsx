import React, { useState, useCallback } from 'react'
import { extractTextFromPdf } from '@/services/pdfParser'
import './PDFUploader.css'

export default function PDFUploader() {
  const [text, setText] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFile = useCallback(async (file?: File) => {
    setError(null)
    if (!file) return
    setLoading(true)
    try {
      const extracted = await extractTextFromPdf(file)
      setText(extracted)
    } catch (e: any) {
      setError(e?.message || 'Failed to parse PDF')
    } finally {
      setLoading(false)
    }
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    void handleFile(f)
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    void handleFile(f)
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

  return (
    <div className="pdf-uploader">
      <div className="drop-area" onDrop={onDrop} onDragOver={onDragOver}>
        <p>Arraste e solte um PDF aqui ou</p>
        <input type="file" accept="application/pdf" onChange={onChange} />
      </div>

      {loading && <div className="loading">Extraindo texto...</div>}
      {error && <div className="error">{error}</div>}

      {text && (
        <div className="preview">
          <h3>Texto extraído</h3>
          <pre>{text}</pre>
        </div>
      )}
    </div>
  )
}
