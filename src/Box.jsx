import './Box.css';
import Snake from './Snake'


function Box(){
    //link
    const core = document.querySelector('core');

    return(
        <>
            <div className="box">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>

                <Snake></Snake>
            </div>
            
        </>
    )
}

export default  Box;