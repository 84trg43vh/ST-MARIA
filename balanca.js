<<<<<<< HEAD
// Função para selecionar a opção (Tara ou Variedades)
function selectOption(option) {
    document.querySelector('.selection-panel').classList.add('hidden');
    
    if (option === 'tara') {
        document.getElementById('taraForm').classList.remove('hidden');
        document.getElementById('optionTara').classList.add('selected');
    } else {
        document.getElementById('variedadesForm').classList.remove('hidden');
        document.getElementById('optionVariedades').classList.add('selected');
    }
}

// Função para voltar à seleção inicial
function goBack() {
    document.getElementById('taraForm').classList.add('hidden');
    document.getElementById('variedadesForm').classList.add('hidden');
    document.querySelector('.selection-panel').classList.remove('hidden');
    document.getElementById('optionTara').classList.remove('selected');
    document.getElementById('optionVariedades').classList.remove('selected');
    
    // Limpar resultados
    document.getElementById('resultadoTara').classList.add('hidden');
    document.getElementById('resultadoVariedades').classList.add('hidden');
}

// Função para calcular a nova tara
function calcularTara() {
    const tara = parseFloat(document.getElementById('tara').value);
    const litros = parseFloat(document.getElementById('litros').value);
    const caixas = parseInt(document.getElementById('caixas').value);
    
    if (isNaN(tara) || isNaN(litros) || isNaN(caixas)) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }
    
    // Cálculo da nova tara: (caixas * 2) + tara + litros
    const novaTara = (caixas * 2) + tara + litros;
    
    // Exibir resultado
    document.getElementById('novaTaraValor').textContent = Math.round(novaTara);
    document.getElementById('resultadoTara').classList.remove('hidden');
}

// Função para calcular as variedades
function calcularVariedades() {
    const pesoLiquido = parseFloat(document.getElementById('pesoLiquido').value);
    const variedade1 = document.getElementById('variedade1').value;
    const caixas1 = parseInt(document.getElementById('caixas1').value);
    const pesoMedio1 = parseFloat(document.getElementById('pesoMedio1').value);
    const variedade2 = document.getElementById('variedade2').value;
    const caixas2 = parseInt(document.getElementById('caixas2').value);
    
    if (isNaN(pesoLiquido) || !variedade1 || isNaN(caixas1) || isNaN(pesoMedio1) || !variedade2 || isNaN(caixas2)) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }
    
    // Cálculos
    const totalPeso1 = caixas1 * pesoMedio1;
    const totalPeso2 = pesoLiquido - totalPeso1;
    const pesoMedio2 = totalPeso2 / caixas2;
    
    // Exibir resultado simplificado
    document.getElementById('v1Nome').textContent = variedade1;
    document.getElementById('v1Resultado').textContent = `${Math.round(totalPeso1)} kg (${Math.round(pesoMedio1)} kg/cx)`;
    
    document.getElementById('v2Nome').textContent = variedade2;
    document.getElementById('v2Resultado').textContent = `${Math.round(totalPeso2)} kg (${Math.round(pesoMedio2)} kg/cx)`;
    
    document.getElementById('resultadoVariedades').classList.remove('hidden');
}

// Função para inverter as variedades
function inverterVariedades() {
    // Salvar os valores atuais
    const variedade1 = document.getElementById('variedade1').value;
    const caixas1 = document.getElementById('caixas1').value;
    const pesoMedio1 = document.getElementById('pesoMedio1').value;
    
    const variedade2 = document.getElementById('variedade2').value;
    const caixas2 = document.getElementById('caixas2').value;
    
    // Trocar os valores
    document.getElementById('variedade1').value = variedade2;
    document.getElementById('caixas1').value = caixas2;
    
    document.getElementById('variedade2').value = variedade1;
    document.getElementById('caixas2').value = caixas1;
    
    // Limpar o peso médio da primeira variedade (que era a segunda)
    document.getElementById('pesoMedio1').value = '';
    
    // Focar no campo de peso médio para preenchimento
    document.getElementById('pesoMedio1').focus();
    
    // Limpar resultados anteriores
    document.getElementById('resultadoVariedades').classList.add('hidden');
    
    // Efeito visual no botão
    const btn = document.getElementById('inverterVariedades');
    btn.classList.add('rotating');
    setTimeout(() => {
        btn.classList.remove('rotating');
    }, 500);
}

