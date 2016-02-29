function formToObj(form) {  
  var elems = form.elements
  var formObj = {}, i, len = elems.length, str=''

  for(i = 0; i < len; i += 1) {
    var element = elems[i]
    var type = element.type
    var name = element.name
    var value = element.value
    if (value !== '')
      formObj[name] = value
  }
  return formObj
}


var myForm = document.querySelector('form')

myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('elements:', myForm.elements)
  fetch('/', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      student: formToObj(myForm)
    })
  })
})
