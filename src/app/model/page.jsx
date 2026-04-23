import React from 'react'

const ModelPage = async () => {
    const res = await fetch('http://localhost:5000/models', {
        next:{revalidate:10}
    })
    const models = await res.json()
    // console.log(models)

    return (
        <div>
            <h2 className='text-center text-4xl font-bold m-3'>Model</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 m-10'>
                {
                    models.map(model => <div key={model.id} className='border rounded-2xl p-5 space-y-4'>
                        <h2 className='text-2xl font-bold'>{model.title}</h2>
                        <p>{model.description}</p>
                        <p className='text-green-600 font-semibold text-xl'>${model.price}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default ModelPage