// Adicionar efeito visual de rotação
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .rotating {
            animation: rotate 0.5s ease;
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(180deg); }
        }
        
        .selected {
            border-color: var(--success) !important;
        }
    `;
    document.head.appendChild(style);
=======
// Função para selecionar a opção (Tara ou Variedades)
function selectOption(option) {
    document.querySelector('.selection-panel').classList.add('hidden');
    
    if (option === 'tara') {
        document.getElementById('taraForm').classList.remove('hidden');
        document.getElementById('optionTara').classList.add('selected');
    } else {
        document.getElementById('variedadesForm').classList.remove('hidden');
        document.getElementById('optionVariedades').classList.add('selected');
    }
}

// Função para voltar à seleção inicial
function goBack() {
    document.getElementById('taraForm').classList.add('hidden');
    document.getElementById('variedadesForm').classList.add('hidden');
    document.querySelector('.selection-panel').classList.remove('hidden');
    document.getElementById('optionTara').classList.remove('selected');
    document.getElementById('optionVariedades').classList.remove('selected');
    
    // Limpar resultados
    document.getElementById('resultadoTara').classList.add('hidden');
    document.getElementById('resultadoVariedades').classList.add('hidden');
}

// Função para calcular a nova tara
function calcularTara() {
    const tara = parseFloat(document.getElementById('tara').value);
    const litros = parseFloat(document.getElementById('litros').value);
    const caixas = parseInt(document.getElementById('caixas').value);
    
    if (isNaN(tara) || isNaN(litros) || isNaN(caixas)) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }
    
    // Cálculo da nova tara: (caixas * 2) + tara + litros
    const novaTara = (caixas * 2) + tara + litros;
    
    // Exibir resultado
    document.getElementById('novaTaraValor').textContent = Math.round(novaTara);
    document.getElementById('resultadoTara').classList.remove('hidden');
}

// Função para calcular as variedades
function calcularVariedades() {
    const pesoLiquido = parseFloat(document.getElementById('pesoLiquido').value);
    const variedade1 = document.getElementById('variedade1').value;
    const caixas1 = parseInt(document.getElementById('caixas1').value);
    const pesoMedio1 = parseFloat(document.getElementById('pesoMedio1').value);
    const variedade2 = document.getElementById('variedade2').value;
    const caixas2 = parseInt(document.getElementById('caixas2').value);
    
    if (isNaN(pesoLiquido) || !variedade1 || isNaN(caixas1) || isNaN(pesoMedio1) || !variedade2 || isNaN(caixas2)) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }
    
    // Cálculos
    const totalPeso1 = caixas1 * pesoMedio1;
    const totalPeso2 = pesoLiquido - totalPeso1;
    const pesoMedio2 = totalPeso2 / caixas2;
    
    // Exibir resultado simplificado
    document.getElementById('v1Nome').textContent = variedade1;
    document.getElementById('v1Resultado').textContent = `${Math.round(totalPeso1)} kg (${Math.round(pesoMedio1)} kg/cx)`;
    
    document.getElementById('v2Nome').textContent = variedade2;
    document.getElementById('v2Resultado').textContent = `${Math.round(totalPeso2)} kg (${Math.round(pesoMedio2)} kg/cx)`;
    
    document.getElementById('resultadoVariedades').classList.remove('hidden');
}

// Função para inverter as variedades
function inverterVariedades() {
    // Salvar os valores atuais
    const variedade1 = document.getElementById('variedade1').value;
    const caixas1 = document.getElementById('caixas1').value;
    const pesoMedio1 = document.getElementById('pesoMedio1').value;
    
    const variedade2 = document.getElementById('variedade2').value;
    const caixas2 = document.getElementById('caixas2').value;
    
    // Trocar os valores
    document.getElementById('variedade1').value = variedade2;
    document.getElementById('caixas1').value = caixas2;
    
    document.getElementById('variedade2').value = variedade1;
    document.getElementById('caixas2').value = caixas1;
    
    // Limpar o peso médio da primeira variedade (que era a segunda)
    document.getElementById('pesoMedio1').value = '';
    
    // Focar no campo de peso médio para preenchimento
    document.getElementById('pesoMedio1').focus();
    
    // Limpar resultados anteriores
    document.getElementById('resultadoVariedades').classList.add('hidden');
    
    // Efeito visual no botão
    const btn = document.getElementById('inverterVariedades');
    btn.classList.add('rotating');
    setTimeout(() => {
        btn.classList.remove('rotating');
    }, 500);
}

// Adicionar efeito visual de rotação
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .rotating {
            animation: rotate 0.5s ease;
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(180deg); }
        }
        
        .selected {
            border-color: var(--success) !important;
        }
    `;
    document.head.appendChild(style);
>>>>>>> 8562c4c306dd4c61f0c7076db545d25bdd0122a9
});