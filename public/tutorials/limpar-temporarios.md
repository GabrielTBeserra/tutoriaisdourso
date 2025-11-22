# Limpar arquivos temporários

Remove arquivos temporários do usuário e do sistema com segurança.

## Limpar temporários do usuário
```powershell
Get-ChildItem $env:TEMP -Recurse -Force -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
```

## Limpar temporários do sistema (requer Admin)
```powershell
Get-ChildItem "$env:SystemRoot\Temp" -Recurse -Force -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
```

## Limpar pasta Prefetch (apenas em casos específicos)
```powershell
Get-ChildItem "$env:SystemRoot\Prefetch" -Force -ErrorAction SilentlyContinue | Remove-Item -Force -ErrorAction SilentlyContinue
```