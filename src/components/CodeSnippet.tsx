import { useState } from 'react'

type Props = {
  code: string
}

export default function CodeSnippet({ code }: Props) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="code-snippet">
      <pre>
        <code>{code}</code>
      </pre>
      <button className="copy-btn" onClick={copy} aria-label="Copiar código">
        {copied ? 'Copiado!' : 'Copiar'}
      </button>
    </div>
  )
}