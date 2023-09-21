import React, { useState } from 'react';

interface UseCheckboxListHook {
    checkedIndices: number[];
    handleDivClick: (index: number) => void;
}

const useCheckboxList = (): UseCheckboxListHook => {
    const [checkedIndices, setCheckedIndices] = useState<number[]>([]);

    const handleDivClick = (index: number) => {
        if (checkedIndices.includes(index)) {
            setCheckedIndices(checkedIndices.filter((checkedIndex) => checkedIndex !== index));
        } else {
            setCheckedIndices([...checkedIndices, index]);
        }
    };

    return {
        checkedIndices,
        handleDivClick
    };
};

export default useCheckboxList;
