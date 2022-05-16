fetch("./work.json")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    appendDataWork(data)
  })

fetch("./education.json")
  .then(function (response) {
    return response.json()
  })
  .then(function (edu) {
    appendDataEducation(edu)
  })

function appendDataWork(data) {
  var ele = document.querySelector(".work")
  for (var i = 0; i < data.length; i++) {
    var h4 = document.createElement("h4")
    var h5 = document.createElement("h5")
    var p = document.createElement("p")
    h4.innerHTML = data[i].employer + " - " + data[i].workplace
    h5.innerHTML = data[i].startdate + " - " + data[i].enddate
    p.innerHTML = data[i].description
    ele.appendChild(h4)
    ele.appendChild(h5)
    ele.appendChild(p)
  }
}
function appendDataEducation(data) {
  var ele = document.querySelector(".education")
  for (var i = 0; i < data.length; i++) {
    var h4 = document.createElement("h4")
    var h5 = document.createElement("h5")
    var p = document.createElement("p")
    h4.innerHTML = data[i].school + " - " + data[i].course
    h5.innerHTML = data[i].startdate + " - " + data[i].enddate
    p.innerHTML = data[i].description
    ele.appendChild(h4)
    ele.appendChild(h5)
    ele.appendChild(p)
  }
}

function darkButton() {
  const head = document.querySelector(".btn")
  head.style.filter = "invert(100%)"
}

document.addEventListener("keydown", (event) => {
  var ele = document.getElementById("easterEgg")
  const over = document.getElementById("overlay")
  var arr = ["m", "e", "m", "e"]

  if (arr.includes(event.key)) {
    if (event.key == "m" && ele.innerText == "") {
      ele.innerText += event.key
    }
    if (event.key == "e" && ele.innerText == "M") {
      ele.innerText += event.key
    }
    if (event.key == "m" && ele.innerText == "ME") {
      ele.innerText += event.key
    }
    if (event.key == "e" && ele.innerText == "MEM") {
      ele.innerText += event.key
      over.style.transition = "opacity 3s"
      over.style.opacity = 1
      setTimeout(() => {
        window.open(
          "https://www.youtube.com/watch?v=1lcksCjvuSs",
          "_blank"
        )
      }, 3000)
    }
  } else {
    reset()
  }

  function reset() {
    ele.innerText = ""
  }
})