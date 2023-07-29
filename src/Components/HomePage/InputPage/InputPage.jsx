import React, { useState } from 'react';
import toast from 'react-hot-toast';

const InputPage = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleAddCategory = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        // const food = form.food.value;
        // const Furniture = form.Furniture.value;
        // const Machinery = form.Machinery.value;
        // const Maritime = form.Maritime.value;
        // const MetalWorking = form.MetalWorking.value;
        // const CNCMachining = form.CNCMachining.value;
        // const Plastic = form.Plastic.value;
        // const Printing = form.Printing.value;
        // const Wood = form.Wood.value;
        // const Other = form.Other.value;
        // const Information = form.Information.value;
        // const Textile = form.Textile.value;
        // const Service = form.Service.value;
        // const Tourism = form.Tourism.value;
        // const Transport = form.Transport.value;

        //const newData = { name, Manufacturing, food, Furniture, Machinery, Maritime, MetalWorking, CNCMachining, Plastic, Printing, Wood, Other, Information, Textile, Service, Tourism, Transport };

        const newData = { name, category }

        console.log(newData);

        fetch('http://localhost:5080/allData', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Add a Product successfully!')
                }
                form.reset();
            })
    }






    return (
        <div className='md:p-36 p-5'>
            <form onSubmit={handleAddCategory} className='md:w-1/2'>
                <div className='mb-6'>
                    <h1 className='mb-2'>Name</h1>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered input-primary w-full" />
                </div>
                <div >
                    <h1 className='mb-2'>Sectors</h1>

                 
                        <select multiple defaultValue="Category" name="category" className="w-full border border-blue-800">
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
                    <input type="checkbox" name="" id="" checked={isChecked}
                        onChange={handleCheckboxChange} />
                    <p className='ml-2'>Agree to terms</p>
                </div>
                <input className='btn btn-primary btn-sm rounded-sm mt-4' disabled={!isChecked} type="submit" value="Save" />


            </form>
        </div>
    );
};

export default InputPage;