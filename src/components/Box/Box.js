import './boxStyle.css'

const Box = ({children, label, color,background }) => {


    return (
        <div className={'main-box'} style={{background:background ? 'darkcyan' : 'white'}}>
            <p style={{color:color}}>{label}</p>
            {children}
        </div>
    );
};

export default Box;
