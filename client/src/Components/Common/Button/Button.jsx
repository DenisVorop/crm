import './button.scss'

const Button = ({ label }) => {
    return (
        <div className="button">
            <button type="submit">{label}</button>
        </div>
    )
}

export default Button
