export function inputError({
    input,
    iconError,
    textError
}) {
    function show(){
        if(input.type === 'email') {
            input.style.color = 'hsl(0, 100%, 74%)';
        }
        input.style.border = '1px solid hsl(0, 100%, 74%)';
        iconError.classList.remove('close');
        textError.classList.remove('close');
    }

    function clear() {
        input.style.color = '';
        input.style.border = '';
        iconError.classList.add('close');
        textError.classList.add('close');
    }

    return {
        show, 
        clear
    }
}