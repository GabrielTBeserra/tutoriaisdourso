import { Box, Card, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar'
import type { TutorialCategory } from '../data/tutorials'
import { useTutorialIndex } from '../data/tutorials'

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
      <Container size="3" p="4">
        <Heading size="8" align="center">Carregando…</Heading>
      </Container>
    )
  }
  if (error) {
    return (
      <Container size="3" p="4">
        <Heading size="8" color="red" align="center">Erro</Heading>
        <Text as="p" align="center">{error}</Text>
      </Container>
    )
  }
  return (
    <Container size="3" p="4">
      <Box mb="6" style={{ textAlign: 'center' }}>
        <Heading size="8" mb="2">Tutoriais rápidos para Windows</Heading>
        <Text size="4" color="gray">
          Aprenda conceitos e comandos essenciais de forma objetiva.
        </Text>
      </Box>

      <Box mb="6">
        <FilterBar
          category={category}
          onCategoryChange={setCategory}
          query={query}
          onQueryChange={setQuery}
          categories={Array.from(new Set(index.map((i) => i.category)))}
        />
      </Box>

      <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
        {filtered.map((t) => (
          <Card key={t.slug} asChild style={{ transition: 'transform 0.2s', cursor: 'pointer' }}>
            <a href={`#/tutorial/${t.slug}`} aria-label={t.title} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Flex direction="column" gap="2" height="100%">
                <Heading size="4">{t.title}</Heading>
                <Text color="gray" size="2" style={{ flexGrow: 1 }}>{t.description}</Text>
              </Flex>
            </a>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}