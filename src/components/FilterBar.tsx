import { Flex, Select } from '@radix-ui/themes'
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
    <Flex className="filter-bar" gap="3" align="center" justify="between">
      <Select.Root value={category} onValueChange={(v) => onCategoryChange(v as TutorialCategory | 'todas')}>
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="todas">Todas</Select.Item>
          {categories.map((c) => (
            <Select.Item key={c} value={c}>{labelForCategory(c)}</Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <input
        className="input"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onQueryChange(e.target.value)}
        placeholder="Buscar tutoriais"
        aria-label="Buscar tutoriais"
        style={{ width: '100%' }}
      />
    </Flex>
  )
}

function labelForCategory(c: TutorialCategory) {
  if (c === 'manutencao') return 'Manutenção'
  if (c === 'limpeza') return 'Limpeza'
  return 'Restauração'
}