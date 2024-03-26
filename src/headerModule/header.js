const header = (domEl)=>{
    const header = document.createElement('header');
    header.innerHTML = 'todo list'

    return domEl.prepend(header)

};

export default header;