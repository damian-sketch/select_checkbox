import React, { useEffect, useState } from 'react'
import Checkbox from './Checkbox';

const App = () => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);
    const Catalogues = [
        {
            id: "1",
            name: "potato"
        },
        {
            id: "2",
            name: "tomato"
        },
        {
            id: "3",
            name: "apple"
        }
    ]

    useEffect(() => {
        setList(Catalogues);
    }, [list]);

    const handleSelectAll = () => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map((li) => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = (e) => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter((item) => item !== id));
        }
    };

    const catalog = list.map(({ id, name }) => {
        return (
            <>
                <Checkbox
                    type="checkbox"
                    name={name}
                    id={id}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(id)}
                />
                {name}
            </>
        )
    })
    return (
        <div className="container">
            <Checkbox
                type="checkbox"
                name="selectAll"
                id="selectAll"
                handleClick={handleSelectAll}
                isChecked={isCheckAll}
            />
            Select All
            {catalog}
        </div>
    )
}

export default App