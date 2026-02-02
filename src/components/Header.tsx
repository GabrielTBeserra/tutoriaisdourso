import { Button, Flex, Link, Text } from '@radix-ui/themes'

export default function Header() {

  return (
    <Flex
      asChild
      align="center"
      justify="between"
      px="4"
      py="3"
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(15, 15, 20, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--gray-a4)',
        zIndex: 10
      }}
    >
      <header>
        <Link href="#/" underline="none" color="gray" highContrast>
          <Text weight="bold" size="3">Tutoriais do Urso</Text>
        </Link>
        <Flex gap="2">
          <Button asChild variant="soft">
            <a href="#/">Todos os tutoriais</a>
          </Button>
        </Flex>
      </header>
    </Flex>
  )
}