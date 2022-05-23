import { useEffect, useState } from 'react'
import { getBerryById } from './services/berries.service.js'

const Berries = () => {
    const [berries, setBerries] = useState([])

    const fetchData = () => {
        getBerryById()
            .mocked()
            .toPromise()
            .then((res) => {
                setBerries(res)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
        {
            berries.map((berry, index) => (
                <p key={`berry-${index}`}>{`${berry.id} - ${berry.name}`}</p>
            ))
        }
        </div>
    )
}
export default Berries