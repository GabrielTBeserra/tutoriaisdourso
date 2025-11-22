# Reparar apps da Microsoft Store

Reinstala/reestrutura apps padrões em caso de falhas.

## Re-registrar apps da Store (Admin)
```powershell
Get-AppxPackage -AllUsers Microsoft.WindowsStore | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppxManifest.xml"}
```

## Re-registrar todos os apps padrão (Admin)
```powershell
Get-AppxPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppxManifest.xml"}
```