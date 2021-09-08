
export const validate = (values) => {
    let warnings = {};
    if (!values.name) {
        warnings.name = 'Name is required';
    } else if (values.name <= 2) {
        warnings.name = 'Set corect name lenght'
    }
    return warnings;
}