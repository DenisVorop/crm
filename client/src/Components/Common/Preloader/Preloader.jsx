
import './preloader.scss'

const preloaderStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#061519'
}

const Preloader = () => {
    return (
        <div style={preloaderStyle}>
            <div className="spinner__box">
                <div className="blue__orbit leo">
                </div>
                <div className="green__orbit leo">
                </div>
                <div className="red__orbit leo">
                </div>
                <div className="white__orbit w1 leo">
                </div><div className="white__orbit w2 leo">
                </div><div className="white__orbit w3 leo">
                </div>
            </div>
        </div>
    )
}

export default Preloader;
