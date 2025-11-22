# Redefinir serviço de pesquisa

Reinicia Windows Search e força reindexação básica.

## Reiniciar serviço de pesquisa
```powershell
Restart-Service -Name WSearch -Force
```

## Checar status do serviço
```powershell
Get-Service -Name WSearch
```