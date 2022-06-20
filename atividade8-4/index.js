function verifyText(){
  const text = document.getElementById("textUser").value
  try {
    const objeto = JSON.parse(text)
    console.log("Parsable JSON string!")
    console.log(objeto)
  } catch (error) {
    console.log(error)
  }
}
