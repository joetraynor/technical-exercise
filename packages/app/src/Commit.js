import './App.css';

const Commit = (props) => {
    return props.isLoading === true ? (
<p>loading</p>
    ) : (
    <div className='Commit'>
        <p className='MessageText'>{props.message}</p>
        <p className='MessageDetails'>{props.name}, {props.date}</p>
        {/* <p className='MessageDetails'>{props.date}</p> */}
    </div>
    )}
export default Commit;
