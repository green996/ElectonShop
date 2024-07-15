

function ButtonComponent({ label, bgColor, textColor }) {
    return (
        <div className="px-6 py-3 rounded-full text-xl" style={{ backgroundColor: bgColor, color: textColor }}>{label}</div>
    )
}

export default ButtonComponent