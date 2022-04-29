import Layout from "../../components/Layout";


export default function Questions(){
     return (
         <Layout>
             <div className="question-container flex justify-center md:justify-start  items-center flex-wrap w-11/12 mx-auto">
             <div className="question-card px-3 hover:shadow-lg cursor-pointer bg-gray-100 py-3 basis-72 border-8 hover:rounded-sm border-white shadow-md rounded-lg m-5">
             
                <div className="card-header">
                    <h3 className="text-2xl mb-3 font-bold text-gray-600">FAQ Component</h3>
                </div>

                <div className="card-body ">
                    <p className="text-gray-600 ">Create a re-usable "Frequently Asked Questions" component</p>
                    <p className="mt-5 text-gray-700 ">Difficulty : <span className="bg-green-500 px-3 py-1 mt-2 font-semibold rounded-md text-white">Easy</span></p>
                </div>
             </div>

             
             </div>
         </Layout>
     )
}

export async function getStaticProps(context){
    
}