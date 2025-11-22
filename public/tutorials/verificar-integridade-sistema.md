# Verificar integridade do sistema

Detecta e repara arquivos do sistema corrompidos com SFC e DISM.

## Verificar arquivos do sistema com SFC
Verifica e tenta reparar automaticamente arquivos protegidos.
```cmd
sfc /scannow
```

## Checar imagem do Windows com DISM
Checa e avalia a saúde da imagem.
```cmd
DISM /Online /Cleanup-Image /CheckHealth
DISM /Online /Cleanup-Image /ScanHealth
```

## Restaurar componentes da imagem
```cmd
DISM /Online /Cleanup-Image /RestoreHealth
```

## Analisar logs (CBS)
Use o arquivo de log para investigar problemas persistentes.
```powershell
Get-Content "$env:SystemRoot\Logs\CBS\CBS.log" -Tail 200 -Wait
```