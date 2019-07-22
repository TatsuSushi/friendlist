import React from 'react';

interface ISplitName {
    name : string,
}

const SplitName = (props :ISplitName) => {
    const nameArray = props.name.split(" ");

    return (
        <span> {nameArray[0]} <strong>{nameArray[1]}</strong></span>
    );
}

export default SplitName;