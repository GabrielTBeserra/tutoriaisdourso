import { useMemo, useState } from 'react'
import type { TutorialCategory } from '../data/tutorials'
import { useTutorialIndex } from '../data/tutorials'
import FilterBar from '../components/FilterBar'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'

export default function Home() {
  const { index, loading, error } = useTutorialIndex()
  const [category, setCategory] = useState<TutorialCategory | 'todas'>('todas')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    return index
      .filter((i) => (category === 'todas' ? true : i.category === category))
      .filter((i) => {
        const q = query.trim().toLowerCase()
        if (!q) return true
        const hay = [i.title, i.description, ...(i.keywords || [])]
          .join(' ')
          .toLowerCase()
        return hay.includes(q)
      })
  }, [index, category, query])
  if (loading) {
    return (
      <main className="container">
        <h1 className="page-title">Carregando…</h1>
      </main>
    )
  }
  if (error) {
    return (
      <main className="container">
        <h1 className="page-title">Erro</h1>
        <p className="page-subtitle">{error}</p>
      </main>
    )
  }
  return (
    <main className="container">
      <h1 className="page-title">Tutoriais rápidos para Windows</h1>
      <p className="page-subtitle">
        Aprenda conceitos e comandos essenciais de forma objetiva.
      </p>
      <FilterBar
        category={category}
        onCategoryChange={setCategory}
        query={query}
        onQueryChange={setQuery}
        categories={Array.from(new Set(index.map((i) => i.category)))}
      />

      <div className="card-grid">
        {filtered.map((t) => (
          <Card key={t.slug} asChild>
            <a href={`#/tutorial/${t.slug}`} aria-label={t.title}>
              <Flex direction="column" gap="1">
                <Heading size="3">{t.title}</Heading>
                <Text color="gray" size="2">{t.description}</Text>
              </Flex>
            </a>
          </Card>
        ))}
      </div>
    </main>
  )
}