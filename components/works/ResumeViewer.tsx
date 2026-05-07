'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

//cdn worker approach due to nextjs
//(remember for future : nextjs doesn't allow worker files in node_modules to be bundled, so we have to point to a CDN version of the worker)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="flex flex-col h-full">

      {/*controls at top*/}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-updates-dot" />
          <span className="text-sm font-medium text-foreground">Resume</span>
          <span className="text-xs text-muted-foreground">· PDF</span>
          {numPages > 0 && (
            <span className="text-xs text-muted-foreground">
              · {pageNumber} / {numPages}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {/* page controls */}
          {numPages > 1 && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                disabled={pageNumber <= 1}
                className="px-2 py-1 text-xs rounded-inner bg-muted hover:bg-border
                           disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                disabled={pageNumber >= numPages}
                className="px-2 py-1 text-xs rounded-inner bg-muted hover:bg-border
                           disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                →
              </button>
            </div>
          )}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Open in tab ↗
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-xs font-semibold bg-foreground text-background
                       px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity"
          >
            Download ↓
          </a>
        </div>
      </div>

      {/* doc rendering component */}
      <div
        className="flex-1 overflow-y-auto flex justify-center items-start py-8 px-6"
        style={{
          background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.015) 10px, rgba(0,0,0,0.015) 11px)',
          backgroundColor: 'oklch(0.97 0.002 286)',
        }}
      >
        <div
          className="rounded-inner overflow-hidden"
          style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)' }}
        >
          {isLoading && (
            <div className="w-170 h-48 flex items-center justify-center bg-card">
              <p className="text-sm text-muted-foreground animate-pulse">
                Loading resume...
              </p>
            </div>
          )}

          <Document
            file="/resume.pdf"
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages)
              setIsLoading(false)
            }}
            onLoadError={() => setIsLoading(false)}
            error={
              <div className="w-170 h-48 flex flex-col items-center justify-center gap-2 bg-card">
                <p className="text-sm text-muted-foreground">Could not load PDF.</p>
                <p className="text-xs text-muted-foreground/50">
                  Make sure resume.pdf is in the /public folder.
                </p>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              width={680}
              renderTextLayer
              renderAnnotationLayer
            />
          </Document>
        </div>
      </div>

    </div>
  )
}