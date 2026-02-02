import { Flex, Select, TextField } from '@radix-ui/themes'
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
    <Flex gap="3" align="center" justify="between" wrap="wrap">
      <Select.Root value={category} onValueChange={(v) => onCategoryChange(v as TutorialCategory | 'todas')}>
        <Select.Trigger style={{ minWidth: '150px' }} />
        <Select.Content>
          <Select.Item value="todas">Todas</Select.Item>
          {categories.map((c) => (
            <Select.Item key={c} value={c}>{labelForCategory(c)}</Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <TextField.Root 
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Buscar tutoriais..."
        style={{ flexGrow: 1, minWidth: '200px' }}
      />
    </Flex>
  )
}

function labelForCategory(c: TutorialCategory) {
  if (c === 'manutencao') return 'Manutenção'
  if (c === 'limpeza') return 'Limpeza'
  return 'Restauração'
}