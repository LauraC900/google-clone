import Head from 'next/head'
import Header from '../components/Header'
import { API_KEY, Context_KEY } from '../Keys';
import Response from "../Response"
import { useRouter } from "next/router"
import SearchResults from '../components/SearchResults';

function Search({ results }) {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - google search</title>
            </Head>

               <Header />
               
               <SearchResults results={results} />
            
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${Context_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then(res => res.json())

    return{
        props:{
            results: data
        }
    }
}
