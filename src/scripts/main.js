const dataAniversario = new Date('August 29, 2024 19:00:00')
const timeStampDoEvento = dataAniversario.getTime()

const contaAsHoras = setInterval(()=>{
    const agora = new Date()
    const timesStampAtual = agora.getTime()
    
    const tempo = timeStampDoEvento - timesStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diaAteOEvento = Math.floor(tempo / diaEmMs)
    const horasAteOEvento = Math.floor((tempo % diaEmMs) / horaEmMs)
    const minutosAteOEvento = Math.floor((tempo % horaEmMs) / minutoEmMs)
    const segundosAteOEvento = Math.floor((tempo % minutoEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diaAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(tempo < 0){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'O evento ja acabou!'
    }
    
},1000)