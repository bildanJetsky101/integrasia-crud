import Form from "../components/Form";
import List from "../components/List";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

export default function ListData(){

    const text = "kembali"

    return(
        <div style={style.container}>
            <div style={style.nav}>
                <Link to={"/"}>
                    <button style={style.btn}>{text}</button>
                </Link>
            </div>
            <List/>
        </div>
    )
}

const style = {
    container: {
        display:"flex",
        flexDirection:'column'
    },
    nav: {
        display:"flex",
        height:"75px",
        justifyContent:'flex-start',
        alignItems:'center'
    },
    btn: {
        backgroundColor:'tomato',
        width:"85px",
        marginLeft:"30px",
        borderRadius:"5px",
        borderStyle:'none',
        height:'35px',
        color:'white',
        fontWeight:"400",
        cursor:'pointer'
    }
}