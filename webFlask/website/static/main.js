window.addEventListener("scroll",() =>{
    var header = document.querySelector('.navbar')
    header.classList.toggle("sticky", window.scrollY > 0);
} )
// 0103853139

document.addEventListener("DOMContentLoaded",()=>{
    var ctx = document.getElementById('myChart')
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ahorro en el banco', 'Inversion en el banco', 'Inversion con Naica'],
            datasets: [{
                label: '',
                data: [1, 2, 3,],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 5
            }]
        },
        options: {
            legend:{
                display:false
            },
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        offsetGridLines: true
                    }
                }]
            }
        },
        
    });
    Chart.defaults.global.customTooltips = function(tooltip) {
    

    if (!tooltip) {
        ctx.css({
            opacity: 0,
        });
        return;
    }
}
})

function myFunction(x) {
    x.classList.toggle("change");
  }


  const tablet = window.matchMedia('screen and (max-width:768px)')
  const menu = document.querySelector('.navegation')
  const burgerButton = document.querySelector('#burger-menu')
  


  tablet.addListener(validation)
  function validation(event) {
    if (event.matches) {
      burgerButton.addEventListener('click', hideShow);
      
    } else {
      burgerButton.removeEventListener('click', hideShow)
    }

  }

  // menú lateral activar animación

  function hideShow() {
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active')
      

    } else {
      menu.classList.add('is-active')
    }
  }


  burgerButton.addEventListener('click', (event) => {
      menu.style.animationName = 'showSideNavbar';
      menu.style.animationFillMode = 'forwards';
      menu.style.animationDuration = '1s';
    })

  function myFunction2(){
    if(burgerButton.classList.contains('change')){
      burgerButton.addEventListener('click', (event) => {
        menu.style.animationName = 'hideSideNavbar';
        menu.style.animationFillMode = 'forwards';
        menu.style.animationDuration = '1s';
      })
  }else{
    burgerButton.addEventListener('click', (event) => {
      menu.style.animationName = 'showSideNavbar';
      menu.style.animationFillMode = 'forwards';
      menu.style.animationDuration = '1s';
    })}
  }