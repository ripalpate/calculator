const sevenButton = document.getElementById('sevenButton');

const sevenButtonEvent = () => {
    sevenButton.addEventListener('click', ()=>{
        console.log("clicked 7");
    })
};

const attachEvents = () => {
    sevenButtonEvent();
}
export default attachEvents;