export const requiredField = (value) =>{
    if(value) return undefined;
    else return 'error , поле обязательное'

}


export const maxLengthCreator=(maxLength) => (value) =>{
    if(value.length>maxLength) return `Максимальная длина поста ${maxLength} символов`;
    else return undefined;
}



