# Usar o Visualizador de Eventos

Abre e filtra eventos para entender falhas e lentidão.

## Abrir Visualizador de Eventos
```cmd
eventvwr.msc
```

## Filtrar eventos por ID
```powershell
Get-WinEvent -FilterHashtable @{LogName='System'; Id=10016} | Select-Object TimeCreated, Id, Message
```

## Exportar log para análise
```powershell
wevtutil epl System "%UserProfile%\Desktop\system_log.evtx"
```