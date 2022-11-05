
export default function CardData(){
    return(
        <div style={style.container}>
            <div style={style.header}>
                <h1>Biodata Saya</h1>
                <div style={style.btnParent}>
                    <button  style={style.btnEdit}>Ubah</button>
                    <button  style={style.btnDelete}> Hapus</button>
                </div>
            </div>
            <div>
                <h3 style={style.titleData}>Nama:</h3>
                <p style={style.textData}>Bildan Jauhary</p>
            </div>
            <div>
                <h3 style={style.titleData}>Usia:</h3>
                <p style={style.textData}>23</p>
            </div>
            <div>
                <h3 style={style.titleData}>Hobi:</h3>
                <p style={style.textData}>Ngoding Javascript</p>
            </div>
            <div>
                <h3 style={style.titleData}>Alamat:</h3>
                <p style={style.textData}>Kec. Tajurhalang, kab. bogor, Jawabarat, Indonesia</p>
            </div>
        </div>
    )
}

const style = {
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
    }
}