 const setting = document.getElementById('setting')
 const textP = document.querySelector('p')
//  const reSetbtn = document.getElementById('reset')
 const body = document.querySelector('body')
 const reSetbtn = document.querySelector('button')


setting.addEventListener('change' , ()=>{

    localStorage.setItem('valueOfinput' ,setting.checked) // รับค่า true false 

    console.log(setting.checked); // get value true false
    loadTheme()
})

reSetbtn.addEventListener('click' , () => {
    localStorage.clear()
    loadTheme() // เคลียเสร็จโหลด theme ใหม่
})


const loadTheme = () => {
    // convert string  -> object  // true -> boolean
    const status =  JSON.parse(localStorage.getItem('valueOfinput'))
    setting.checked = status
    if (status){
        textP.innerText="Night"
        body.style.backgroundColor='black'
        body.style.color= 'white'
        body.style.transition= '1s'
    }else{
        textP.innerText="Day"
        body.style.backgroundColor="white",
        body.style.color="black"
        body.style.transition= '1s'

    }
}

loadTheme()



// ดักจับรูปภาพที่อัพโหลด

const profileImage = document.querySelector('img')
const input = document.querySelector('input')

input.addEventListener('change' , ()=>{
    profileImage.src = URL.createObjectURL(input.files[0]);
})