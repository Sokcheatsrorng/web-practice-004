import { useEffect, useState } from "react";
import CardComponent from "./Card/CardComponent";
import LoadingComponent from "../Loader/LoadingComponent";

export type Products ={
    readonly id?:number;
    title:string;
    description:string;
    image:string;
}

const HomeComponent = () =>{
    const [getProduct, setGetProduct] = useState<Products[]>();
    const [loading,setLoading] = useState(false);
    async function fetchData(){
        setLoading(true);
        try{
            const fetchData = await fetch("https://fakestoreapi.com/products");
            const res = await fetchData.json();
            console.log(res);
            setGetProduct(res);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return (
        <div>
            {loading? (
                <LoadingComponent/>
            ):(
                <div className="mx-16 grid grid-flow-row grid-cols-4 gap-4">
                    {getProduct?.map((props,index)=>(
                      <CardComponent
                        key={index}
                        image={props.image}
                        title={props.title}
                        description = {props.description} 
                      />
                    )
                    )}
                </div>
            
                
            )}
        </div>
    )

}
export default HomeComponent
