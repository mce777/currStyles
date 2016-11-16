Input with drop-down

    <InputDropdown
        id="exampleID2"
        inputName="Sample text"
        options={ [{name:"item1", value:"value1"}, {name:"item2", value:"value2"}]} 
        handleChange={() => {alert("why you change?")}}>
    </InputDropdown>