const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {

  const input_TOTAL_GANHOS = document.querySelector("#totalGanhos");
  const input_VALOR_PRODUTO = document.querySelector("#valorProduto");
  const input_COMISSAO_AFILIADO = document.querySelector("#comissaoAfiliado");
  const input_COMISSAO_PARCEIROS = document.querySelector("#comissaoParceiro");

  const BELT = [0, 100000, 250000, 500000, 1000000, 10000000];
  const TOTAL_GANHOS = input_TOTAL_GANHOS.value;
  const VALOR_PRODUTO = input_VALOR_PRODUTO.value;
  const COMISSAO_AFILIADO = input_COMISSAO_AFILIADO.value / 100;
  const COMISSAO_PARCEIROS = input_COMISSAO_PARCEIROS.value / 100;
  const TAXA_VENDA_AFILIADO = VALOR_PRODUTO * 0.089;
  const TAXA_VENDA_PRODUTOR = VALOR_PRODUTO * 0.049;

  function calculaGanhosPorFatura() {
    let GANHOS_POR_FATURA;

    if (COMISSAO_AFILIADO > 0 && COMISSAO_PARCEIROS === 0) {
      const VALOR_PRODUTO_TAXA_DESCONTADA =
        VALOR_PRODUTO - TAXA_VENDA_AFILIADO - 1;

      GANHOS_POR_FATURA =
        VALOR_PRODUTO_TAXA_DESCONTADA -
        COMISSAO_AFILIADO * VALOR_PRODUTO_TAXA_DESCONTADA;

      return GANHOS_POR_FATURA;
    } else {
      if (COMISSAO_AFILIADO > 0 && COMISSAO_PARCEIROS > 0) {
        const VALOR_PRODUTO_TAXA_DESCONTADA =
          VALOR_PRODUTO - TAXA_VENDA_AFILIADO - 1;

        const VALOR_PRODUTO_COMISSAO_AFILIADO_DESCONTADA =
          VALOR_PRODUTO_TAXA_DESCONTADA -
          COMISSAO_AFILIADO * VALOR_PRODUTO_TAXA_DESCONTADA;

        GANHOS_POR_FATURA =
          VALOR_PRODUTO_COMISSAO_AFILIADO_DESCONTADA -
          COMISSAO_PARCEIROS * VALOR_PRODUTO_COMISSAO_AFILIADO_DESCONTADA;

        return GANHOS_POR_FATURA;
      } else {
        if (COMISSAO_AFILIADO === 0 && COMISSAO_PARCEIROS === 0) {
          GANHOS_POR_FATURA = VALOR_PRODUTO - TAXA_VENDA_PRODUTOR - 1;

          return GANHOS_POR_FATURA;
        } else {
          if (COMISSAO_AFILIADO === 0 && COMISSAO_PARCEIROS > 0) {
            const VALOR_PRODUTO_TAXA_DESCONTADA =
              VALOR_PRODUTO - TAXA_VENDA_PRODUTOR - 1;

            GANHOS_POR_FATURA =
              VALOR_PRODUTO_TAXA_DESCONTADA -
              COMISSAO_PARCEIROS * VALOR_PRODUTO_TAXA_DESCONTADA;

            return GANHOS_POR_FATURA;
          }
        }
      }
    }
  }

  if (calculaGanhosPorFatura() > 0) {
    if (TOTAL_GANHOS < BELT[1]) {
      const QTD_FATURAS_APROXIMADAS =
        (BELT[1] - TOTAL_GANHOS) / calculaGanhosPorFatura();
      const QTD_FATURAS_APROXIMADAS_GOLDEN =
        (BELT[5] - TOTAL_GANHOS) / calculaGanhosPorFatura();

      BELT[0] = "WHITE BELT";
      BELT[1] = "RED BELT";
      BELT[5] = "GOLDEN BELT";

      alert(
        "Ol??, hoje voc?? possui um total de ganhos: R$" +
        financial(TOTAL_GANHOS) + 
          " sua faixa atua ??, " +
          BELT[0] +
          " para que voc?? atinga a pr??xima Belt(" +
          BELT[1] +
          ") com esse novo produto voc?? possui um ganho por fatura de, " +
          financial(calculaGanhosPorFatura()) +
          " voc?? precisar?? vender: " +
          Math.ceil(QTD_FATURAS_APROXIMADAS) +
          ", mas sua jornada ainda n??o est?? no fim, para ir ao infinito e al??m e consquistar a " +
          BELT[5] +
          " voc?? precisar?? realizar um total de, " +
          Math.ceil(QTD_FATURAS_APROXIMADAS_GOLDEN) +
          " FATURAS na plataforma da Eduzz."
      );
    } else {
      if (TOTAL_GANHOS < BELT[2]) {
        const QTD_FATURAS_APROXIMADAS =
          (BELT[2] - TOTAL_GANHOS) / calculaGanhosPorFatura();
        const QTD_FATURAS_APROXIMADAS_GOLDEN =
          (BELT[5] - TOTAL_GANHOS) / calculaGanhosPorFatura();

        BELT[1] = "RED BELT";
        BELT[2] = "ORANGE BELT";
        BELT[5] = "GOLDEN BELT";

        alert(
          "Ol??, hoje voc?? possui um total de ganhos: R$" +
            financial(TOTAL_GANHOS) + 
            " sua faixa atua ??, " +
            BELT[1] +
            " para que voc?? atinga a pr??xima Belt(" +
            BELT[2] +
            ") com esse novo produto voc?? possui um ganho por fatura de, " +
            financial(calculaGanhosPorFatura()) +
            " voc?? precisar?? vender: " +
            Math.ceil(QTD_FATURAS_APROXIMADAS) +
            ", mas sua jornada ainda n??o est?? no fim, para ir ao infinito e al??m e consquistar a " +
            BELT[5] +
            " voc?? precisar?? realizar um total de, " +
            Math.ceil(QTD_FATURAS_APROXIMADAS_GOLDEN) +
            " FATURAS na plataforma da Eduzz."
        );
      } else {
        if (TOTAL_GANHOS < BELT[3]) {
          const QTD_FATURAS_APROXIMADAS =
            (BELT[3] - TOTAL_GANHOS) / calculaGanhosPorFatura();
          const QTD_FATURAS_APROXIMADAS_GOLDEN =
            (BELT[5] - TOTAL_GANHOS) / calculaGanhosPorFatura();

          BELT[2] = "ORANGE BELT";
          BELT[3] = "GREEN BELT";
          BELT[5] = "GOLDEN BELT";

          alert(
            "Ol??, hoje voc?? possui um total de ganhos: R$" +
            financial(TOTAL_GANHOS) +
              " sua faixa atua ??, " +
              BELT[2] +
              " para que voc?? atinga a pr??xima Belt(" +
              BELT[3] +
              ") com esse novo produto voc?? possui um ganho por fatura de, " +
              financial(calculaGanhosPorFatura()) +
              " voc?? precisar?? vender: " +
              Math.ceil(QTD_FATURAS_APROXIMADAS) +
              ", mas sua jornada ainda n??o est?? no fim, para ir ao infinito e al??m e consquistar a " +
              BELT[5] +
              " voc?? precisar?? realizar um total de, " +
              Math.ceil(QTD_FATURAS_APROXIMADAS_GOLDEN) +
              " FATURAS na plataforma da Eduzz."
          );
        } else {
          if (TOTAL_GANHOS < BELT[4]) {
            const QTD_FATURAS_APROXIMADAS =
              (BELT[4] - TOTAL_GANHOS) / calculaGanhosPorFatura();
            const QTD_FATURAS_APROXIMADAS_GOLDEN =
              (BELT[5] - TOTAL_GANHOS) / calculaGanhosPorFatura();

            BELT[3] = "GREEN BELT";
            BELT[4] = "BLACK BELT";
            BELT[5] = "GOLDEN BELT";

            alert(
              "Ol??, hoje voc?? possui um total de ganhos: R$" +
              financial(TOTAL_GANHOS) +
                " sua faixa atua ??, " +
                BELT[3] +
                " para que voc?? atinga a pr??xima Belt(" +
                BELT[4] +
                ") com esse novo produto voc?? possui um ganho por fatura de, " +
                financial(calculaGanhosPorFatura()) +
                " voc?? precisar?? vender: " +
                Math.ceil(QTD_FATURAS_APROXIMADAS) +
                ", mas sua jornada ainda n??o est?? no fim, para ir ao infinito e al??m e consquistar a " +
                BELT[5] +
                " voc?? precisar?? realizar um total de, " +
                Math.ceil(QTD_FATURAS_APROXIMADAS_GOLDEN) +
                " FATURAS na plataforma da Eduzz. Acredite, voc?? est?? quase l??!"
            );
          } else {
            if (TOTAL_GANHOS < BELT[5]) {
              const QTD_FATURAS_APROXIMADAS =
                (BELT[5] - TOTAL_GANHOS) / calculaGanhosPorFatura();

              BELT[4] = "BLACK BELT";
              BELT[5] = "GOLDEN BELT";

              alert(
                "Ol??, hoje voc?? possui um total de ganhos: " +
                financial(TOTAL_GANHOS) +
                  " sua faixa atua ??, " +
                  BELT[4] +
                  " para que voc?? atinga a pr??xima Belt(" +
                  BELT[5] +
                  ") com esse novo produto voc?? precisar?? vender: " +
                  Math.ceil(QTD_FATURAS_APROXIMADAS) +
                  ", ent??o... ao infinito e al??m!"
              );
            } else {
              alert(
                "Bem-vindo ao infinito e al??m! Agora nessa etapa a sua miss??o ?? ajudar outros parceiros a chegarem tamb??m!"
              );
            }
          }
        }
      }
    }
  } else {
    function DefineComoZero(calculaGanhosPorFatura){
      if (calculaGanhosPorFatura === undefined){
        calculaGanhosPorFatura = 0;
        return calculaGanhosPorFatura
      }
    }
    alert(
      "Os seus ganhos por fatura est?? em, R$" +
      DefineComoZero() +
        " com este valor o seu saldo ir?? ficar negativo."
    );
  }

  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
});
