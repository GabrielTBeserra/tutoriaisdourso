# Diagnosticar rede (Test-NetConnection)

Verifica conectividade e portas para depurar problemas de rede.

## Testar um host
```powershell
Test-NetConnection www.microsoft.com
```

## Testar porta específica
```powershell
Test-NetConnection www.microsoft.com -Port 443
```

## Ver adaptadores e status
```powershell
Get-NetAdapter | Select-Object Name, Status, LinkSpeed
```