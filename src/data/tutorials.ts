import { useEffect, useState } from 'react'

export type TutorialStep = {
  title?: string
  text?: string
  code?: string
}

export type Tutorial = {
  slug: string
  title: string
  description: string
  category: TutorialCategory
  steps: TutorialStep[]
}

export type TutorialCategory = 'manutencao' | 'limpeza' | 'restauracao'

export type TutorialIndexItem = {
  slug: string
  title: string
  description: string
  category: TutorialCategory
  keywords?: string[]
}

function parseMarkdown(md: string, slug: string, meta: TutorialIndexItem): Tutorial {
  const lines = md.split(/\r?\n/)
  let i = 0
  const steps: TutorialStep[] = []
  while (i < lines.length) {
    if (lines[i].startsWith('## ')) {
      const stepTitle = lines[i].replace(/^##\s+/, '').trim()
      i++
      const textParts: string[] = []
      let code = ''
      while (i < lines.length && !lines[i].startsWith('## ')) {
        if (lines[i].startsWith('```')) {
          i++
          const codeLines: string[] = []
          while (i < lines.length && !lines[i].startsWith('```')) {
            codeLines.push(lines[i])
            i++
          }
          code = codeLines.join('\n')
          if (i < lines.length && lines[i].startsWith('```')) i++
        } else {
          const t = lines[i].trim()
          if (t) textParts.push(t)
          i++
        }
      }
      steps.push({ title: stepTitle, text: textParts.join(' '), code })
    } else {
      i++
    }
  }
  return { slug, title: meta.title, description: meta.description, category: meta.category, steps }
}

export function useTutorialIndex(): { index: TutorialIndexItem[]; loading: boolean; error?: string } {
  const [index, setIndex] = useState<TutorialIndexItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch('/tutorials/index.json')
        const data: TutorialIndexItem[] = await res.json()
        if (!cancelled) setIndex(data)
      } catch {
        if (!cancelled) setError('Falha ao carregar lista de tutoriais')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  return { index, loading, error }
}

export function useTutorialContent(slug: string): { tutorial?: Tutorial; loading: boolean; error?: string } {
  const [tutorial, setTutorial] = useState<Tutorial | undefined>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch('/tutorials/index.json')
        const index: TutorialIndexItem[] = await res.json()
        const meta = index.find((i) => i.slug === slug)
        if (!meta) {
          if (!cancelled) {
            setError('Conteúdo não encontrado')
            setLoading(false)
          }
          return
        }
        const mdRes = await fetch(`/tutorials/${slug}.md`)
        const md = await mdRes.text()
        const parsed = parseMarkdown(md, slug, meta)
        if (!cancelled) setTutorial(parsed)
      } catch {
        if (!cancelled) setError('Falha ao carregar conteúdo')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [slug])

  return { tutorial, loading, error }
}