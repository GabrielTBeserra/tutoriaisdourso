# Apagar logs do sistema pesados

Libera espaço removendo logs e arquivos de diagnóstico grandes.

## Limpar logs de eventos
```powershell
wevtutil el | ForEach-Object { wevtutil cl $_ }
```

## Limpar logs do Windows Update (Admin)
```powershell
Remove-Item "$env:SystemRoot\SoftwareDistribution\DataStore\Logs" -Recurse -Force -ErrorAction SilentlyContinue
```

## Limpar logs CBS
```powershell
Remove-Item "$env:SystemRoot\Logs\CBS" -Recurse -Force -ErrorAction SilentlyContinue
```

## Limpar logs de telemetria (DiagTrack)
```powershell
Stop-Service -Name diagtrack -Force
Remove-Item "$env:ProgramData\Microsoft\Diagnosis" -Recurse -Force -ErrorAction SilentlyContinue
Start-Service -Name diagtrack
```