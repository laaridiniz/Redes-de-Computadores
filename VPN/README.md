<h1 align="center"> Virtual Private Network (VPN) </h1>

## Conceito

<p align="justify">A Rede Privada Virtual (ou VPN) permite que seja feita uma conexão de rede protegida ao usar redes públicas. Essa proteção ocorre por meio da criptografia do tráfego de internet, responsável por disfarçar a identidade online dos dispositivos envolvidos, tornando mais difícil para terceiros rastrear as atividades online e roubar os dados em trânsito. A criptografia ocorre em tempo real.<br>
<br>
Essa técnica não impede completamente que surjam problemas técnicos em razão da sobrecarga, no entanto, ele não permite que estas instabilidades cheguem até o usuário e prejudiquem sua experiência de navegação. Assim, permite que sejam feitos os ajustes necessários no sistema sem que os usuários percebam.</p>

## Configuração do Servidor

- Atualizar o sistema com o comando ```sudo apt update```
- Instalar o serviço Open VPN com um dos comandos a seguir: ```sudo aptitude install openvpn``` ou ```sudo apt install openvpn -y```
- Acessar o local ```/etc/openvpn```como usuário root
- Gerar a chave de acesso à VPN com o comando ```sudo openvpn --genkey --secret key```
- Para visualizar o conteúdo da chave, usar o comando ```cat key```
- Copiar a chave para a máquina cliente utilizando o comando cp, p. ex., ```cp key /home/larissa```
- Criar o arquivo de configuração do Servidor com o comando ```vim /etc/openvpn/server.conf```
- Dentro do arquivo de configuração, deve ser inserida a seguinte estrutura:

  ```
  dev tun
  ifconfig 10.0.0.1 10.0.0.2
  secret /etc/openvpn/key
  port 5000
  proto udp
  comp-lzo
  verb 4
  keepalive 10 120
  persist-key
  persist-tun
  float
  ```

- Segue uma breve descrição de cada um dos parâmetros utilizados no arquivo de configuração:

  ```
  dev tun -> habilita suporte ao drive TUN/TAP
  ifconfig -> cria o IP do servidor matriz (192.168.100.100) com suporte ao IP do servidor filial (192.168.100.200)
  proto udp -> define o tipo de protocolo, pode ser tcp ou udp
  comp-lzo -> compacta os dados no momento do envio
  verb 4 -> se refere ao verbose, ou seja, quanto menor o número, mais detalhes tem o log. Recomendável usar entre 3 e 4
  keepalive 10 120 -> a cada 10s a mensagem é enviada do cliente para o servidor, se o servidor demorar para responder, terá até 120s para reconectar. Passado isso, o usuário precisará reconectar as máquinas manualmente
  persist-key -> garante a disponibilidade das chaves, caso o serviço da VPN seja reiniciado
  persist-tun -> garante a disponibilidade da interface TUN caso a VPN seja reiniciada
  float -> permite que o túnel continue aberto mesmo que o endereço da máquina mude
  ```

Obs.: Como meu servidor é uma instância da AWS, precisei criar uma regra de entrada para a instância. Embora a porta padrão de conexão VPN seja a 1194, defini a porta 5000:

![porta-VPN](https://github.com/laaridiniz/Redes-de-Computadores/assets/86115352/f8b85bea-6ec3-454c-9851-00c1a2921133)


## Configuração do Cliente

- Atualizar o sistema com o comando ```sudo apt update```
- Instalar o serviço Open VPN com um dos comandos a seguir: ```sudo aptitude install openvpn``` ou ```sudo apt install openvpn -y```
- Criar o arquivo de configuração do Cliente com o comando ```vim /etc/openvpn/client.conf```
- Dentro do arquivo de configuração, deve ser inserida a seguinte estrutura:

  ```
  dev tun
  ifconfig 10.0.0.2 10.0.0.1
  remote 192.168.15.16
  secret /etc/openvpn/key
  port 5000
  proto udp
  comp-lzo
  verb 4
  keepalive 10 120
  persist-key
  persist-tun
  float
  ```

## Iniciando a VPN

É possível conectar à VPN apontando o comando openvpn para o arquivo de configuração do cliente:

```openvpn --config /etc/openvpn/server.conf```

```openvpn --config /etc/openvpn/client.conf```

Ou iniciar e habilitar o serviço Open VPN com os seguintes comandos:

```
sudo systemctl start openvpn@server
sudo systemctl enable openvpn@server
sudo systemctl status openvpn@server
```

## Referências

[O que é uma VPN e como funciona?](https://www.kaspersky.com.br/resource-center/definitions/what-is-a-vpn)

[O que é uma VPN (rede privada virtual)?](https://aws.amazon.com/pt/what-is/vpn/)

[O que é VPN: Como funciona e porque você deveria usar uma](https://www.hostinger.com.br/tutoriais/o-que-e-vpn)

[Parâmetros de configuração de VPN](https://www.vivaolinux.com.br/artigo/Parametros-de-configuracao-de-VPN)

[Como Instalar e Configurar um Servidor OpenVPN no Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-ubuntu-20-04-pt)
