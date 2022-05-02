import Layout from "../../components/Layout";
import axios from 'axios'
export default function Singlequestion({question}){
    
    return (
        <Layout>
            <div className="w-2/4 mx-auto p-4">
                <p>Prompt</p>
                <h3 className="mb-5">{question.details.prompt}</h3>
                
                
                <p className="mb-3">{question.details.example}</p>
                <pre className="bg-gray-100 text-lg rounded-md py-6 px-4 break-words whitespace-pre-wrap border-2 border-gray-200 border-l-gray-700 border-l-4 text-gray-700  overflow-y-scroll">

                    <code>{question.details.code}</code>
                    
                </pre>

                </div>

        </Layout>
    )
}

export async function getServerSideProps(context){
    const {data} = await axios.get(`http://localhost:3000/api/questions/${context.query.id}`)
    try {
        return {
            props : {
                question : data[0]
            }
        }    
    } catch (error) {
        console.log(error)
    }
    
}