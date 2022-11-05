import { useContext, useState } from "react"
import { DataContext } from "../contexts/Context"
import { useNavigate } from "react-router"


export default function Form(){

    const navigate = useNavigate()

    // ambil data dari use context
    const [datas, setDatas] = useContext(DataContext)

    // state untuk menampung nilai dari form
    const [form, setForm] = useState({
        nama: '',
        usia: '',
        hobi: '',
        alamat: ''
    })


    const handleChange = (e) => {
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        try{
            e.preventDefault()

            var pattern = new RegExp(/[~`_!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()0123456789@]/)
            var numPattern = new RegExp(/[~`_@!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/)
            
            // melakukan pengecekan value dari input
            if(pattern.test(form.nama)){
               return alert("Nama Hanya boleh mengandung Alfabet")
            } else if(pattern.test(form.hobi)){
               return alert("Hobi Hanya boleh mengandung Alfabet")
            } else if(numPattern.test(form.usia)){
               return alert("Usia Hanya boleh mengandung Angka")
            }


            const data = {
                no:1,
                nama: form.nama,
                usia: form.usia,
                hobi: form.hobi,
                alamat: form.alamat
            }

            // kirim data ke use context
            setDatas(data)

            alert('Sukses menambahkan data')

            // setelah berhasil navigasi ke halaman list
            navigate("/list")

            setForm ({
                nama: '',
                usia: '',
                hobi: '',
                alamat: ''
            })

        }
        catch(error){
            alert('gagal menambahkan data')
        }
    }

    return(
        <div style={style.container}> 
            <form style={style.form} onSubmit={(e)=> handleSubmit(e)}>
                <h1>ISI FORM</h1>
                <div style={style.inputParent}> 
                    <label style={style.labelInput} htmlFor="">Nama</label>
                    <input onChange={handleChange} required style={style.formInput} name="nama" type="text" />
                </div>
                <div style={style.inputParent}>
                    <label style={style.labelInput} htmlFor="">Usia</label>
                    <input  onChange={handleChange} required style={style.formInput} name="usia"  />
                </div>
                <div style={style.inputParent}>
                    <label style={style.labelInput} htmlFor="">Hobi</label>
                    <input onChange={handleChange} required style={style.formInput} name="hobi" type="text" />
                </div>
                <div style={style.inputParent}>
                    <label style={style.labelInput} htmlFor="">Alamat</label>
                    <textarea onChange={handleChange} required style={style.formInputAddress} name="alamat" id="" cols="59" rows="5"></textarea>
                </div>

                <button style={style.btnSubmit} type="submit">
                    <p>Submit</p>
                </button>
            </form>
        </div>
    )
}

const style = {
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    form:{
        display:'flex',
        paddingTop:"10px",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:"50%",
        borderRadius:'5px',
        backgroundColor:"white",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    },
    formInputAddress:{
        borderStyle:'none',
        borderRadius:'5px',
        paddingLeft:'8px',
        paddingTop:'10px',
        fontSize:"16px",
        backgroundColor:'rgba(180, 180, 180, 0.24) '
    },
    formInput: {
        width:'97.5%',
        height:'40px',
        borderStyle:'none',
        borderRadius:'5px',
        paddingLeft:'8px',
        fontSize:"16px",
        backgroundColor:'rgba(180, 180, 180, 0.24) '
    },
    inputParent: {
        display:"flex",
        flexDirection:"column",
        paddingBottom:'15px',
        width:'90%',
    },
    labelInput: {
        marginBottom:'5px',
        fontWeight:"500"
    },
    btnSubmit: {
        width:"90%",
        height:'40px',
        color:'white',
        fontWeight:"500",
        borderRadius:"5px",
        backgroundColor:'tomato',
        borderStyle:'none',
        marginBottom:"35px",
        cursor:"pointer"
    }
}