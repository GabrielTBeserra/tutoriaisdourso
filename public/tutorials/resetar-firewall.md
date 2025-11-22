# Resetar Firewall do Windows

Restaura configurações padrão do firewall para corrigir bloqueios.

## Exportar regras atuais (opcional)
```powershell
netsh advfirewall export "%UserProfile%\Desktop\firewall_backup.wfw"
```

## Resetar para padrão
```cmd
netsh advfirewall reset
```

## Importar backup (se necessário)
```powershell
netsh advfirewall import "%UserProfile%\Desktop\firewall_backup.wfw"
```