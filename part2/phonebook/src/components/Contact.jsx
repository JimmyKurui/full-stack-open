const Contact = ({name, tel, handleDelete}) => 
    <>
        <div>
            {name} {tel}
            <button onClick={handleDelete}>delete</button>
        </div>
    </>

export default Contact