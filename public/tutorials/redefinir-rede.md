# Redefinir pilha de rede

Corrige problemas de conectividade e DNS resetando componentes de rede.

## Redefinir Winsock
```cmd
netsh winsock reset
```

## Redefinir TCP/IP
```cmd
netsh int ip reset
```

## Limpar cache DNS
```cmd
ipconfig /flushdns
```

## Renovar IP
```cmd
ipconfig /release
ipconfig /renew
```