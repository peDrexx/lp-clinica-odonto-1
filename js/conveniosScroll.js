const conveniosRow1 = document.getElementById("convenios-row-1")
const conveniosRow2 = document.getElementById("convenios-row-2")

// let percentual = 15;

// conveniosRow1.style.transform = `translate(${percentual}%)`
// conveniosRow2.style.transform = `translate(-${percentual}%)`

const conveniosRows = document.querySelectorAll('.convenios-row');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            
            console.log("Intersectando")
        }
        else {
            console.log("Não intersectando")
        }
    })
})

conveniosRows.forEach((el) => observer.observe(el));