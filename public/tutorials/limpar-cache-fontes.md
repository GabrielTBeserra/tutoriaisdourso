# Limpar cache de fontes

Resolve problemas de renderização de fontes limpando o cache.

## Parar serviço FontCache
```powershell
Stop-Service -Name FontCache -Force
```

## Apagar cache
```powershell
Remove-Item "$env:WinDir\ServiceProfiles\LocalService\AppData\Local\FontCache" -Recurse -Force -ErrorAction SilentlyContinue
```

## Iniciar serviço novamente
```powershell
Start-Service -Name FontCache
```