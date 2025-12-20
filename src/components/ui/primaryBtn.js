
function PrimaryBtn({ children }){
    function handleClick(){
        console.log("Primary button clicked")
    }
    return(
        <button className='primary-btn' onClick={handleClick}>{children}</button>
    );
}
export default PrimaryBtn;