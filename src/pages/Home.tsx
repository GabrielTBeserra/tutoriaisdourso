import { Badge, Box, Card, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes'
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

  const total = filtered.length

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
    <Container size="4" p="4">
      <Box mb="6" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <Heading size="8" mb="2">Tutoriais rápidos para Windows</Heading>
        <Text size="4" color="gray">
          Encontre tutoriais diretos ao ponto para manutenção, limpeza e restauração do seu computador.
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

      <Flex justify="between" align="center" mb="4" wrap="wrap" gap="2">
        <Text size="2" color="gray">
          {total === 0
            ? 'Nenhum tutorial encontrado para os filtros atuais.'
            : `${total} ${total === 1 ? 'tutorial encontrado' : 'tutoriais encontrados'}`}
        </Text>
      </Flex>

      {total === 0 ? (
        <Card size="3" variant="surface">
          <Heading size="3" mb="2">Tente ajustar a busca</Heading>
          <Text as="p" size="2" color="gray">
            Altere a categoria, use menos termos ou remova acentos na pesquisa.
          </Text>
        </Card>
      ) : (
        <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
          {filtered.map((t) => (
            <Card
              key={t.slug}
              asChild
              style={{
                transition: 'transform 0.18s ease-out, box-shadow 0.18s ease-out',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 18px 40px rgba(0,0,0,0.45)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              <a
                href={`#/tutorial/${t.slug}`}
                aria-label={t.title}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Flex direction="column" gap="2" height="100%">
                  <Flex align="center" justify="between" gap="2">
                    <Heading size="4" style={{ lineHeight: 1.15 }}>{t.title}</Heading>
                    <Badge size="1" color="indigo">
                      {labelForCategory(t.category)}
                    </Badge>
                  </Flex>
                  <Text color="gray" size="2" style={{ flexGrow: 1 }}>
                    {t.description}
                  </Text>
                  <Text size="2" color="gray" style={{ opacity: 0.9, marginTop: 4 }}>
                    Clique para ver o passo a passo.
                  </Text>
                </Flex>
              </a>
            </Card>
          ))}
        </Grid>
      )}
    </Container>
  )
}

function labelForCategory(c: TutorialCategory) {
  if (c === 'manutencao') return 'Manutenção'
  if (c === 'limpeza') return 'Limpeza'
  return 'Restauração'
}