export function explainCommand(code?: string): string | undefined {
  if (!code) return undefined
  const first = code.split(/\r?\n/).map((l) => l.trim()).find((l) => l.length > 0)
  if (!first) return undefined
  const c = first.toLowerCase()
  if (c.startsWith('dism /online /cleanup-image /scanhealth')) return 'Analisa a imagem do Windows em busca de corrupção sem alterar o sistema.'
  if (c.startsWith('dism /online /cleanup-image /checkhealth')) return 'Verifica rapidamente se há corrupção conhecida na imagem do Windows.'
  if (c.startsWith('dism /online /cleanup-image /restorehealth')) return 'Restaura componentes corrompidos da imagem do Windows usando fontes locais ou online.'
  if (c.startsWith('sfc /scannow')) return 'Verifica e tenta reparar arquivos protegidos do sistema a partir do cache confiável.'
  if (c.startsWith('netsh winsock reset')) return 'Redefine o catálogo Winsock corrigindo problemas de rede causados por entradas corrompidas.'
  if (c.startsWith('netsh int ip reset')) return 'Reseta configurações TCP/IP para o padrão, útil em falhas de rede.'
  if (c.startsWith('ipconfig /flushdns')) return 'Limpa o cache DNS local para resolver problemas de resolução de nomes.'
  if (c.startsWith('ipconfig /release')) return 'Libera o endereço IP atual obtido via DHCP.'
  if (c.startsWith('ipconfig /renew')) return 'Solicita um novo endereço IP ao servidor DHCP.'
  if (c.startsWith('bootrec /fixmbr')) return 'Regrava o MBR na unidade de sistema para corrigir problemas de inicialização.'
  if (c.startsWith('bootrec /fixboot')) return 'Repara o setor de boot da partição de sistema.'
  if (c.startsWith('bootrec /scanos')) return 'Verifica instalações do Windows presentes para inclusão no BCD.'
  if (c.startsWith('bootrec /rebuildbcd')) return 'Reconstrói o BCD adicionando instalações detectadas do Windows.'
  if (c.startsWith('bcdboot')) return 'Copia arquivos de boot e configura o BCD a partir do diretório do Windows.'
  if (c.startsWith('chkdsk')) return 'Analisa o sistema de arquivos e, quando solicitado, corrige erros e setores defeituosos.'
  if (c.startsWith('fsutil dirty query')) return 'Exibe se o volume está marcado como sujo (dirty), indicando necessidade de verificação.'
  if (c.startsWith('wsreset.exe')) return 'Redefine o cache da Microsoft Store, corrigindo problemas de abertura e download.'
  if (c.startsWith('powercfg')) return 'Gerencia planos e configurações de energia, permitindo priorizar desempenho.'
  if (c.startsWith('defrag')) return 'Otimiza o volume melhorando padrões de leitura/escrita e aplica TRIM em SSD.'
  if (c.startsWith('compact.exe')) return 'Ativa ou desativa a compactação dos binários do Windows (CompactOS).'
  if (c.includes('stop-service')) return 'Interrompe um serviço do Windows de forma controlada.'
  if (c.includes('start-service')) return 'Inicia um serviço do Windows.'
  if (c.includes('restart-service')) return 'Reinicia um serviço do Windows.'
  if (c.startsWith('get-childitem') && c.includes('remove-item')) return 'Lista e remove arquivos/pastas do caminho especificado com segurança.'
  if (c.startsWith('rename-item')) return 'Renomeia arquivos ou pastas, útil para invalidar caches sem apagar dados.'
  if (c.startsWith('usoclient startscan')) return 'Força o Windows Update a iniciar uma varredura por atualizações.'
  if (c.startsWith('pnputil')) return 'Administra drivers: listar, instalar, remover e atualizar pacotes de drivers.'
  if (c.startsWith('wevtutil')) return 'Manipula logs de eventos: listar e limpar canais para liberar espaço.'
  if (c.startsWith('eventvwr.msc')) return 'Abre o Visualizador de Eventos para inspecionar logs do sistema.'
  if (c.startsWith('control.exe srchadmin.dll')) return 'Abre as Opções de Indexação para gerenciar a pesquisa do Windows.'
  return undefined
}