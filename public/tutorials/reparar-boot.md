# Reparar boot do Windows

Recupera MBR, setor de boot e reconstroi o BCD. Execute em Ambiente de Recuperação.

## Corrigir MBR
```cmd
bootrec /fixmbr
```

## Corrigir setor de boot
```cmd
bootrec /fixboot
```

## Procurar instalações do Windows
```cmd
bootrec /scanos
```

## Reconstruir BCD
```cmd
bootrec /rebuildbcd
```

## Recriar arquivos de boot
Use quando a partição do sistema estiver íntegra.
```cmd
bcdboot C:\Windows /l pt-BR
```