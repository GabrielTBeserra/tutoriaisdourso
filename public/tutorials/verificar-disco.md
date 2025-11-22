# Verificar disco com CHKDSK

Analisa e corrige erros do sistema de arquivos.

## Verificação online
```cmd
chkdsk /scan
```

## Agendar correção na próxima inicialização
```cmd
chkdsk C: /f /r
```

## Mostrar estado do volume
```cmd
fsutil dirty query C:
```