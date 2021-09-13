# Projeto Semáforo

Repositório com um projetinho de um semáforo em javascript

Obs: Projeto da escola <br>

Desenvolva um programa em Javascript, considerando todos os conhecimentos adquiridos na disciplina, para simular o funcionamento de um semáforo, sendo:

1. O semáforo encontra-se no cruzamento de 2 avenidas (A e B), e ambas possuem 2 sentidos cada.

2. Serão 4 semáforos a serem controlados sendo que os semáforos da avenida A abrem simultaneamente, enquanto que os semáforos da avenida B abrirão em momentos diferentes.

3. <b>A sequência a ser montada será: </b><br>
<ul>
  <li>abre os semáforos, nos 2 sentidos da avenida A. Os semáforos da Avenida B permanecem fechados.</li>
  <li>abre o semáforo do sentido 1 da avenida B. Os semáforos da avenida A fecham e o semáforo do sentido 2 da avenida B, permanece fechado.</li>
  <li>abre o semáforo do sentido 2 da avenida B. Os semáforos da avenida A permanecem fechados e o semáforo do sentido 2 da avenida B, fecha.</li>
</ul><br>

4. A cada ciclo completo da sequência, o programa deverá perguntar ao usuário se deve iniciar a sequência novamente. <b>Isso evitará um loop infinito.</b>

5. Em cada abertura e fechamento de um dos semáforos, o programa deve informar ao usuário. <b>Isso poderá ser feito através de eventos ou mensagens alert.<br>
Exemplo:</b> O semáforo 1 e 2 da avenida A estão abertos e os semáforos da avenida B estão fechados.

6. Entre a abertura e fechamento de um semáforo, implemente no programa um contador que representará o tempo do semáforo. <b>Sugestão: contar de 1 a 100.000.</b> Esse contador pode ser ajustado de acordo com a velocidade do seu equipamento.


7. A sequência de abertura e fechamento de um semáforo é: <br>
<ul>
  <li>para abrir, passa de vermelho para verde;</li>
  <li>para fechar, passa de verde para amarelo e depois para vermelho.</li>
</ul>
