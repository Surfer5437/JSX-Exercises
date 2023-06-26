function Person({name, age='no age at this time', hobbies=["no hobbies at this time"]}){
    let oldEnough=age>17?"Please go Vote!":<h3>You must be 18</h3>;
    let adjustedName = name.length>8?name.slice(0,6)+'..':name;
    let hobbyList=[];
    for (const hobby of hobbies) {
        hobbyList.push(<li>{hobby}</li>)
    }
    return(
    <div className="App-header">
      <p>Learn some more information about this person</p>
      <p>{adjustedName} is this persons name and is {age} years old</p>
      <p>{oldEnough}</p>
      <h4>--Hobby List--</h4>
      <ul>
        {hobbyList}
      </ul>
    </div>
    )
}

