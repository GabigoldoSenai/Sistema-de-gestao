const btnClient = document.getElementById('btnClient')
const popupClient = document.getElementById('hidden-clients')

    btnClient.addEventListener('click', () => {
        if (popupClient.style.display = 'none') {
            popupClient.style.display = 'inherit'
        }
    })

        const btnAddClient = document.getElementById('addClient')
        idCounter = 1;

            btnAddClient.addEventListener('click', () => {
            const listClients = document.getElementById('client-list')
            const li = document.createElement('li')
            const divClientBox = document.createElement('div')
            divClientBox.className = 'client-box'
            const divClientIco = document.createElement('div')
            divClientIco.className = 'client-icon'
            const divClientContact = document.createElement('div')
            divClientContact.className = 'client-contact'
            const clientName = document.createElement('h5')
            const clientCell = document.createElement('small')

            const nameInput = document.getElementById('clientNameInput').value
            const cellInput = document.getElementById('clientCellInput').value

                if(nameInput == ''){
                    clientName.textContent = 'Cliente ' + idCounter
                    clientCell.textContent = '(82) 99999-9999';
                    idCounter++
                } else {    
                    const regexCell = /\(\d{2}\)\s?\d{4,5}-?\d{4}/g;

                    clientName.textContent += nameInput;

                    if(!regexCell.test(cellInput) || cellInput == "") {
                        clientCell.textContent = '(82) 99999-9999';
                    } else {
                        clientCell.textContent += cellInput;
                    }
                    
                }

            divClientContact.appendChild(clientName)
            divClientContact.appendChild(clientCell)
            divClientBox.appendChild(divClientIco)
            divClientBox.appendChild(divClientContact)
            li.appendChild(divClientBox)
            listClients.appendChild(li)
            popupClient.style.display = 'none'
        })