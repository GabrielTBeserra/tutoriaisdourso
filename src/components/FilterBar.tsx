import { Flex, Select, Text, TextField } from '@radix-ui/themes'
import type { TutorialCategory } from '../data/tutorials'

type Props = {
  category: TutorialCategory | 'todas'
  onCategoryChange: (c: TutorialCategory | 'todas') => void
  query: string
  onQueryChange: (q: string) => void
  categories: TutorialCategory[]
}

export default function FilterBar({ category, onCategoryChange, query, onQueryChange, categories }: Props) {
  return (
    <Flex direction={{ initial: 'column', sm: 'row' }} gap="3" align={{ sm: 'center' }} justify="between" wrap="wrap">
      <Flex direction="column" gap="1" style={{ minWidth: 180 }}>
        <Text as="label" size="1" color="gray">
          Categoria
        </Text>
        <Select.Root value={category} onValueChange={(v) => onCategoryChange(v as TutorialCategory | 'todas')}>
          <Select.Trigger
            aria-label="Filtrar por categoria"
            style={{ minWidth: '160px' }}
          />
          <Select.Content>
            <Select.Item value="todas">Todas</Select.Item>
            {categories.map((c) => (
              <Select.Item key={c} value={c}>{labelForCategory(c)}</Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Flex>

      <Flex direction="column" gap="1" style={{ flexGrow: 1, minWidth: 220 }}>
        <Text as="label" size="1" color="gray">
          Buscar por nome ou descrição
        </Text>
        <TextField.Root 
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Ex.: limpar disco, restaurar sistema..."
          aria-label="Buscar tutoriais"
          style={{ flexGrow: 1 }}
        />
      </Flex>
    </Flex>
  )
}

function labelForCategory(c: TutorialCategory) {
  if (c === 'manutencao') return 'Manutenção'
  if (c === 'limpeza') return 'Limpeza'
  return 'Restauração'
}