import React, { FC } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'

const RemoveBtn: FC = () => {
    return (
        <button>
            <FaRegTrashCan size={22} className='text-red-400' />
        </button>
    )
}

export default RemoveBtn