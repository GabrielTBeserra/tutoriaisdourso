# Restaurar imagem do Windows

Diagnostique e repare a imagem do Windows usando DISM e SFC.

## Abrir prompt com privilégios administrativos
Abra o Prompt de Comando ou PowerShell como Administrador.

```cmd
DISM /Online /Cleanup-Image /ScanHealth
```

## Restaurar a imagem do Windows
```cmd
DISM /Online /Cleanup-Image /RestoreHealth
```

## Verificar arquivos do sistema
```cmd
sfc /scannow
```