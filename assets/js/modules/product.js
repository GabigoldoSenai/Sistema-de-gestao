const btnShowPop = document.getElementById('showPopup')
const popUp = document.getElementById('hiddenProduct')

btnShowPop.addEventListener('click', () => {
    if (popUp.style.display = 'none') {
        popUp.style.display = 'flex'
    } 
})

const stockList = document.querySelector('.list-stock')
const btnAddProduct = document.querySelector('.addProduct')

idCounter = 1;

btnAddProduct.addEventListener('click', () => {
    const inputName = document.getElementById('nameProduct').value
    const inputAmount = document.getElementById('amountProduct').value
    const inputSupplier = document.getElementById('supplierProduct').value
    const inputCell = document.getElementById('cellProduct').value
    const textareaDescription = document.getElementById('descriptionProductTextArea').value

    const divItem = document.createElement('div')
    divItem.className = 'item'
    const divIconProduct = document.createElement('div')
    divIconProduct.className = 'img-product'
    const divDescriptionProduct = document.createElement('div')
    divDescriptionProduct.className = 'description-product'

    const nameProduct = document.createElement('h4')
    const amountProduct = document.createElement('h5')
    const supplierProduct = document.createElement('p')
    const cellProduct = document.createElement('small')
    const descriptionProduct = document.createElement('small')

    const regexName = /^.{3,16}$/

    if(!regexName.test(inputName) || inputName == ""){
        nameProduct.textContent = 'Produto ' + idCounter
        idCounter++    
    } else {
        nameProduct.textContent = inputName    
    }

    const regexAmount = /^[0-9]+$/

    if(!regexAmount.test(inputAmount) || inputAmount == ""){
        amountProduct.textContent = 'Quantidade: Indefinido'
    } else {
        amountProduct.textContent = 'Quantidade: ' + inputAmount
    }
    
    if(!regexName.test(inputSupplier) || inputSupplier == ""){
        supplierProduct.textContent = 'Fornecedor: Indefinido'
    } else {
        supplierProduct.textContent = 'Fornecedor: ' + inputSupplier
    }

    const regexCell = /\(\d{2}\)\s?\d{4,5}-?\d{4}/g;

    if(!regexCell.test(inputCell) || inputCell == ""){
        cellProduct.textContent = 'Telefone: Indefinido'
    } else {
        cellProduct.textContent = 'Telefone: ' + inputCell
    }

    if(textareaDescription == ""){
        descriptionProduct.textContent = 'Sem descrição'
    } else {
        descriptionProduct.textContent = textareaDescription
        descriptionProduct.style.display = 'none'
    }

    divDescriptionProduct.appendChild(nameProduct)
    divDescriptionProduct.appendChild(amountProduct)
    divDescriptionProduct.appendChild(supplierProduct)
    divDescriptionProduct.appendChild(cellProduct)
    divItem.appendChild(divIconProduct)
    divItem.appendChild(divDescriptionProduct)
    stockList.appendChild(divItem)
    popUp.style.display = 'none'
});