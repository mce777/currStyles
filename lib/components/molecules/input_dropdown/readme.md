Input with drop-down

    <InputDropdown
        id="exampleID2"
        inputName="Sample text"
        placeholder="e.g. 123"
        type="text"
        options={ [{name:"item1", value:"value1"}, {name:"item2", value:"value2"}] } 
        handleDropdownChange={() => {alert("why you change, dropdown?")}}
        handleInputChange={() => {console.log("onInputChange being logged here")}} />
