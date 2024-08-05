const ThemeButton = (props) =>{
    return(
        <div>
            <button className={`${props.className} bg-[#0A1951] text-white rounded-xl px-6 py-4 text-sm shadow-button-shadow`} onClick={props.onClick}>{props.text}</button>
        </div>
    )
}
export default ThemeButton