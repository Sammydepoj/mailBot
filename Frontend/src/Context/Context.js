import axios from 'axios'
import { createContext, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)

    return context;
}

const ContextProvider = ({ children }) => {
    const navigate = useNavigate()

    const [data, setData] = useState({ email: '', subject: '', body: '' })
    const [error, setError] = useState(false)


    const setLs = () => {
        localStorage.setItem('data', JSON.stringify(data))
    }

    const getLs = () => {
        setData(JSON.parse(localStorage.getItem('data')))
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData((prev) => ({ ...prev, [name]: value }))

    }

    // select file 
    const [selectedFile, setSelectedFile] = useState({});
    // const [file, setFile] = useState()

    const fileReader = new FileReader();

    const handleFile = (e) => {
        setSelectedFile(e.target.files[0]);
        // console.log(e.target.files[0]);
    }
    // console.log(selectedFile.name);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // if (selectedFile) {
        //     fileReader.onload = function (event) {
        //         const csvOutput = event.target.result;
        //         setFile({ file: csvOutput });
        //         console.log(csvOutput);
        //         submitData({ file: csvOutput, data: data })
        //     };
        //     // fileReader.readAsDataURL(selectedFile);
        // }
        submitData({ selectedFile, data: data })
        // console.log(selectedFile);
        // console.log(data);
    };

    // const handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     if (selectedFile) {
    //         fileReader.onload = function (event) {
    //             const csvOutput = event.target.result;
    //             setFile({ file: csvOutput });
    //             submitData({ file: csvOutput, data: data })
    //         };
    //         fileReader.readAsDataURL(selectedFile);
    //     }
    // };

    // const submitData = async (csvData) => {
    //     // post csv file
    //     // const url = 'https://am0z31.deta.dev/upload';
    //     console.log(csvData);
    //     try {
    //         // const res = await axios.post(url, {csvData})
    //         // console.log(res);
    //         // console.log(csvData);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     // console.log('cli');
    // }
    const submitData = async (selectedFile) => {
        // post csv file
        let bodyData = new FormData();

        // console.log(selectedFile.selectedFile);
       
        // bodyData.append('name', 'FILENAME')
        bodyData.append('file', selectedFile.selectedFile)
        bodyData.append('subject', data.subject)
        bodyData.append('body', data.body)

        // console.log(bodyData);

        // const url = 'https://am0z31.deta.dev/upload';

        await axios({
            method: "post",
            url: "https://am0z31.deta.dev/upload",
            data: bodyData,
            withCredentials: false,
            headers: { 
                'Accept': 'application/json',
                "Content-Type": "multipart/form-data" 
            }
          })
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
        // console.log(selectedFile);
      
        // console.log('cli');
    }


    const handlegenerateVariant = () => {
        navigate('/variant')
        // post request to generate variant
    }

    const handleNavigate = () => {
        const regex = /\S+@\S+\.\S+/;

        if (!regex.test(data.email)) {

            setError(true)

            setTimeout(() => {
                setError(false)
            }, 2000);

        } else {
            navigate('/compose')
            setLs()
        }
    }

    // clear local storage after generating variant

    const proceedCsv = () => {
        // localStorage.clear()
        navigate('/add-recipients')
    }

    return (
        <AppContext.Provider value={{
            error,
            data,
            handleNavigate,
            setLs,
            getLs,
            handleChange,
            handlegenerateVariant,
            proceedCsv,
            handleFile,
            handleOnSubmit,
            selectedFile
        }}>
            {children}
        </AppContext.Provider>
    )

}

export default ContextProvider;