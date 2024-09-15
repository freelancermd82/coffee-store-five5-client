import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const taste = form.taste.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, taste, quantity, supplier, category, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })



    }
    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h2 className='text-center font-extrabold text-5xl text-orange-300 mb-12'>Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex gap-4 mb-6'>
                    <div className='form-control md:w-1/2'>
                        <div>
                            <label className='label-text'>Coffee Name</label>
                        </div>
                        <div>
                            <label>
                                <input name='name' className='border border-collapse w-full p-2' type="text" placeholder='name' />
                            </label>
                        </div>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <div>
                            <label className='label-text'>Quantity</label>
                        </div>
                        <div>
                            <label>
                                <input name='quantity' className='border border-collapse w-full p-2' type="text" placeholder='quantity' />
                            </label>
                        </div>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className='md:flex gap-4 mb-6'>
                    <div className='form-control md:w-1/2'>
                        <div>
                            <label className='label-text'>Supplier</label>
                        </div>
                        <div>
                            <label>
                                <input name='supplier' className='border border-collapse w-full p-2' type="text" placeholder='Supplier' />
                            </label>
                        </div>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <div>
                            <label className='label-text'>Taste</label>
                        </div>
                        <div>
                            <label>
                                <input name='taste' className='border border-collapse w-full p-2' type="text" placeholder='taste' />
                            </label>
                        </div>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex gap-4 mb-6'>
                    <div className='form-control md:w-1/2'>
                        <div>
                            <label className='label-text'>Category</label>
                        </div>
                        <div>
                            <label>
                                <input name='category' className='border border-collapse w-full p-2' type="text" placeholder='Category' />
                            </label>
                        </div>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <div>
                            <label className='label-text'>Details</label>
                        </div>
                        <div>
                            <label>
                                <input name='details' className='border border-collapse w-full p-2' type="text" placeholder='Details' />
                            </label>
                        </div>
                    </div>
                </div>
                {/* form photo row */}
                <div className='mb-6'>
                    <div className='form-control w-full'>
                        <div>
                            <label className='label-text'>Photo</label>
                        </div>
                        <div>
                            <label>
                                <input name='photo' className='border border-collapse w-full p-2' type="text" placeholder='Photo url' />
                            </label>
                        </div>
                    </div>
                </div>
                <input className='btn btn-block bg-orange-300' type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;