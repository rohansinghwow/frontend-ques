import Layout from "../../components/Layout";
import axios from "axios";
import {useRouter} from 'next/router'

export default function Questions({ allQuestion }) {
      const router = useRouter()
  return (
    <Layout>
      <div className="question-container flex justify-center md:justify-start  items-center flex-wrap w-11/12 mx-auto">
        {allQuestion.map((item,index) => (
          <div
          onClick={()=>router.push(`questions/${item._id}`)}
            key={index}
            className="question-card px-3  cursor-pointer bg-gray-100 py-3 basis-72    rounded-lg m-5 border-2 border-gray-200"
          >
            <div className="card-header">
              <h3 className="text-2xl mb-3 font-bold text-gray-600">
                {item.title}
              </h3>
            </div>

            <div className="card-body ">
              <p className="text-gray-600 ">{item.description}</p>
              <p className="mt-5 text-gray-700 ">
                          Difficulty :
                          <span className="bg-gray-500 px-3 py-1 mt-2 font-semibold rounded-md text-white">
                            {item.rating}
                          </span>
                        </p>
              
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(`http://localhost:3000/api/questions/`);
  try {
    return {
      props: {
        allQuestion: data
      },
    };
  } catch (error) {
    console.log(error);
  }
}
