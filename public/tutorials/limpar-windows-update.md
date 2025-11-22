# Limpar cache do Windows Update

Remove caches corrompidos do Windows Update para corrigir downloads travados e erros de instalação.

## Parar serviços de atualização
Pare os serviços que usam as pastas de cache.
```powershell
Stop-Service wuauserv -Force
Stop-Service bits -Force
Stop-Service cryptsvc -Force
Stop-Service trustedinstaller -Force
```

## Renomear pastas de cache
Crie novas pastas substituindo as antigas.
```powershell
Rename-Item -Path "$env:SystemRoot\SoftwareDistribution" -NewName "SoftwareDistribution.old" -ErrorAction SilentlyContinue
Rename-Item -Path "$env:SystemRoot\System32\catroot2" -NewName "catroot2.old" -ErrorAction SilentlyContinue
```

## Iniciar serviços novamente
Reative serviços essenciais do update.
```powershell
Start-Service wuauserv
Start-Service bits
Start-Service cryptsvc
Start-Service trustedinstaller
```

## Forçar nova verificação de atualizações
```powershell
usoclient StartScan
```