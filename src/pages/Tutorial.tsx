import { useTutorialContent } from '../data/tutorials'
import CodeSnippet from '../components/CodeSnippet'
import { Card, Heading, Text, Flex, Badge, Separator } from '@radix-ui/themes'
import { explainCommand } from '../utils/commandExplain'

type Props = { slug: string }

export default function TutorialPage({ slug }: Props) {
  const { tutorial, loading, error } = useTutorialContent(slug)

  if (loading) {
    return (
      <main className="container">
        <h1 className="page-title">Carregando…</h1>
        <div className="footer-actions">
          <a className="btn" href="#/">Voltar</a>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="container">
        <h1 className="page-title">Erro</h1>
        <p className="page-subtitle">{error}</p>
        <div className="footer-actions">
          <a className="btn" href="#/">Voltar</a>
        </div>
      </main>
    )
  }

  if (!tutorial) {
    return (
      <main className="container">
        <h1 className="page-title">Conteúdo não encontrado</h1>
        <a className="btn" href="#/">Voltar</a>
      </main>
    )
  }

  return (
    <main className="container">
      <Flex align="center" justify="between" mb="2">
        <Heading size="6">{tutorial.title}</Heading>
        <Badge color="crimson">{labelForCategory(tutorial.category)}</Badge>
      </Flex>
      <Text color="gray" mb="3">{tutorial.description}</Text>
      <Separator my="3" />
      <Card className="step">
        <Heading size="4" mb="1">Como executar os comandos</Heading>
        <Text mb="2">
          Use PowerShell ou Prompt de Comando. Quando indicado, execute como Administrador.
          Copie o código e cole na janela apropriada. Para abrir rapidamente, use Windows+R
          e digite o utilitário necessário (por exemplo, <code>eventvwr.msc</code> ou
          <code>control.exe srchadmin.dll</code>).
        </Text>
      </Card>
      <div className="steps">
        {tutorial.steps.map((s, i) => (
          <Card key={i} className="step">
            {s.title && <Heading size="4" mb="1">{s.title}</Heading>}
            {s.text && <Text mb="2">{s.text}</Text>}
            {s.code && <CodeSnippet code={s.code} />}
            {s.code && (
              (() => {
                const exp = explainCommand(s.code)
                if (!exp) return null
                return <Text color="gray" mt="2">{exp}</Text>
              })()
            )}
          </Card>
        ))}
      </div>
      <div className="footer-actions">
        <a className="btn" href="#/">Voltar</a>
      </div>
    </main>
  )
}

function labelForCategory(c: 'manutencao' | 'limpeza' | 'restauracao') {
  if (c === 'manutencao') return 'Manutenção'
  if (c === 'limpeza') return 'Limpeza'
  return 'Restauração'
}