
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { AddProduct } from './FormCreateProduct';
import FormCreateProduct from './FormCreateProduct';
const ButtonCreateProduct = ()=>{
  const [openModal, setOpenModal] = useState(false);
  function getDataForm(product:AddProduct){
    console.log(product);
  }
  async function createProduct(){
    setOpenModal(true);
    try{
       const postProduct = await fetch('https://fakestoreapi.com/products',{
        method: "POST",
        body: JSON.stringify({
          getDataForm
        })
       })
       const res = await  postProduct.json();
       console.log(res);
    }
    catch(error){
      console.log(error);
    }
    finally{
      setOpenModal(false);
    }
  }
    return (
        <>
           <div>
            <Button onClick={()=> setOpenModal(true)} color="blue" className="mx-auto mb-6">Create Product</Button>
           </div>
           <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
           <Modal.Header>Terms of Service</Modal.Header>
           <Modal.Body>
           <div className="space-y-6">
               <FormCreateProduct getDataForm={getDataForm}/>
           </div>
           </Modal.Body>
           <Modal.Footer>
             <Button onClick={() => setOpenModal(false)}>Create</Button>
             <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancel
             </Button>
           </Modal.Footer>
         </Modal>

        </>
       
    )
}
export default ButtonCreateProduct