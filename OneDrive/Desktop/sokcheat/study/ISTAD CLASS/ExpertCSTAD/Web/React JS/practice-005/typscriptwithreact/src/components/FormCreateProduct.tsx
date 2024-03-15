import { useEffect,useState } from "react";
import { Label, TextInput, Textarea  } from 'flowbite-react';
export type AddProduct ={
    title:string,
    price:number,
    description:string;
    category:string;
    image: string;
}
type ErrorType ={
    title?:string;
    price?:string;
}
type CreateProductForm={
    getDataForm: (product:AddProduct)=>void;
}
const  FormCreateProduct:React.FC<CreateProductForm>=({getDataForm})=>{
       const[product,setProduct] = useState<AddProduct>({
           title:'',
           price: 0,
           description: '',
           image:'https://imgs.search.brave.com/69vaCASQH9kwWMYwQdugSJURitSueCuh6EgsQodE8aA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg5/MjcyNDE3L3Bob3Rv/L2NhdC1hbmQtZG9n/LXNpdHRpbmctdG9n/ZXRoZXIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWZjNVFN/UGZyeHNtQzZzZWVD/cC1PLUtjd05nVUlz/WHU0bWQzeEFHcS1J/d3c9',
           category: 'electronic'
       })
       useEffect(()=>{
           getDataForm(product)
       },[product,getDataForm])
       const[error,setError] = useState<ErrorType>({})
       useEffect(()=>{
        const newError: ErrorType = {};
        if(product.title.length<3 && product.title.length){
              newError.title = "Title must be at least 3 characters."
        }
        if(product.price && (Number(product.price) <= 0)){
            newError.price="Price must be a positive number"
        }
        setError(newError)
       },[product.title, product.price])
       const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
           const {id,value} = e.target;
           setProduct((prevProduct)=>({
            ...prevProduct,
            [id]:value
           }));
       }
       return (

        <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Product Title" />
          </div>
          <TextInput id="title" type="text" placeholder="T-Shirt" value={product.title} onChange={handleChange} />
          {error.title && <p className='text-red-500'>{error.title}</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Product Price"/>
          </div>
          <TextInput id="price" type="number" value={product.price} onChange={handleChange} />
          {error.price && <p className='text-red-500'>{error.price }</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea id="description" value={product.description} onChange={handleChange} />
        </div>
        <div className="flex items-center gap-2">
          
        </div>
      </form>
       )
}
export default FormCreateProduct