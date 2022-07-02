# Welcome to Ao infinito e além!

O produto foi desenvolvido para solucionar a seguinte questão, "Quantas faturas aproximadamente de um produto o produtor precisa receber para atingir a próxima faixa e até alcançar a última faixa do programa elite, golden belt?"

Então pra isso eu preciso saber, o total de ganhos que o produtor está atualmente, o valor do produto que ele irá lançar, se for uma assinatura o valor mensal da assinatura ao invés do valor total; Preciso saber também, se há afiliado, se houver, qual a comissão? se houver co-produtor, qual a comissão do co-produtor? caso haja mais de um co-produtor a soma total das comissões dos co-produtores.

Com as informações obtidas nós vamos definir os ganhos por fatura deste produto que o produtor está lançando, para nós definirmos os ganhos por fatura, serão aplicadas as regras de negócio da nossa solução onde:

Se houver afiliado, mas não houver parceiros, do valor do produto nós descontamos a taxa de venda por afiliado da plataforma que é, 8,9% + 1, após isso será descontada a comissão do afiliado de acordo com o que foi informado anteriormente e então teremos os ganhos por fatura nessas configurações.

ex:

    se (COMISSAO_AFILIADO > 0 && COMISSAO_PARCEIRO === 0) { 
    
    VALOR_PRODUTO - TAXA_VENDA_AFILIADO - COMISSAO_AFILIADO = GANHOS_POR_FATURA;
    
    } 

Mas caso tenha afiliado e também parceiro precisamos então do valor do produto, descontar a taxa de venda por afiliado da plataforma, a comissão do afiliado, a(s) comissão(ões) do(s) parceiro(s) e ai então teremos agora o ganho por fatura nessa condições. 

ex: 

    se (COMISSAO_AFILIADO > 0 && COMISSAO_PARCEIRO > 0 ) { 
    
    VALOR_PRODUTO - TAXA_VENDA_AFILIADO - COMISSAO_AFILIADO - COMISSAO_PARCEIRO = GANHOS_POR_FATURA;
    
    }

Também podemos ter a condição onde não há afiliados e não há parceiros, neste caso é mais simples, do valor do produto retiramos a taxa de venda realizada pelo produtor na plataforma que é atualmente, 4,9% + 1 e ai já temos o valor do ganho por fatura seguindo essa condição. 

ex:

    se (COMISSAO_AFILIADO === 0 && COMISSAO_PARCEIRO === 0)  {
    
    VALOR_PRODUTO - TAXA_VENDA_PRODUTOR = GANHOS_POR_FATURA; 
    }

Já caso tenha parceiro(s), mas não tenha afiliado, retiramos a taxa de venda realizada pelo produtor na plataforma, 4,9% + 1 e então é divido o valor restante entre o(s) parceiro(s) e produtor.

ex:

    se (COMISSAO_AFILIADO === 0 && COMISSAO_PARCEIRO > 0) {
    
    VALOR_PRODUTO - TAXA_VENDA_PRODUTOR - COMISSAO_PARCEIRO = GANHOS_POR_FATURA; 
    
    }

Com os ganhos por fatura definido de acordo com as configurações básicas do produto podemos então calcular a quantidade aproximada de faturas a receber que o produtor precisa para alcançar a próxima faixa e também até alcançar a golden belt. 

Para isso aplicamos as regras de negócio para definirmos a quantidade de faturas necessárias para a próxima belt e golden belt. 

Tendo o total de ganhos nós precisamos verificar em qual belt o produtor se encontra atualmente, para isso precisamos estabelecer a seguinte regra:

Se o total de ganhos for menor que 100 mil reais,  o produtor está na white belt à caminho da red belt. 

com isso fazemos definimos a quantidade de faturas a receber aproximadas para a red belt e golden belt 

Dos 100 mil para alcançar a red belt nós subtraímos dos atuais ganhos totais do produtor  e dividimos pelos ganhos por fatura recebida e então temos o resultado de quantas faturas recebidas aproximadamente são necessárias para alcançar a red belt e também a golden.

