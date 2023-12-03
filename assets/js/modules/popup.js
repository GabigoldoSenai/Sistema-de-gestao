// Botões pop-up
const btnOpenSettings = document.getElementById('btn-popup-settings'),
btnOpenNotifications = document.getElementById('btn-popup-notifications')

// Fechar
const btnCloseNotifications = document.getElementById('close-button-notifications'),
btnCloseSettings = document.getElementById('close-button-settings')

// Elemento pop-up (especifico)
const popupSettings = document.getElementById('popup-settings'),
popupNotifications = document.getElementById('popup-notifications')

btnOpenSettings.addEventListener('click', () => {
    showPopup(popupSettings)
})

btnOpenNotifications.addEventListener('click', () => {
    showPopup(popupNotifications)
})

btnCloseSettings.addEventListener('click', () => {
    closePopup(popupSettings)
})

btnCloseNotifications.addEventListener('click', () => {
    closePopup(popupNotifications)
})

function showPopup(element) {
    element.style.display = 'inherit';
}

function closePopup(element) {
    element.style.display = 'none';
}

