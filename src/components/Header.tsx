import { Box, Button, Flex, Link, Text } from '@radix-ui/themes'

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
      }}>
      <header>
        <Flex align="center" justify="between" gap="4" wrap="wrap">
          <Box>
            <Link href="#/" underline="none" color="gray" highContrast>
              <Text weight="bold" size="4">Tutoriais do Urso</Text>
            </Link>
            <Text as="p" size="2" color="gray" style={{ marginTop: 4 }}>
              Passo a passo claro para resolver problemas e manter o Windows saudável.
            </Text>
          </Box>
          <Flex gap="2">
            <Button asChild size="2" variant="soft">
              <a href="#/">Todos os tutoriais</a>
            </Button>
          </Flex>
        </Flex>
      </header>
    </Flex>
  )
}