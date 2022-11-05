import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <div style={style.container}>
            <div style={style.nav}>
                <Link to={"/list"}>
                    <button style={style.btn}> Biodata </button>
                </Link>
            </div>
        </div>
    )
}

const style = {
    container:{
        height:"65px",
        display:'flex',
        justifyContent:'flex-end',
        marginBottom:'10px'
    },
    nav: {
        width:"25%",
        display:"flex",
        alignItems:'center'
    },
    btn: {
        backgroundColor:'tomato',
        width:"85px",
        borderRadius:"5px",
        borderStyle:'none',
        height:'35px',
        color:'white',
        cursor:"pointer",
        fontWeight:"400",
    }
}