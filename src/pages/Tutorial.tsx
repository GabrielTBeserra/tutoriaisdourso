import { useTutorialContent } from '../data/tutorials'
import CodeSnippet from '../components/CodeSnippet'
import { Card, Heading, Text, Flex, Badge, Separator, Container, Button, Box, Callout } from '@radix-ui/themes'
import { explainCommand } from '../utils/commandExplain'

type Props = { slug: string }

export default function TutorialPage({ slug }: Props) {
  const { tutorial, loading, error } = useTutorialContent(slug)

  if (loading) {
    return (
      <Container size="3" p="4">
        <Heading size="8" align="center">Carregando…</Heading>
        <Flex justify="center" mt="4">
          <Button asChild variant="soft">
            <a href="#/">Voltar</a>
          </Button>
        </Flex>
      </Container>
    )
  }

  if (error) {
    return (
      <Container size="3" p="4">
        <Heading size="8" color="red" align="center">Erro</Heading>
        <Text as="p" align="center">{error}</Text>
        <Flex justify="center" mt="4">
          <Button asChild variant="soft">
            <a href="#/">Voltar</a>
          </Button>
        </Flex>
      </Container>
    )
  }

  if (!tutorial) {
    return (
      <Container size="3" p="4">
        <Heading size="8" align="center">Conteúdo não encontrado</Heading>
        <Flex justify="center" mt="4">
          <Button asChild variant="soft">
            <a href="#/">Voltar</a>
          </Button>
        </Flex>
      </Container>
    )
  }

  return (
    <Container size="3" p="4">
      <Flex align="center" justify="between" mb="4" wrap="wrap" gap="2">
        <Heading size="8">{tutorial.title}</Heading>
        <Badge size="2" color="crimson">{labelForCategory(tutorial.category)}</Badge>
      </Flex>
      
      <Text size="4" color="gray" mb="6" as="p">{tutorial.description}</Text>
      
      <Separator my="6" size="4" />
      
      <Callout.Root mb="6" color="blue">
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>
          <Heading size="3" mb="1">Como executar os comandos</Heading>
          Use PowerShell ou Prompt de Comando. Quando indicado, execute como Administrador.
          Copie o código e cole na janela apropriada. Para abrir rapidamente, use Windows+R
          e digite o utilitário necessário (por exemplo, <Code>eventvwr.msc</Code> ou
          <Code>control.exe srchadmin.dll</Code>).
        </Callout.Text>
      </Callout.Root>

      <Flex direction="column" gap="5">
        {tutorial.steps.map((s, i) => (
          <Card key={i} size="3">
            {s.title && <Heading size="4" mb="2">{s.title}</Heading>}
            {s.text && <Text as="p" mb="3" size="3">{s.text}</Text>}
            {s.code && <Box mb="3"><CodeSnippet code={s.code} /></Box>}
            {s.code && (
              (() => {
                const exp = explainCommand(s.code)
                if (!exp) return null
                return (
                  <Callout.Root size="1" color="gray" variant="surface">
                    <Callout.Icon>💡</Callout.Icon>
                    <Callout.Text>{exp}</Callout.Text>
                  </Callout.Root>
                )
              })()
            )}
          </Card>
        ))}
      </Flex>
      
      <Flex justify="center" mt="8" mb="4">
        <Button asChild size="3" variant="solid">
          <a href="#/">Voltar para o início</a>
        </Button>
      </Flex>
    </Container>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return <Text weight="bold" style={{ fontFamily: 'monospace' }}>{children}</Text>
}

function labelForCategory(c: 'manutencao' | 'limpeza' | 'restauracao') {
  if (c === 'manutencao') return 'Manutenção'
  if (c === 'limpeza') return 'Limpeza'
  return 'Restauração'
}