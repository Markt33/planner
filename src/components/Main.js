import React from 'react'

export default function Main() {

    return(
        <main className='main'>
            <h2 className='main--header'>Plese Fill out the Fields below</h2>

            <form className='form'> 
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </main>
    )
}