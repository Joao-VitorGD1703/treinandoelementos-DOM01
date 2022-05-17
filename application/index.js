let errorParagraph = window.document.getElementById('error')



function purchase() {
    console.log("button clicked")
    // aparesce ao ser acionado dentro da aplicação
      errorParagraph.textContent = "Something went wrong, please try again"
    // desce uma janela de alerta do navegador===> alert("Something went wrong, please try again")

}
onClick()