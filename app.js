var bodyvar=document.body

var consumption=document.getElementById("consumption")

var resources=document.getElementById("resources")

var people=document.getElementById("people")

var climate=document.getElementById("climate")

var saveText=document.getElementById("save")

var frame=document.getElementById("frame")

//------------variable declaration is Done-------------------

consumption.onclick = () => {

    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize = "100% 100%"

    saveText.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers"

    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    consumption.style.backgroundColor = "green"
    climate.style.backgroundColor = ""
    people.style.backgroundColor = ""
    resources.style.backgroundColor = ""
}

resources.onclick = () => {

    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize = "100% 100%"

    saveText.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"
    
    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    resources.style.backgroundColor = "yellow"
    climate.style.backgroundColor = ""
    people.style.backgroundColor = ""
    consumption.style.backgroundColor = ""

}

climate.onclick = () => {

    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize = "100% 100%"

    saveText.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"

    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    climate.style.backgroundColor = "violet"
    people.style.backgroundColor = ""
    resources.style.backgroundColor = ""
    consumption.style.backgroundColor = ""
}

people.onclick = () => {

    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize = "100% 100%"

    saveText.innerHTML=" Do your bit! Never waste  food.Rather offer it to people or animals who are in need."

    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    people.style.backgroundColor = "#48454E"
    climate.style.backgroundColor = ""
    resources.style.backgroundColor = ""
    consumption.style.backgroundColor = ""



}




