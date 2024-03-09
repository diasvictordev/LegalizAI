function uploadPDF() {
    const pdfInput = document.getElementById('pdfInput');
    const file = pdfInput.files[0];

    if (!file) {
        alert('Selecione um arquivo PDF para enviar.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:8080/api/pdf/upload/gpt', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.text();
    })
    .then(data => {
        // Exibe a resposta do servidor no h2
        const responseElement = document.getElementById('response');
        responseElement.textContent = data;
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o arquivo PDF.');
    });

    
}