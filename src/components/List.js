import { useContext } from "react"
import { useNavigate } from "react-router"
import { DataContext } from "../contexts/Context"
import CardData from "./CardData"

export default function List(){

    const emptyData = () => {
        return(
            <div style={style.emptyData}>
                <h1 style={style.textEmptyData}>DATA KOSONG</h1>
            </div>
        )
    }

    const navigate = useNavigate()

    // ambil data dari use context
    const [dataFeed, setDataFeed] = useContext(DataContext)
    const [datas, setDatas] = useContext(DataContext)

    const handleEdit = (no) => {
        navigate("/edit/"+no)
    }

    const deleteList = () => {
        
        alert('berhasil')
        // kembalikan data di use context kembali kosong
        setDatas(false)

    }

    return(
        <div style={style.outerContainer}>
            {dataFeed?
             <div style={style.container}>
             <div style={style.header}>
                 <h1>Biodata Saya</h1>
                 <div style={style.btnParent}>
                     <button onClick={() => handleEdit(dataFeed?.no)}  style={style.btnEdit}>Ubah</button>
                     <button onClick={() => deleteList()} style={style.btnDelete}> Hapus</button>
                 </div>
             </div>
             <div>
                 <h3 style={style.titleData}>Nama:</h3>
                 <p style={style.textData}>{dataFeed?.nama}</p>
             </div>
             <div>
                 <h3 style={style.titleData}>Usia:</h3>
                 <p style={style.textData}>{dataFeed?.usia}</p>
             </div>
             <div>
                 <h3 style={style.titleData}>Hobi:</h3>
                 <p style={style.textData}>{dataFeed?.hobi}</p>
             </div>
             <div>
                 <h3 style={style.titleData}>Alamat:</h3>
                 <p style={style.textData}>{dataFeed?.alamat}</p>
             </div>
         </div>
            :emptyData()}
        </div>
    )
}

const style = {
    outerContainer: {
        display:"flex",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:"center"
    },
    container:{
        width:"60%",
        paddingLeft:"65px",
        paddingRight:"65px",
        paddingTop:'20px',
        paddingBottom:'25px',
        borderRadius:'5px',
        display:'flex',
        flexDirection:"column",
        backgroundColor:'rgba(218, 218, 218, 0.24) ',
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    },
    header: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    btnEdit: {
        backgroundColor:'green',
        width:"85px",
        borderRadius:"5px",
        borderStyle:'none',
        height:'35px',
        color:'white',
        fontWeight:"400",
        cursor:'pointer'
    },
    btnParent:{
        width:"22%",
        display:"flex",
        justifyContent:"space-between"
    },
    btnDelete: {
        backgroundColor:'red',
        width:"85px",
        borderRadius:"5px",
        borderStyle:'none',
        height:'35px',
        color:'white',
        fontWeight:"400",
        cursor:'pointer'
    },
    textData: {
        marginTop:'-13px'
    },
    titleData: {
        marginTop:'10px'
    },
    emptyData:{
        display:'flex',
        justifyContent:"center",
        alignItems:'center'
    },
    textEmptyData:{
        fontWeight:'700'
    }

}