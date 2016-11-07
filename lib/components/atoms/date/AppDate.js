import React from 'react'; 
import style from './AppDate.css';  

function AppDate(props) { 
	return ( 
		<p className={style.root} name={props.dateText}>{props.dateText}</p> 
	); 
}

AppDate.propTypes = {
	dateText: React.PropTypes.string.isRequired 
};

  export default AppDate;
