export default function FormInput({name , placeholder , style,require}){

    return (
        <>
        <label>{name}</label>
        <input  type="text" name={name} placeholder={placeholder} className="p-2 rounded-md mt-4 mb-2 bg-emerald-400 text-gray-600"/>
        </>
    )
}