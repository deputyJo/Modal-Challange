//When show modal is clicked:
//display the modal
//it contains:
//a header
//a message
//disable everything else which in not the modal
//to close the modal:
//click on the close button
//click outside the modal
//press esc
//remove modal from the dom when closed

//get the show-modal button
//attach the event listener
//when clicked:
//create the modal and display

const showModalButton = document.getElementById("show-modal");
const modalContainer = document.getElementById("modal-container");


showModalButton.addEventListener("click", () => {
    // console.log("CLICK");
    createModal();
    // console.log(modalContainer.children);
});


function createModal() {

    const overlay = document.createElement("div");
    overlay.className = "modalOverlay";

    const modalBackground = document.createElement("div");
    modalBackground.className = "modalBackground";

    const modalHeader = document.createElement("h1");
    modalHeader.className = "modalHeader";
    modalHeader.textContent = "This is a modal";

    const modalMessage = document.createElement("p");
    modalMessage.className = "modalMessage";
    modalMessage.textContent = "Placeholder modal message.";

    modalBackground.append(modalHeader, modalMessage);
    overlay.appendChild(modalBackground);
    modalContainer.appendChild(overlay);

    console.log(overlay);
    console.log(modalBackground);
    console.log(modalContainer);
}