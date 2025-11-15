function Sort({onSort, setSorting}){
    return(
        <select onChange={(e)=>{
            onSort(e.target.value)
            setSorting(e.target.value)
        }}>
            <option value={"description"}>Description</option>
            <option value={"category"}>Category</option>
        </select>
    )
}
export default Sort