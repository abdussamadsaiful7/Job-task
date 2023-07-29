import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AllData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5080/allData')
            .then(res => res.json())
            .then(data => setData(data))
    }, [data])
    return (
        <div>


            <div className='md:mx-20 mx-4 mb-10'>
                {
                    <div className="overflow-x-auto">
                        <table className="table">
                            {
                                data.map((singleData, index) =>

                                    <tbody key={singleData._id}>
                                        <tr className="cursor-pointer 
                                         hover:scale-[0.95] duration-300 hover:bg-blue-500 hover:text-white">
                                            <td>{index + 1}</td>
                                            <td>Name: {singleData.name}</td>
                                            <td>Category: {singleData.category}</td>
                                            <td><Link to={`/updateData/${singleData._id}`}>
                                                <button className="btn btn-circle btn-xs btn-outline"><FaRegEdit /></button>
                                            </Link></td>
                                        </tr>
                                        <hr />
                                    </tbody>

                                )
                            }
                        </table>
                    </div>
                }
            </div>

        </div>
    );
};

export default AllData;