const SelectDropdown = (props) =>{
    return(
        <div className={props.parentClassName}>
            <label className={`block font-semibold text-[#0A1951] sm:block hidden ${props.labelClassName}`} htmlFor={props.id}>{props.label}</label>
            <select name={props.name} id={props.id} className={`outline-none text-[#8890B1] sm:bg-transparent bg-white sm:px-0 sm:py-2 py-4 px-2 rounded-xl ${props.selectClassName}`}>
                {props.listArray?.map((item,index)=>{
                    return(
                        <option key={index} value={item?.list}>{item?.list}</option>

                    )
                })}
            </select>
        </div>
    )
}
export default SelectDropdown
