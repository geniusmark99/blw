import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ id = '', type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            id={id}
            className={'border border-transparent' + className}
            ref={input}
        />
    );
});
