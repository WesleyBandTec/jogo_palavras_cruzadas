var contador = 0
contador1.value = contador

function comecar() {
    alert("Boa Sorte, Se divirta!")
    bt_finalizar.style.display = 'block'
    conteudo.style.display = 'block'
    questoes.style.display = 'block'
    contador = 0
    contador1.innerHTML = `${contador}`

    banner.style.display = 'none'
    bt_comecar.style.display = 'none'
}
function finalizar() {
    bt_comecar.style.display = 'block'
    banner.style.display = 'block'

    bt_finalizar.style.display = 'none'
    conteudo.style.display = 'none'
    questoes.style.display = 'none'
    if (contador == 16) {
        alert("Parabéns você ganhou!!!")
    } else if (contador > 16) {
        alert("Trapaceou!!!")
    } else {
        alert("Que pena... não Conseguiu")
    }
}
function verificar() {
    var q1 = questao1.value.toUpperCase()
    var result1 = q1
    // QUESTAO 1
    if (result1 == "CPU") {
        cpu1.style.display = 'block'
        cpu2.style.display = 'block'
        cpu3.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 2
    if (result1 == "ULA") {
        ula1.style.display = 'block'
        ula2.style.display = 'block'
        ula3.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 3
    if (result1 == "REGISTRADORES") {
        reg1.style.display = 'block'
        reg2.style.display = 'block'
        reg3.style.display = 'block'
        reg4.style.display = 'block'
        reg5.style.display = 'block'
        reg6.style.display = 'block'
        reg7.style.display = 'block'
        reg9.style.display = 'block'
        reg10.style.display = 'block'
        reg11.style.display = 'block'
        reg12.style.display = 'block'
        reg13.style.display = 'block'
        contador++
        contador1.value = contador
    }
    // Questao 4
    if (result1 == "RAM") {
        ram2.style.display = 'block'
        ram3.style.display = 'block';
        contador++
        contador1.innerHTML = `${contador}`
    }

    // Questao 5
    if (result1 == "ROM") {
        rom1.style.display = 'block'
        rom2.style.display = 'block'
        rom3.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 6
    if (result1 == "EPROM") {
        ep2.style.display = 'block'
        ep3.style.display = 'block'
        ep4.style.display = 'block'
        ep5.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 7
    if (result1 == "FLASH") {
        flash1.style.display = 'block'
        flash2.style.display = 'block'
        flash3.style.display = 'block'
        flash4.style.display = 'block'
        flash5.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 8
    if (result1 == "MEMORIA DE MASSA") {
        memo1.style.display = 'block'
        memo3.style.display = 'block'
        memo4.style.display = 'block'
        memo5.style.display = 'block'
        memo6.style.display = 'block'
        memo7.style.display = 'block'
        memo8.style.display = 'block'
        memo9.style.display = 'block'
        memo10.style.display = 'block'
        memo11.style.display = 'block'
        memo12.style.display = 'block'
        memo13.style.display = 'block'
        memo14.style.display = 'block'
        memo15.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 9
    if (result1 == "DMA") {
        dma1.style.display = 'block'
        dma3.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 10
    if (result1 == "CS") {
        cs1.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 11
    if (result1 == "ADRESS BUS") {
        ad1.style.display = 'block'
        ad2.style.display = 'block'
        ad3.style.display = 'block'
        ad4.style.display = 'block'
        ad5.style.display = 'block'
        ad6.style.display = 'block'
        ad7.style.display = 'block'
        ad8.style.display = 'block'
        ad9.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 12
    if (result1 == "DATA BUS") {
        data1.style.display = 'block'
        data2.style.display = 'block'
        data4.style.display = 'block'
        data5.style.display = 'block'
        data6.style.display = 'block'
        data7.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 13
    if (result1 == "I5") {
        i52.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 14
    if (result1 == "I7") {
        i72.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 15
    if (result1 == "DUAL CORE") {
        dual2.style.display = 'block'
        dual3.style.display = 'block'
        dual4.style.display = 'block'
        dual5.style.display = 'block'
        dual6.style.display = 'block'
        dual8.style.display = 'block'
        dual9.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
    // Questao 16
    if (result1 == "QUAD CORE") {
        quad1.style.display = 'block'
        quad2.style.display = 'block'
        quad3.style.display = 'block'
        quad4.style.display = 'block'
        quad5.style.display = 'block'
        quad6.style.display = 'block'
        quad7.style.display = 'block'
        quad8.style.display = 'block'
        contador++
        contador1.innerHTML = `${contador}`
    }
}