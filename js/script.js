const bar = document.querySelector('#bar');
bar.addEventListener('click', ()=>{
    const aside = document.querySelector('aside');
    aside.classList.toggle('top');
    bar.classList.toggle('fa-times');
});

window.addEventListener('scroll', ()=>{
    const aside = document.querySelector('aside');
    const bar = document.querySelector('#bar');
    aside.classList.remove('top');
    bar.classList.remove('fa-times');
});



// page fade in animation

const fadeContainer = document.querySelectorAll(".fade-out");
// console.log(fadeContainer);

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
       entry.target.classList.toggle("fade-in", entry.isIntersecting)
    })
},{
   threshold: 0.2,
}
)


fadeContainer.forEach(fade =>{
   observer.observe(fade)
})


const fadeContainer2 = document.querySelectorAll(".fade-right");
// console.log(fadeContainer2);

const observer2 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
       entry.target.classList.toggle("faderight", entry.isIntersecting)
    })
},{
   threshold: 0.2,
}
)

fadeContainer2.forEach(fade =>{
   observer2.observe(fade)
})

// const fadeContainer3 = document.querySelectorAll(".fade-from-left");
// // console.log(fadeContainer);

// const observer3 = new IntersectionObserver(entries =>{
//     entries.forEach(entry =>{
//        entry.target.classList.toggle("fade-in-from-left", entry.isIntersecting)
//     })
// },{
//    threshold: 0,
// }
// )

// fadeContainer3.forEach(fade =>{
//    observer3.observe(fade)
// })
