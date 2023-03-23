const labels=document.querySelectorAll('.control-form label')

labels.forEach(label=> {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,indx)=>`<span style="transition-delay:${indx * 50}ms">${letter}</span>`)

    .join('')
})



