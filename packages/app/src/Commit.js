import './App.css';

const Commit = (props) => {
    return (
        <div className='Commit'>
            <p className='MessageText'>{props.message}</p>
            <p className='MessageDetails'>{props.name}, {props.date}</p>
        </div>
    )}
export default Commit;
