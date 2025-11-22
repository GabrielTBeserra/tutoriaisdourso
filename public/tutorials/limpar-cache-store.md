# Limpar cache da Microsoft Store

Resolve erros de download e abertura da Store.

## Resetar cache da Store
```cmd
wsreset.exe
```

## Remover cache manualmente (se necessário)
```powershell
Get-ChildItem "$env:LocalAppData\Packages\Microsoft.WindowsStore_*\LocalCache" -Recurse -Force -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
```

## Reinstalar a Store (caso extremo)
```powershell
Get-AppxPackage -AllUsers Microsoft.WindowsStore | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppxManifest.xml"}
```