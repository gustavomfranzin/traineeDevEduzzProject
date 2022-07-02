INFORMAÇÕES NECESSÁRIAS A SEREM INFORMADAS NA SOLUÇÃO (total de ganhos até hoje, valor do produto ou valor mensal da assinatura, COMISSAO afiliado, COMISSAO total dos parceiros[soma de todas as comissões de parceiros])

--------------------------------------------------------------------------------------------------
				DECLARAÇÃO DE VARIÁVEIS 

var BELT = [0, 100000, 250000, 500000, 1000000, 10000000];
var TOTAL_GANHOS = 0;
var VALOR_PRODUTO = 0;
var COMISSAO_AFILIADO = 0%;
var COMISSAO_PARCEIROS = 0%;
var TAXA_VENDA_AFILIADO = 8.9% + 1; 
var TAXA_VENDA_PRODUTOR = 4,9% + 1;
var GANHOS_POR_FATURA = 0;
var QTD_FATURAS_APROXIMADAS = 0;
var QTD_FATURAS_APROXIMADAS_GOLDEN = 0; 

--------------------------------------------------------------------------------------------------
				INPUT DE INFORMAÇÕES PELO USUÁRIO

Qual total de ganhos até hoje? = TOTAL_GANHOS;  

Qual valor do produto? = VALOR_PRODUTO;

COMISSAO afiliado: = COMISSAO_AFILIADO;

COMISSAO parceiro: = COMISSAO_PARCEIRO;

--------------------------------------------------------------------------------------------------
				REGRAS DE NEGÓCIO PARA DEFINIR GANHOS POR FATURA

se (COMISSAO_AFILIADO > 0 && COMISSAO_PARCEIRO === 0) { 

VALOR_PRODUTO - TAXA_VENDA_AFILIADO - COMISSAO_AFILIADO = GANHOS_POR_FATURA;

}

CASO CONTRÁRIO

se (COMISSAO_AFILIADO > 0 && COMISSAO_PARCEIRO > 0 ) { 

VALOR_PRODUTO - TAXA_VENDA_AFILIADO - COMISSAO_AFILIADO - COMISSAO_PARCEIRO = GANHOS_POR_FATURA;

}

se (COMISSAO_AFILIADO === 0 && COMISSAO_PARCEIRO === 0)  {

VALOR_PRODUTO - TAXA_VENDA_PRODUTOR = GANHOS_POR_FATURA; 

}

CASO CONTRÁRIO

se (COMISSAO_AFILIADO === 0 && COMISSAO_PARCEIRO > 0) {

VALOR_PRODUTO - TAXA_VENDA_PRODUTOR - COMISSAO_PARCEIRO = GANHOS_POR_FATURA; 

}


--------------------------------------------------------------------------------------------------
				REGRAS DE NEGÓCIO PARA DEFINIR QUANTIDADE DE 
				    FATURAS APROXIMADAS PARA PRÓXIMA BELT
					E ATÉ ALCANÇAR A GOLDEN BELT 


se(TOTAL_GANHOS < BELT[1]){

(BELT[1] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS;
(BELT[5] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS_GOLDEN;

BELT[0] = 'WHITE BELT';
BELT[1] = 'RED BELT';
BELT[5] = 'GOLDEN BELT';

retorna "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[0] + " para que você atinga a próxima Belt(" + BELT[1] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", mas sua jornada ainda não está no fim, para ir ao infinito e além e consquistar a " + BELT[5] + " você precisará realizar um total de, " + QTD_FATURAS_APROXIMADAS_GOLDEN + " FATURAS na plataforma da Eduzz.";

}

CASO CONTRÁRIO

se(TOTAL_GANHOS >= BELT[1] < BELT[2]){

(BELT[2] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS;
(BELT[5] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS_GOLDEN;

BELT[1] = 'RED BELT';
BELT[2] = 'ORANGE BELT';
BELT[5] = 'GOLDEN BELT';

retorna "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[1] + " para que você atinga a próxima Belt(" + BELT[2] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", mas sua jornada ainda não está no fim, para ir ao infinito e além e consquistar a " + BELT[5] + " você precisará realizar um total de, " + QTD_FATURAS_APROXIMADAS_GOLDEN + " FATURAS na plataforma da Eduzz.";

}

CASO CONTRÁRIO

se(TOTAL_GANHOS >= BELT[2] < BELT[3]){

(BELT[3] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS;
(BELT[5] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS_GOLDEN;

BELT[2] = 'ORANGE BELT';
BELT[3] = 'GREEN BELT';
BELT[5] = 'GOLDEN BELT';

retorna "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[2] + " para que você atinga a próxima Belt(" + BELT[3] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", mas sua jornada ainda não está no fim, para ir ao infinito e além e consquistar a " + BELT[5] + " você precisará realizar um total de, " + QTD_FATURAS_APROXIMADAS_GOLDEN + " FATURAS na plataforma da Eduzz.";

}

CASO CONTRÁRIO

se(TOTAL_GANHOS >= BELT[3] < BELT[4]){

(BELT[4] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS;
(BELT[5] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS_GOLDEN;

BELT[3] = 'GREEN BELT';
BELT[4] = 'BLACK BELT';
BELT[5] = 'GOLDEN BELT'; 

retorna "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[3] + " para que você atinga a próxima Belt(" + BELT[4] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", mas sua jornada ainda não está no fim, para ir ao infinito e além e consquistar a " + BELT[5] + " você precisará realizar um total de, " + QTD_FATURAS_APROXIMADAS_GOLDEN + " FATURAS na plataforma da Eduzz.";

}

CASO CONTRÁRIO

se(TOTAL_GANHOS >= BELT[4] < BELT[5]){

(BELT[5] - TOTAL_GANHOS) / GANHOS_POR_FATURA = QTD_FATURAS_APROXIMADAS;

BELT[4] = 'BLACK BELT';
BELT[5] = 'GOLDEN BELT';

retorna "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[4] + " para que você atinga a próxima Belt(" + BELT[5] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", então... ao infinito e além!";

}

--------------------------------------------------------------------------------------------------

					RETORNOS NA TELA PARA O USUÁRIO 

1- "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[x] + " para que você atinga a próxima Belt(" + BELT[x+1] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", mas sua jornada ainda não está no fim, para ir ao infinito e além e consquistar a " + BELT[5] + " você precisará realizar um total de, " + QTD_FATURAS_APROXIMADAS_GOLDEN + " FATURAS deste produto na plataforma da Eduzz.";

2- "Olá, hoje você possui um total de ganhos: " + TOTAL_GANHOS + " sua faixa atua é, " + BELT[4] + " para que você atinga a próxima Belt(" + BELT[5] + ") com esse novo produto você precisará vender: " + QTD_FATURAS_APROXIMADAS + ", então... ao infinito e além!";




























