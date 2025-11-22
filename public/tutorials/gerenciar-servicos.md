# Gerenciar serviços problemáticos

Identifica, pausa e reinicia serviços com falhas.

## Listar serviços em falha
```powershell
Get-Service | Where-Object {$_.Status -eq 'Stopped'} | Select-Object Name, DisplayName, Status
```

## Parar um serviço específico
```powershell
Stop-Service -Name wuauserv -Force
```

## Iniciar ou reiniciar
```powershell
Start-Service -Name wuauserv
Restart-Service -Name wuauserv -Force
```

## Desabilitar inicialização automática (se necessário)
```powershell
Set-Service -Name wuauserv -StartupType Disabled
```