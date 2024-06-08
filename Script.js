
const targetDate = new Date('2026-01-01T00:00:00')

function Timer (){

    const currentdate = new Date();

    const timedeffe = targetDate - currentdate

    const days = Math.floor(timedeffe/(1000 * 60 * 60 * 24));

    const hours = Math.floor((timedeffe % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
    const minutes = Math.floor((timedeffe % (1000 * 60 * 60)) / (1000 * 60))

    const seconds = Math.floor((timedeffe % (1000 * 60)) / 1000)

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

    setTimeout(Timer,1000)


}

Timer();