ex: 

    se(TOTAL_GANHOS < BELT[1]){
    
    (BELT[1] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS;
    (BELT[5] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS_GOLDEN;
    
    BELT[0] = 'WHITE BELT';
    BELT[1] = 'RED BELT';
    BELT[5] = 'GOLDEN BELT';
    
    retorna "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[0] + " para que você atinga a próxima Belt(" + BELT[1] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", mas sua jornada ainda não está no fim, para ir ao infinito e além e consquistar a " + BELT[5] + " você precisará realizar um total de, " + QTD_FATURAS_APROXIMADAS_GOLDEN + " FATURAS na plataforma da Eduzz.";
    
    }

Mas caso o total de ganhos do produtor seja maior ou igual a 100 mil reais, mas menor que 250 mil reais, então definimos quantas faturas a receber aproximadamente são necessárias para a orange belt e também quantas faltam até a golden belt. 

ex:

    se(TOTAL_GANHOS >= BELT[1] < BELT[2]){
    
    (BELT[2] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS;
    (BELT[5] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS_GOLDEN;
    
    BELT[1] = 'RED BELT';
    BELT[2] = 'ORANGE BELT';
    BELT[5] = 'GOLDEN BELT';
    
    retorna "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[1] + " para que você atinga a próxima Belt(" + BELT[2] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", mas sua jornada ainda não está no fim, para ir ao infinito e além e consquistar a " + BELT[5] + " você precisará realizar um total de, " + QTD_FATURAS_APROXIMADAS_GOLDEN + " FATURAS na plataforma da Eduzz.";
    
    }

Caso o produtor já tenha atingido os 250 mil mas ainda não alcançou os 500 mil ele é orange belt e está rumo a green belt, com isso também definimos a quantidade de faturas a receber aproximadamente vão ser necessárias nessa trajetória, e também até a golden belt.

ex:

    se(TOTAL_GANHOS >= BELT[2] < BELT[3]){
    
    (BELT[3] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS;
    (BELT[5] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS_GOLDEN;
    
    BELT[2] = 'ORANGE BELT';
    BELT[3] = 'GREEN BELT';
    BELT[5] = 'GOLDEN BELT';
    
    retorna "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[2] + " para que você atinga a próxima Belt(" + BELT[3] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", mas sua jornada ainda não está no fim, para ir ao infinito e além e consquistar a " + BELT[5] + " você precisará realizar um total de, " + QTD_FATURAS_APROXIMADAS_GOLDEN + " FATURAS na plataforma da Eduzz.";
    
    }

Para os produtores que estão na green belt, já faturam 500 mil mas ainda não alcançaram os 7 dígitos que é 1 milhão, é informado também a quantidade de faturas aproximadas a serem recebidas para que aquele produto alcance então a black belt, os 7 digitos na conta do produtor na Eduzz. 

ex:

    se(TOTAL_GANHOS >= BELT[3] < BELT[4]){
    
    (BELT[4] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS;
    (BELT[5] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS_GOLDEN;
    
    BELT[3] = 'GREEN BELT';
    BELT[4] = 'BLACK BELT';
    BELT[5] = 'GOLDEN BELT'; 
    
    retorna "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[3] + " para que você atinga a próxima Belt(" + BELT[4] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", mas sua jornada ainda não está no fim, para ir ao infinito e além e consquistar a " + BELT[5] + " você precisará realizar um total de, " + QTD_FATURAS_APROXIMADAS_GOLDEN + " FATURAS na plataforma da Eduzz.";
    
    }

porém, se o produtor já é black belt e deseja lançar um produto para alcançar a golden belt nós definimos a quantidade de faturas aproximadas que ele precisa receber até a faixa de ouro e então é até o infinito e além! 

ex:

    se(TOTAL_GANHOS >= BELT[4] < BELT[5]){
    
    (BELT[5] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS;
    
    BELT[4] = 'BLACK BELT';
    BELT[5] = 'GOLDEN BELT';
    
    retorna "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[4] + " para que você atinga a próxima Belt(" + BELT[5] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", então... ao infinito e além!";
    
    }

