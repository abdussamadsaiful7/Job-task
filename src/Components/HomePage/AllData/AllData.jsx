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
    }, [])
    return (
        <div>


            <div className='mx-20 my-10'>
                {
                    <div className="overflow-x-auto">
                        <table className="table">
                            {
                                data.map((singleData, index) =>

                                    <tbody>
                                        <tr className="bg-base-200 mb-4">
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