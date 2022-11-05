import { useContext, useState } from "react"
import { DataContext } from "../contexts/Context"
import { useNavigate } from "react-router";

export default function Edit(){

    const navigate = useNavigate()

    const [datas, setDatas] = useContext(DataContext) // data yang diubah akan disimpan disini
    const [dataFeed] = useContext(DataContext) // data yang diambil dari localStorage berada disini
    const [form, setForm] = useState({
        nama: dataFeed?.nama,
        usia: dataFeed?.usia,
        hobi: dataFeed?.hobi,
        alamat: dataFeed?.alamat
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

            // melakukan pengecekan value dari input
            var pattern = new RegExp(/[~`_!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()0123456789@]/)
            var numPattern = new RegExp(/[~`_@!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/)

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

            // timpah data yang lama dengan data yang baru
            setDatas(data)

            alert('Sukses mengubah data')
            setForm({
                nama:'',
                usia:'',
                hobi:'',
                alamat:''
            })
            navigate("/list")
        }
        catch(error){
            alert('gagal menambahkan data'+ error)
        }
    }

    return(
        <div style={style.container}> 
            <form style={style.form} onSubmit={(e)=> handleSubmit(e)}>
                <h1>EDIT DATA</h1>
                <div style={style.inputParent}>
                    <label style={style.labelInput} htmlFor="">Nama</label>
                    <input  value={form.nama} onChange={handleChange} required style={style.formInput} name="nama" type="text" />
                </div>
                <div style={style.inputParent}>
                    <label style={style.labelInput} htmlFor="">Usia</label>
                    <input value={ form.usia } onChange={handleChange} required style={style.formInput} name="usia"  />
                </div>
                <div style={style.inputParent}>
                    <label style={style.labelInput} htmlFor="">Hobi</label>
                    <input value={ form.hobi } onChange={handleChange} required style={style.formInput} name="hobi" type="text" />
                </div>
                <div style={style.inputParent}>
                    <label style={style.labelInput} htmlFor="">Alamat</label>
                    <textarea value={ form.alamat } onChange={handleChange} required style={style.formInputAddress} name="alamat" id="" cols="59" rows="5"></textarea>
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
        marginTop:"30px",
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
        paddingTop:"10px",
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
        width:"90%"
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