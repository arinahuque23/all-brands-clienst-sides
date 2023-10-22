import Swal from 'sweetalert2'

const FormTwoClients = () => {
    

    const handleBrandClientProducts = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const short_descript = form.short_descript.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = { name,  brandName, type, price, short_descript, rating, photo }

            console.log(newProduct);


            //send to server

            fetch('',{
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify()
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
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
        <div>
            <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-amber-300 text-center">Add Your Products</h2>
            <form onSubmit={handleBrandClientProducts} >
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl">Products Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" placeholder="brand name"
                            
                            required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="type" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Price" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short_descript" placeholder="short description" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="rating" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Products" className="btn btn-block bg-amber-200" />

            </form>
        </div>
        </div>
    );
};

export default FormTwoClients;