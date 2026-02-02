import { Button, Card, Code, Flex } from '@radix-ui/themes'
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
    <Card variant="surface" style={{ position: 'relative', padding: 0, overflow: 'hidden' }}>
      <Flex justify="between" align="center" p="2" style={{ backgroundColor: 'var(--gray-a3)' }}>
        <Code size="2" style={{ backgroundColor: 'transparent' }}>PowerShell / CMD</Code>
        <Button size="1" variant="ghost" onClick={copy}>
          {copied ? 'Copiado!' : 'Copiar'}
        </Button>
      </Flex>
      <Flex p="3" style={{ overflowX: 'auto' }}>
        <pre style={{ margin: 0 }}>
          <Code size="3" variant="ghost" highContrast style={{ whiteSpace: 'pre' }}>{code}</Code>
        </pre>
      </Flex>
    </Card>
  )
}