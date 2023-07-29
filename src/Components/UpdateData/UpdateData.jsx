import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateData = () => {
    const updatedData = useLoaderData();
    const { _id, name, category } = updatedData;

   // console.log(updatedData)


    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleUpdateData = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;

        const updateData = { name, category };
        console.log('update1234567890', updateData);


          //send to the server;
          fetch(`http://localhost:5080/allData/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                  toast.success('Data Updated successfully!')
                } 
            })

    }


    return (
        <div className='md:mx-52 my-20 p-2'>
            <h1 className='text-center font-serif text-xl font-semibold'>Update Data</h1>
            <form  onSubmit={handleUpdateData} className='md:w-1/2 p-6'>
                <div className='mb-6'>
                    <h1 className='mb-2'>Name</h1>
                    <input type="text" placeholder="Name" name='name' defaultValue={name} className="input input-bordered input-primary w-full" />
                </div>
                <div >
                    <h1 className='mb-2'>Sectors</h1>


                    <select multiple  name="category" defaultValue={category} className="w-full border border-blue-800">
                        <option disabled >Manufacturing</option>
                        <option>Construction materials</option>
                        <option>Electronics and Optics</option>

                        <option disabled >Food and Beverage</option>
                        <option >Bakery and Confectionary products</option>
                        <option>Beverage</option>
                        <option>Fish and Fish products</option>
                        <option>Meat and meat products</option>
                        <option>Milk and dairy products</option>
                        <option>Sweets and snack food</option>
                        <option>Others</option>

                        <option disabled >Furniture</option>
                        <option>Bathroom/Sauna</option>
                        <option>Bedroom</option>
                        <option>Children's Room</option>
                        <option>Kitchen</option>
                        <option>Office</option>
                        <option>Other/Furniture</option>
                        <option>Outdoor</option>
                        <option>Project Furniture</option>

                        <option disabled >Machinery</option>
                        <option>Machinery Components</option>
                        <option>Machinery equipment/tools</option>
                        <option>Manufacturing of Machinery</option>

                        <option disabled >Maritime</option>
                        <option>Aluminum and steel workboat</option>
                        <option>Boat/Yacht building</option>
                        <option>Ship repair and conversion</option>
                        <option>Metal structures</option>
                        <option>Other</option>
                        <option>Repair and maintenance service</option>

                        <option disabled >MetalWorking</option>
                        <option>Construction of metal structures</option>
                        <option>Houses and buildings</option>
                        <option>Metal products</option>
                        <option>Metal works</option>

                        <option disabled >CNC-Machining</option>
                        <option>Forgings, Fasteners</option>
                        <option>Gas, Plasma, Laser cutting</option>
                        <option>MIG, TIG, Aluminum welding</option>

                        <option disabled >Plastic and Rubber</option>
                        <option>Forgings, Fasteners</option>
                        <option>Packaging</option>
                        <option>Plastic goods</option>
                        <option>Plastic processing technology</option>
                        <option>Blowing</option>
                        <option>Moulding</option>
                        <option>Plastic welding and processing</option>
                        <option>Plastic profiles</option>

                        <option disabled >Printing</option>
                        <option>Advertising</option>
                        <option>Book/Periodicals printing</option>
                        <option>Labelling and packing printing</option>

                        <option disabled >Textile and Clothing</option>
                        <option>Clothing</option>
                        <option>Book/Periodicals printing</option>
                        <option>Textile</option>

                        <option disabled >Wood</option>
                        <option>Other/wood</option>
                        <option>Book/Periodicals printing</option>
                        <option>Wooden building materials</option>
                        <option>Wooden houses</option>

                        <option disabled >Other</option>
                        <option>Creative industries</option>
                        <option>Energy tecnology</option>
                        <option>Environment</option>

                        <option disabled >Service</option>
                        <option>Business services</option>
                        <option>Engineering</option>

                        <option disabled >Information Tecnology and Telecommunications</option>
                        <option>Data processing, Web portals, E-marketing</option>
                        <option>Programming, Consultancy</option>
                        <option>Software, Hardware</option>
                        <option>Telecommunication</option>

                        <option disabled >Tourism</option>
                        <option>Translation services</option>

                        <option disabled >Transport and Logistics</option>
                        <option>Air</option>
                        <option>Railway</option>
                        <option>Road</option>
                        <option>Water</option>
                    </select>
                </div>

                <div className='flex mt-5'>
                    <input type="checkbox" name="" id="" checked={isChecked} onClick={handleCheckboxChange} />
                    <p className='ml-2'>Agree to terms</p>
                </div>
                <input className='btn btn-primary btn-sm rounded-sm mt-4' disabled={!isChecked} type="submit" value="Updated" />
            </form>

        </div>
    );
};

export default UpdateData;