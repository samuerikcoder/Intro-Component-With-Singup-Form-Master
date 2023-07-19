export function emailValidation({
    input,
    valueError
}) {
    function test() {
        const {value} = input;
    
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    }

    function verify() {
        if(input.type === 'email') {
            if(!test(input)) {
                valueError.show();
            } else {
                valueError.clear();
            }
        }
    }

    return {verify};
}