import React from 'react';

const InputPage = () => {
    return (
        <div className='m-36'>
            <div className='w-1/2'>
                <div className='mb-6'>
                    <h1 className='mb-2'>Name</h1>
                    <input type="text" placeholder="Name" className="input input-bordered input-primary w-full" />
                </div>
                <div>
                    <h1 className='mb-2'>Sectors</h1>
                    <div
                        className='rounded-lg '
                        style={{
                            width: '460px',
                            height: '220px',
                            overflowY: 'scroll',
                            border: '1px solid blue',
                            padding: '10px',
                        }}
                    >
                        <p>
                            <select className="w-full">
                                <option disabled selected>Manufacturing</option>
                                <option>Construction materials</option>
                                <option>Electronics and Optics</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Food and Beverage</option>
                                <option>Bakery and Confectionary products</option>
                                <option>Beverage</option>
                                <option>Fish and Fish products</option>
                                <option>Meat and meat products</option>
                                <option>Milk and dairy products</option>
                                <option>Sweets and snack food</option>
                                <option>Others</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Furniture</option>
                                <option>Bathroom/Sauna</option>
                                <option>Bedroom</option>
                                <option>Children's Room</option>
                                <option>Kitchen</option>
                                <option>Office</option>
                                <option>Other/Furniture</option>
                                <option>Outdoor</option>
                                <option>Project Furniture</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Machinery</option>
                                <option>Machinery Components</option>
                                <option>Machinery equipment/tools</option>
                                <option>Manufacturing of Machinery</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Maritime</option>
                                <option>Aluminum and steel workboat</option>
                                <option>Boat/Yacht building</option>
                                <option>Ship repair and conversion</option>
                                <option>Metal structures</option>
                                <option>Other</option>
                                <option>Repair and maintenance service</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>MetalWorking</option>
                                <option>Construction of metal structures</option>
                                <option>Houses and buildings</option>
                                <option>Metal products</option>
                                <option>Metal works</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>CNC-Machining</option>
                                <option>Forgings, Fasteners</option>
                                <option>Gas, Plasma, Laser cutting</option>
                                <option>MIG, TIG, Aluminum welding</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Plastic and Rubber</option>
                                <option>Forgings, Fasteners</option>
                                <option>Packaging</option>
                                <option>Plastic goods</option>
                                <option>Plastic processing technology</option>
                                <option>Blowing</option>
                                <option>Moulding</option>
                                <option>Plastic welding and processing</option>
                                <option>Plastic profiles</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Printing</option>
                                <option>Advertising</option>
                                <option>Book/Periodicals printing</option>
                                <option>Labelling and packing printing</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Textile and Clothing</option>
                                <option>Clothing</option>
                                <option>Book/Periodicals printing</option>
                                <option>Textile</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Wood</option>
                                <option>Other/wood</option>
                                <option>Book/Periodicals printing</option>
                                <option>Wooden building materials</option>
                                <option>Wooden houses</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Other</option>
                                <option>Creative industries</option>
                                <option>Energy tecnology</option>
                                <option>Environment</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Service</option>
                                <option>Business services</option>
                                <option>Engineering</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Information Tecnology and Telecommunications</option>
                                <option>Data processing, Web portals, E-marketing</option>
                                <option>Programming, Consultancy</option>
                                <option>Software, Hardware</option>
                                <option>Telecommunication</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Tourism</option>
                                <option>Translation services</option>
                            </select>
                            <select className="w-full ">
                                <option disabled selected>Transport and Logistics</option>
                                <option>Air</option>
                                <option>Railway</option>
                                <option>Road</option>
                                <option>Water</option>
                            </select>
                        </p>
                    </div>

                    <div className='flex mt-5'>
                        <input type="checkbox" name="" id="" />
                        <p className='ml-2'>Agree to terms</p>
                    </div>
                    <input className='btn btn-primary btn-sm rounded-sm mt-4' type="submit" value="Save" />

                </div>
            </div>
        </div>
    );
};

export default InputPage;