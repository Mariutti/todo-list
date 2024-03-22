const header = (domEl)=>{
    const header = document.createElement('header')
    header.innerHTML = 'todo list'

    return domEl.append(header)

};

export default header;