console.log('usmS.js loaded')


usmS = n=>{
    let k = Math.round((n+2)/4)
    return (2*Math.cos(Math.PI*(1/2-k/n))-2*Math.cos(Math.PI*(1/2-1/(2*n)))*Math.cos((2*k-1)*Math.PI/(2*n))*(1+(Math.tan((2*k-1)*Math.PI/(2*n)))/(Math.tan(Math.PI-(n+2*k-2)*(Math.PI/(2*n))))))/(2*Math.cos(Math.PI*(1/2-k/n)))
}
