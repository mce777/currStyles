import React from 'react'; 
import style from './AppDate.css';  

function AppDate(props) { 
	return ( 
		<div>
			{/*label away and substitute */}
			<label className={style.root}>{props.text}</label>
			<time className={style.date}>{props.time}</time>
		</div>
	); 
}

AppDate.propTypes = {
	text: React.PropTypes.string.isRequired ,
	time: React.PropTypes.string.isRequired
};

  export default AppDate;
