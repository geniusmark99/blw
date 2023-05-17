export default function CustomLabel({ value, className = '', children, ...props }) {
    return <>
        <label {...props} className={className} >
            {children}
        </label >
    </>
}